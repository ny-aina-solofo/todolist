const express = require("express");
const cors = require("cors");
const routes = require("../server/app/routes/routes"); 
const app = express(); 
const dotenv = require('dotenv');

dotenv.config();
const urlAPI = process.env.URL_API; 
const portAPI = process.env.PORT_API; 
const corsOptions = {origin : urlAPI};

app.use(cors(corsOptions)); // cors provides Express middleware to enable CORS with various options
app.use(express.json()); // create an Express app 
app.use(process.env.BASE_URL,routes);
app.listen(portAPI, ()=>{
    console.log(`app run on port ${portAPI}`);
})
