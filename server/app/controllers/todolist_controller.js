const db = require('../models/model');
const Todolist = db.todolist;

const getTodolist = async (req,res,next) => {
    const result = await Todolist.find();
    if (Object.keys(result).length > 0) res.status(200).send(result);
    else res.status(200).send();    
}

// const insertTodoList = async (req,res,next) => {
//     const todolist = await Todolist.create(
//         {libelle : 'Sleep for 1 hour',done : false,rang : '1'},
//         {libelle : 'add tailwind for todo app ',done : false,rang : '2'},
//         {libelle : 'Complete Todo App side project',done : true,rang : '3'},
//         {libelle : 'Learn javascript courses',done : true,rang : '4'}
//     )
//     console.log(todolist);
// } 


module.exports = {
    getTodolist
}


