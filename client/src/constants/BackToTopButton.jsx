import React from 'react';
import { useEffect, useState } from 'react';
import { FaChevronUp } from "react-icons/fa6";

export default function BackToTopButton() {
const [backToTopButton, setBackToTopButton] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            setBackToTopButton(true)
        } else {
            setBackToTopButton(false)
        }
    })
}, []);

const scrollUp = () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}
  return (
    <div className='fixed bottom-28 right-6 z-50 h-10 w-10 border-transparent'>
        {backToTopButton && (
            <button onClick={scrollUp} className='h-full w-full flex items-center bg-slate-100 dark:bg-slate-900 
            justify-center shadow-lg border border-[--line-style2] rounded-lg text-[--deactive-text] hover:text-[--text-primary] active:text-[--cta]'>
                <FaChevronUp className='text-xl'/></button>
        )}
    </div>
  )
}
