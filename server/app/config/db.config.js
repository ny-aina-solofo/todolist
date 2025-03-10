const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGODB_CONNECTION_STRING_DEV;

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

