const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/todolist"

mongoose
    .connect(url)
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

module.exports = mongoose;

