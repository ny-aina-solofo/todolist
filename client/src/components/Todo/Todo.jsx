import React from "react";
import { useTodoDispatch } from "../../context/context";
import todolistService from "../../services/todolist/todolist.service";
import Checkbox from "../Checkbox/Checkbox";

export const Todo = ({todo}) => {
    const dispatch = useTodoDispatch();
    const deleteTodoList = (id)=>{
        dispatch({ type: 'delete_item', id : id });
        todolistService.deleteTodoList(id).then((response)=>{});
    }
    return (
        <div 
            style={{
                display:'flex',
                marginBottom: '8px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <Checkbox todo={todo}/>
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
        </div>
    )
}