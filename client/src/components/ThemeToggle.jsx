import { useState, useEffect } from 'react';
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    
    const [theme, setTheme] = useState(null);
    useEffect(()=>{
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }, []);
  
    useEffect(()=>{
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button onClick={handleThemeSwitch}>
            <div className='bg-[--border] flex justify-between items-center rounded-2xl w-16 h-8 p-1 shadow-inner'>
            <BsSunFill className='ml-1 z-10 opacity-100 text-[--text-primary] dark:opacity-60 dark:text-[--deactive-text]' />
            <FaMoon className='mr-1 z-10 dark:opacity-100 dark:text-[--text-primary] opacity-60 text-[--deactive-text]'/>
            <div className='absolute w-6 h-6 rounded-full bg-gradient-to-b from-[--toggle-gradient1] to-[--toggle-gradient2] z-0
              dark:translate-x-8 transition ease-out duration-300 shadow-lg'></div>
            </div>
        </button>
    );
    
};

export default ThemeToggle;