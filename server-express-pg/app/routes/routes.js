const express = require('express');
const router = express.Router(); 

const todolistController = require('../controllers/todolist_controller');
router.get('/get-todo-list',todolistController.getTodoList);  
router.post('/insert-todo-list',todolistController.insertTodoList);
router.delete('/delete-todo-list/:id',todolistController.deleteTodoList);
router.put('/update-checkbox',todolistController.updateCheckbox);
router.put('/update-todo-list',todolistController.updateTodoList);
router.put('/update-rang',todolistController.updateTodoListOrder);

const filterController = require('../controllers/filter_controller');
router.get('/get-actives-todo',filterController.getActivesTodo); 
router.get('/get-completed-todo',filterController.getCompletedTodo); 

module.exports = router;