const { getTodolist } = require("../controllers/todolist_controller");
const db = require("../models/model");
const httpMocks = require('node-mocks-http');

jest.mock("../models/model", () => ({
    todolist: {
        find: jest.fn(),
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
        
        // Simulation du comportement de `Todolist.find()`
        db.todolist.find.mockResolvedValue(data);
        
        // Exécution du contrôleur et vérification des résultats attendue :
        await getTodolist(req,res,next);
        expect(res.statusCode).toEqual(200);
        expect(res._getData()).toEqual(data);
    })
})


