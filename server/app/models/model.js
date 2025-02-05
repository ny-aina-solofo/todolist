const mongoose = require('../config/db.config'); 

mongoose.Promise = global.Promise;

const db = {};
db.todolist = require('./todolist.model')(mongoose);

module.exports = db;