const pool = require("../config/db.config");

const getTodoList = async function (req,res,next) {
    const sql_select = "select id,libelle,done,rang::integer from todo.todolist order by rang asc";
    const result = await pool.query(sql_select,[]);  
    if (Object.keys(result).length > 0) res.status(200).send(result.rows);
    else res.status(200).send();
    
}
const insertTodoList = async function (req,res,next) {
    const libelle = req.body.libelle;
    const sql_select = "select (max(rang::integer)+1) as max from todo.todolist"; 
    const result = await pool.query(sql_select,[]);
    if (Object.keys(result).length > 0) {
        const rang = result.rows[0].max;
        const sql_insert = "insert into todo.todolist(libelle,done,rang) VALUES ($1,false,$2)";
        await pool.query(sql_insert,[libelle,rang]);
    } 
    res.status(200).send({success:true});
}

const deleteTodoList = async function (req,res,next) {
    const id_todo = req.params.id;
    const sql_delete = "delete from todo.todolist where id = $1";
    await pool.query(sql_delete,[id_todo]);
    res.status(200).send({success:true});
}

const updateCheckbox = async function (req,res,next) {
    const id_todo = req.body.id;
    const checkdone = req.body.done;
    const sql_update = `update todo.todolist set done = $1 where id = $2;`
    await pool.query(sql_update,[checkdone,id_todo])
    res.status(200).send({success:true}); 
}
const updateTodoList = async function (req,res,next) {
    const id_todo = req.body.id;
    const libelle = req.body.libelle; 
    const sql_update = "update todo.todolist set libelle = $1 where id = $2;"
    await pool.query(sql_update,[libelle,id_todo])
    res.status(200).send({success:true});    
}
const updateTodoListOrder = async function (req,res,next) {
    const updatedList = req.body.updatedList;
    for (const key of updatedList) {
        const sql_update = `UPDATE todo.todolist SET rang = $1 WHERE id = $2`;
        await pool.query(sql_update, [key.rang, key.id]);
    }
    res.status(200).send({message : "rang enregistré"});
}



module.exports= {
    getTodoList, 
    insertTodoList,
    deleteTodoList, 
    updateCheckbox, 
    updateTodoList,
    updateTodoListOrder
};