import React, { useState } from "react"
import { useTodoDispatch } from "../../context/context";
import todolistService from "../../services/todolist/todolist.service";

export default function InputText() {
    const [inputValue,setInputValue] = useState('');
    const dispatch = useTodoDispatch();
    
    const addTodoList = ()=>{
        if (!inputValue) return;
        // dispatch({ type: 'add_item', libelle : inputValue });
        todolistService.insertTodoList(inputValue).then((response)=>{
            todolistService.getTodoList().then((response)=>{
                dispatch({ type: 'set_data', data: response?.data || [] });
            });
        });
        setInputValue('');
    } 
    return(
        <div>
            <input 
                type="text" 
                className=""  
                placeholder="Nouvelle tâche" 
                value={inputValue} 
                onChange={(e)=> {
                    e.preventDefault();
                    setInputValue(e.target.value);
                }}
            />
            <button className="" type="button" onClick={addTodoList}>
                Ajouter
            </button>
        </div>
    )
}