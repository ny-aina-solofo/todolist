import axios from "axios"; 

export default axios.create({
    baseURL : "http://localhost:3000/todo-list-app-api",
    headers: {
        "Content-type": "application/json"
    } 
}); 