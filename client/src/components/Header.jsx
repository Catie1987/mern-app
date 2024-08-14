import React from 'react';


export default function Header() {
  return (
    <div className='bg-slate-50'>
      <div className='h-12 flex items-center justify-between max-w-6xl mx-auto p-3'>
        <logo className='font-bold flex items-center'>BL
          <img className='w-7 h-7 self-start' src='src/assets/logo.png'/>
          G
        </logo>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Sign In</li>
        </ul>

      </div>
    </div>
  )
}
