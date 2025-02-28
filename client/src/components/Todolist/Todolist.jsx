import React,{ useContext, useEffect, useState} from "react"
import { Todo } from "../Todo/Todo";
import { useTodo } from "../../context/context";

export default function Todolist() {
    const todolist = useTodo();
    return (
        <div className="">            
            <div className="" style={{width:'450px',marginTop:'20px'}}>
                {todolist.map( todo =>
                    <li key={todo._id}  >
                        <Todo todo={todo}/>
                    </li>
                )}
            </div>        
        </div>
    )
}
