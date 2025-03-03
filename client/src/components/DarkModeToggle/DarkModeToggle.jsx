import React, { useEffect, useState } from 'react';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';

export const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleDarkMode = () => {
        const newIsDarkMode = !isDarkMode;
        setIsDarkMode(newIsDarkMode);
        if (newIsDarkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.removeItem('theme');
        }
    };
    return (
        <div style={{marginLeft :'30px'}}>
            <button type="button" onClick={handleDarkMode}>
                {
                    isDarkMode ? 
                    (
                        <img src={iconSun}/>
                    ) : (
                        <img src={iconMoon}/>
                    )}
            </button>
        </div>
    )
}
