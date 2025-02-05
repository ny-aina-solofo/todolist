const express = require('express');
const router = express.Router(); 

const todolistController = require('../controllers/todolist_controller');
router.get('/get-todo',todolistController.getTodolist);

module.exports = router;