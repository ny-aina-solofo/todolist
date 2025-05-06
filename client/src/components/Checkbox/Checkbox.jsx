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
        <div
            className='w-5 h-5 grid place-content-center bg-gradient-to-r 
                from-indigo-500 via-purple-500 to-pink-500  rounded-full
            '
        >
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => updateCheckbox(todo._id)}
                className={`
                    w-4 h-4 box-content appearance-none outline-none 
                    ${todo.done ? "border-none" : "border-2"}
                    ${todo.done ? 
                        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-no-repeat bg-center bg-[url('assets/icon-check.svg')]" 
                        : 
                        "bg-white dark:bg-Dark-Very-Dark-Desaturated-Blue"
                    }
                    hover:border-none border-Light-Light-Grayish-Blue
                    rounded-full cursor-pointer 
                    dark:border-Dark-Very-Dark-Grayish-Blue 
                `}
            />

      </div>
    )
}