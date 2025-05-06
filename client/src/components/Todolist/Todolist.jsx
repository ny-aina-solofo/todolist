import React,{ useContext, useEffect, useState} from "react"
import { TodoItem } from "../TodoItem/TodoItem";
import { useTodo ,useTodoDispatch } from "../../context/context";
import todolistService from "../../services/todolist/todolist.service";

export default function Todolist() {
    const todolist = useTodo();
    const dispatch = useTodoDispatch();
    const [draggedTodo, setdraggedTodo] = useState(null);

    const dragStart = (index)=>{
        setdraggedTodo(index);
    }
    const dragOver = (e)=>{
        e.preventDefault(); 
    }
    const drop = (index)=>{
        const reorderedList = [...todolist];
        const [draggedItem] = reorderedList.splice(draggedTodo,1); 
        reorderedList.splice(index,0,draggedItem);
        const updatedList = reorderedList.map((todo,order)=>({...todo, rang : order.toString()}));
        dispatch({ type : 'drag_and_drop', updatedList : updatedList});
        setdraggedTodo(null);
        todolistService.updateTodoListOrder(updatedList).then((response)=>{});
    }

    return (
        <div className="bg-white rounded-t-md dark:bg-Dark-Very-Dark-Desaturated-Blue shadow-2xl">            
            {todolist.length > 0 ? (
                <div>
                    {todolist.map( (todo,index) =>
                        <li 
                            key={todo._id} draggable  
                            onDragStart={()=>dragStart(index)}
                            onDragOver={dragOver}
                            onDrop={()=>drop(index)}
                            className={`
                                list-none cursor-move transition-all duration-200 ease-in-out 
                                hover:bg-Light-Very-Light-Grayish-Blue dark:hover:bg-Light-Dark-Grayish-Blue
                                ${draggedTodo === index ? 'opacity-50 scale-95 ring-2 ring-blue-400' : ''}
                            `}
                        >
                            <TodoItem todo={todo}/>
                        </li>
                    )}
                </div>
            ) : (
                <p className="text-center text-sm text-Light-Dark-Grayish-Blue 
                dark:text-Dark-Very-Dark-Grayish-Blue">
                    liste vide
                </p>
            )}
        </div>
    )
}
