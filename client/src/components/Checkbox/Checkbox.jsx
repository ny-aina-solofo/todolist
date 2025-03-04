import React, { useState } from "react"
import todolistService from "../../services/todolist/todolist.service";
import { useTodoDispatch } from "../../context/context";

export default function Checkbox({todo}) { 
    const dispatch = useTodoDispatch();

    const updateCheckbox = (id)=>{
        dispatch({ type: 'update_checkbox', id : id });
        const done = !todo.done;
        todolistService.updateCheckbox(id,done).then((response)=>{});
    }
    return(
        <div>
            <input 
                type="checkbox"
                style={{marginRight:"20px"}} 
                className="" 
                checked={todo.done} 
                onChange={()=>updateCheckbox(todo._id)}
            />
        </div>
    )
}