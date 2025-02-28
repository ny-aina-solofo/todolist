const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGODB_CONNECTION_STRING_DEV;
// const url = process.env.MONGODB_CONNECTION_STRING_PROD;
// const url = "mongodb://127.0.0.1:27017/todolist"
// const url = "mongodb+srv://mongodb:mongodb@ny-aina.avf6r.mongodb.net/todolist"

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

