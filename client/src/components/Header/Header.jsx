import React, { useEffect, useState, useLayoutEffect } from 'react';
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";

export const Header = () => {
    return (
        <header className="mt-12 sm:mt-[72px] mb-9 flex justify-between items-center w-full">
            <h1 
                className="
                    text-white text-2xl sm:text-[40px] 
                    tracking-[10px] sm:tracking-[16px] font-bold
                "    
            >
                TODO
            </h1>
            <DarkModeToggle/>                
        </header>
               
    )
}
