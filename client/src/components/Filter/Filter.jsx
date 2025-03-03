import React, { useState,useEffect } from "react"
import { useTodoDispatch } from "../../context/context";

export const Filter = () => {
    const dispatch = useTodoDispatch();
    const filterTodo = (filter)=>{
        switch (filter) {
            case "all":
                dispatch({ type: 'display_all_items'});
                break;
            case "actives":
                dispatch({ type: 'display_active_items'});
                break;
            case "completed":
                dispatch({ type: 'display_completed_items'});
                break;    
            default:
                break;
        }
    }
    return(
        <div style={{marginLeft:40+'px'}}>
            <label className="">Filtre par </label>
            <select 
                className="" name="filtre" id="" 
                onChange={(e)=>{
                    e.preventDefault();
                    filterTodo(e.target.value);
                }}
            >
                <option value="all">Toutes</option>
                <option value="actives">Actives</option>
                <option value="completed">Terminées</option>
            </select>
        </div>
    )
}