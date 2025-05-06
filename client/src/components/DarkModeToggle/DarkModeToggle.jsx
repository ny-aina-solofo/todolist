import React, { useEffect, useState, useLayoutEffect } from 'react';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';

export const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    const root = document.documentElement; // <html>
    useLayoutEffect(() => {
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleDarkMode = () => {
        const newIsDarkMode = !isDarkMode;
        setIsDarkMode(newIsDarkMode);
        if (newIsDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.removeItem('theme');
        }
    };
    return (
        <div>
            <div className='cursor-pointer' type="button" onClick={handleDarkMode}>
                {
                    isDarkMode ? 
                    (
                        <img src={iconSun}/>
                    ) : (
                        <img src={iconMoon}/>
                    )
                }
            </div>
        </div>
    )
}
