import React,{ useEffect, useState } from "react"
import todolistService from "../services/todolist/todolist.service";
import InputText from "./InputText";
import Checkbox from "./Checkbox";

export default function Todolist() {
    const [todoList, setTodolist] = useState([]);

    useEffect(()=>{
        todolistService.getTodoList().then((response)=>{
            let data = response.data; 
            setTodolist(data);
        })
    },[]);
    const addTodoList = (newLibelle)=>{
        todolistService.insertTodoList(newLibelle).then((response)=>{
            todolistService.getTodoList().then((response)=>{
                let data = response.data; 
                setTodolist(data);
            });
        });
    }
    const deleteTodoList = (id)=>{
        setTodolist(todoList.filter((todo)=> todo._id !== id));
        todolistService.deleteTodoList(id).then((response)=>{});
    }
    const updateCheckbox = (id)=>{
        setTodolist(todoList.map((todo) =>todo._id !== id ? todo : { ...todo, done: !todo.done }));
        const findItem = todoList.find((todo)=> todo._id === id);
        const done = !findItem.done
        todolistService.updateCheckbox(id,done).then((response)=>{});
    }
    return (
        <div className="">
            <div style={{display:'flex'}}>
                <InputText onAddItem={addTodoList}/>
            </div>
            <div className="" style={{width:'450px',marginTop:'20px'}}>
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
                        <Checkbox todo={todo} onChangeBox={updateCheckbox}/>
                        <div className="">
                            <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
                                {todo.libelle}
                            </span>   
                        </div>
                        <button 
                            className="" 
                            style={{marginLeft:'10px'}} 
                            onClick={()=>deleteTodoList(todo._id)}
                        >
                            x
                        </button>
                    </li>
                )}
            </div>        
        </div>
    )
}
