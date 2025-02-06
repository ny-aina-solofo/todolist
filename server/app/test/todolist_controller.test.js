const { getTodoList,insertTodoList } = require("../controllers/todolist_controller");
const db = require("../models/model");
const httpMocks = require('node-mocks-http');

jest.mock("../models/model", () => ({
    todolist: {
        find: jest.fn(),
        aggregate : jest.fn(),
        create: jest.fn(),

    },
}));

describe('Todolist controller',()=>{
    let req, res, next;
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
    
    it("get todolist with status 200",async()=>{
        const data = [{
            _id: '67a1beef2b664bd6f5338b15', libelle: 'Sleep for 1 hour',
            done: false, rang: '1',__v: 0
        }]
        db.todolist.find.mockResolvedValue(data); // Simulation du comportement de `Todolist.find()`
        await getTodoList(req,res,next); // Exécution du contrôleur et vérification des résultats attendue 
        expect(res.statusCode).toEqual(200);
        expect(res._getData()).toEqual(data);
    })
    it("insert todolist with status 200",async()=>{
        req.body = {libelle: 'Sleep for 1 hour'};
        db.todolist.aggregate.mockResolvedValue([{ max : 5 }]);
        const newTodo = [{
            libelle: 'Sleep for 1 hour',done: false,rang: '5'
        }]
        db.todolist.create.mockResolvedValue(newTodo);
        await insertTodoList(req,res,next);
        expect(db.todolist.create).toHaveBeenCalledWith({
            libelle: 'Sleep for 1 hour',done: false,rang: '5'
        });
        expect(res.statusCode).toEqual(200);
        expect(res._getData()).toEqual({success:true});
    })
})


