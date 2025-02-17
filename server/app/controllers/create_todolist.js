const db = require('../models/model');
const Todolist = db.todolist;

const insertTodoList = async (req,res,next) => {
    const result = await Todolist.create(
        {libelle: "Sleep for 1 hour" ,done: false, rang:`1`},
        {libelle: "add Bootstrap for todo app " ,done: true, rang:`2`},
        {libelle: "Complete Todo App side project" ,done: false, rang:`3`},
        {libelle: "Learn javascript courses",done: true, rang:`4`}
    );
    console.log(result);
    console.log("todolist inserée !!");
    process.exit();
}

insertTodoList();