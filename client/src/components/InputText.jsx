import React, { useState } from "react"

export default function InputText({onAddItem}) {
    const [inputValue,setInputValue] = useState('');
    const HandleAddItem = ()=>{
        if (!inputValue) return;
        onAddItem(inputValue); 
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
            <button className="" type="button" onClick={HandleAddItem}>
                Ajouter
            </button>
        </div>
    )
}