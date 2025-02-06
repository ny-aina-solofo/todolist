const db = require('../models/model');
const Todolist = db.todolist;

const getTodoList = async (req,res,next) => {
    const result = await Todolist.find();
    if (Object.keys(result).length > 0) res.status(200).send(result);
    else res.status(200).send();    
}

const insertTodoList = async (req,res,next) => {
    const newLibelle = req.body.libelle;
    const maxRange = await Todolist.aggregate([
        { $project: { rang: { $toInt: "$rang" } } },// Convertit la valeur en entier 
        { $group: { _id: null, max: { $max: "$rang" }} },
        { $project: { _id: 0, max: { $add: ["$max", 1] } }} // Ajoute 1 au maximum trouvé
    ]);
    if (Object.keys(maxRange).length > 0) {
        const rang = maxRange[0].max;
        await Todolist.create(
            {libelle: newLibelle ,done: false, rang:`${rang}`}
        )
    }
    res.status(200).send({success:true});
}
const deleteTodoList = async (req,res,next) => {
    const id_todo = req.params.id;
    await Todolist.deleteOne({_id : id_todo });
    res.status(200).send({success:true});    
}

module.exports = {
    getTodoList,
    insertTodoList,
    deleteTodoList
}


