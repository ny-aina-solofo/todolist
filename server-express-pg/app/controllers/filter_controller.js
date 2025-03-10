const pool = require("../config/db.config");

const getActivesTodo = async (req,res,next)=>{
    const sql_select = "SELECT * FROM todo.todolist WHERE done = false";
    const result = await pool.query(sql_select,[]);
    if (Object.keys(result).length > 0) res.status(200).send(result.rows);
    else res.status(200).send();
}
const getCompletedTodo = async (req,res,next)=>{
    const sql_select = "SELECT * FROM todo.todolist WHERE done = true";
    const result = await pool.query(sql_select,[]);
    if (Object.keys(result).length > 0) res.status(200).send(result.rows);
    else res.status(200).send();
}

module.exports = {
    getActivesTodo, 
    getCompletedTodo, 
}