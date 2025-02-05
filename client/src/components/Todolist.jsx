import React,{ useEffect, useState } from "react"
import todolistService from "../services/todolist/todolist.service";

export default function Todolist() {
    const [todoList, setTodolist] = useState([]);

    useEffect(()=>{
        todolistService.getTodoList().then((response)=>{
            let data = response.data; 
            setTodolist(data);
        })
    },[]);

    return (
        <div className="">
            <div className="mt-3 " style={{width:450+'px'}}>
                {todoList.map( todo =>
                    <li key={todo._id}  
                        style={{
                            display:'flex',
                            marginBottom: '8px',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <div className="">
                            <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
                                {todo.libelle}
                            </span>   
                        </div>
                    </li>
                )}
            </div>        
        </div>
    )
}
