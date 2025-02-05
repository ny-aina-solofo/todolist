const express = require("express");
const cors = require("cors");
const routes = require("../server/app/routes/routes"); 
const app = express(); 

const urlAPI = "http://localhost:5173"; 
const portAPI = "3000"; 
const corsOptions = {origin : urlAPI};

app.use(cors(corsOptions)); // cors provides Express middleware to enable CORS with various options
app.use(express.json()); // create an Express app 
app.use('/todo-list-app-api',routes);
app.listen(portAPI, ()=>{
    console.log(`app run on port ${portAPI}`);
})
