import React, { useState,useEffect } from "react"
import { useTodo,useTodoDispatch } from "../../context/context";

export const Filter = () => {
    const dispatch = useTodoDispatch();
    const todolist = useTodo();
    const count = todolist.length;
    const handleClear = () =>{
        dispatch({ type: 'clear_completed_items'});
    }
    const filterAll = () =>{
        dispatch({ type: 'display_all_items'});
    }
    const filterActive = () =>{
        dispatch({ type: 'display_active_items'});
    }
    const filterCompleted = () =>{
        dispatch({ type: 'display_completed_items'});
    }
    return(
        <div>
            <div 
                className="
                    text-sm group flex shadow-xl justify-between items-center rounded-b-md
                    px-5 sm:px-6 py-4 sm:py-5 border-Light-Grayish-Blue 
                    text-Light-Dark-Grayish-Blue bg-white dark:bg-Dark-Very-Dark-Desaturated-Blue 
                    dark:border-Dark-Very-Dark-Grayish-Blue   
                    dark:text-Dark-Very-Dark-Grayish-Blue
                "
            >
                <span className='max-w-[100px] w-ful'>{count} item{count > 1 ? 's' : ''}</span>
                <div
                    className="
                        hidden sm:flex items-center justify-center font-bold
                        gap-2 
                    "
                >
                    <button
                        onClick={filterAll} 
                        type="button"
                        className="
                            hover:text-Bright-Blue dark:hover:text-Bright-Blue
                            transition-colors duration-300 cursor-pointer
                        "
                    >
                        All
                    </button>
                    <button
                        onClick={filterActive} 
                        type="button"
                        className="
                            hover:text-Bright-Blue dark:hover:text-Bright-Blue
                            transition-colors duration-300 cursor-pointer
                        "
                    >
                        Active
                    </button>
                    <button
                        onClick={filterCompleted} 
                        type="button"
                        className="
                            hover:text-Bright-Blue dark:hover:text-Bright-Blue
                            transition-colors duration-300 cursor-pointer
                        "
                    >
                        Completed
                    </button>
                </div>
                <button 
                    onClick={handleClear} 
                    type="button"
                    className="
                        hover:text-Bright-Blue dark:hover:text-Bright-Blue
                        transition-colors duration-300 cursor-pointer
                    "
                >
                    Clear Completed
                </button>
            </div>
            <div
                className="                    
                    sm:hidden shadow-2xl mt-4 gap-4  font-bold
                    text-sm flex justify-center items-center rounded-md 
                    px-5 sm:px-6 py-4 sm:py-5 
                    bg-white dark:bg-Dark-Very-Dark-Desaturated-Blue 
                    text-Light-Dark-Grayish-Blue dark:border-Dark-Very-Dark-Grayish-Blue   
                    dark:text-Dark-Very-Dark-Grayish-Blue 
                "
            >
                <button
                    onClick={filterAll} 
                    type="button"
                    className="
                        hover:text-Bright-Blue dark:hover:text-Bright-Blue
                        transition-colors duration-300 cursor-pointer
                    "
                >
                    All
                </button>
                <button
                    onClick={filterActive} 
                    type="button"
                    className="
                        hover:text-Bright-Blue dark:hover:text-Bright-Blue
                        transition-colors duration-300 cursor-pointer
                    "
                >
                    Active
                </button>
                <button
                    onClick={filterCompleted} 
                    type="button"
                    className="
                        hover:text-Bright-Blue dark:hover:text-Bright-Blue
                        transition-colors duration-300 cursor-pointer
                    "
                >
                    Completed
                </button>
            </div>
        </div>

    )
}