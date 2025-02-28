import React, { useState } from "react"

export default function Checkbox({onChangeBox,todo}) { 
    return(
        <div>
            <input 
                type="checkbox"
                style={{marginRight:"20px"}} 
                className="" 
                checked={todo.done} 
                onChange={()=>onChangeBox(todo._id)}
            />
        </div>
    )
}