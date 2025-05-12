import React, { useState } from "react"
import { useTodoDispatch } from "../../context/context";
import todolistService from "../../services/todolist/todolist.service";

export default function Form() {
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
        <div
            className="
                mb-4 sm:mb-6 flex shadow-2xl items-center justify-between border-none 
                bg-white rounded-md flex items-center w-full p-2 sm:p-3
                dark:bg-Dark-Very-Dark-Desaturated-Blue
            "
        >
            <div>
                <input 
                    type="text" 
                    className="
                        outline-none flex-1 w-full pt-1 text-Light-Very-Dark-Grayish-Blue 
                        placeholder:text-Light-Dark-Grayish-Blue
                        dark:text-Dark-Light-Grayish-Blue
                        dark:placeholder:text-Dark-Very-Dark-Grayish-Blue 
                    "
                    placeholder="e.g build todo app" 
                    value={inputValue} 
                    onChange={(e)=> {
                        e.preventDefault();
                        setInputValue(e.target.value);
                    }}
                />
            </div>
            <button 
                className="
                    text-Light-Very-Dark-Grayish-Blue cursor-pointer 
                    p-2 rounded-md mr-4 border-2 border-Light-Light-Grayish-Blue
                    hover:bg-Light-Light-Grayish-Blue
                    dark:text-Dark-Light-Grayish-Blue
                    dark:border-Dark-Very-Dark-Grayish-Blue
                    dark:hover:bg-Dark-Very-Dark-Grayish-Blue
                " 
                onClick={addTodoList}
            >
                Add
            </button>
        </div>
    )
}