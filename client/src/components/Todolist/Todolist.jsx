import React,{ useContext, useEffect, useState} from "react"
import { Todo } from "../Todo/Todo";
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
        <div className="">            
            <div className="" style={{width:'450px',marginTop:'20px'}}>
                {todolist.map( (todo,index) =>
                    <li 
                        key={todo._id} draggable  
                        onDragStart={()=>dragStart(index)}
                        onDragOver={dragOver}
                        onDrop={()=>drop(index)}
                        style={{ opacity: draggedTodo === index ? 0.5 : 1, cursor:'move' }}
                    >
                        <Todo todo={todo}/>
                    </li>
                )}
            </div>        
        </div>
    )
}
