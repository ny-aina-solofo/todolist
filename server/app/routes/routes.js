const express = require('express');
const router = express.Router(); 

const todolistController = require('../controllers/todolist_controller');
router.get('/get-todo',todolistController.getTodoList);
router.post('/insert-todo',todolistController.insertTodoList);
router.delete('/delete-todo/:id',todolistController.deleteTodoList);

module.exports = router;