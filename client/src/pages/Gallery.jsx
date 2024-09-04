import BackGround from '../components/BackGround';
import PaginationButtons from '../components/PaginationButtons';
import Album from '../components/Album';
import { Suspense, lazy } from 'react';
import { Select, Flowbite } from 'flowbite-react';
import { BsPlusLg, BsHeartFill } from "react-icons/bs";

const Upload = lazy(() => import('../constants/Upload'));

const selectTheme = {
  
    field :{
      input: {
        base : 'rounded-full',
      },
      colors: {
          info: 'bg-slate-600',
        },
      },
    
  
};

export default function Gallery() {
  
  return (
    <div className='relative isolate'>
      <BackGround />
      <div className='p-28 px-3 max-w-6xl mx-auto flex justify-center'>
      <h1 className='text-4xl font-bold lg:text-5xl text-[--text-primary]'>Picture <span className='font-bold text-[--cta]'>Gallery</span></h1>
      </div>
      <div className='pb-10 md:pb-2  px-3 max-w-6xl mx-auto flex flex-col gap-12'>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className='flex items-center flex-wrap gap-4 border-b pb-4 border-[--disable-text]'>
          <div className='flex items-center gap-2'>
            Albums:
          
          <div>
            <label className='font-medium'></label>
            <Flowbite theme={{ theme: selectTheme }}>
            <Select id='albums'>
              <option value='uncategorized'>All Images</option>
              <option value='album1'>album1</option>
              <option value='album2'>album2</option>
              <option value='album3'>album3</option>
              <option value='album4'>album4</option>
            </Select>
            </Flowbite>
          </div>
          <div className='group relative flex items-center justify-center text-[--text-primary] border border-[--disable-text] hover:bg-[--cta] hover:border-[--cta] transition-all duration-200 w-10 h-10 cursor-pointer rounded-lg'>
            <span className='group-hover:inline absolute w-36 font-normal text-base pointer-events-none
              before:absolute
              before:bg-[--text-primary] before:text-[--background]
              before:content-[attr(data-tip)]
              before:w-max
              before:max-w-xs
              before:px-3 before:py-1
              before:left-0 before:-top-16
              before: -translate-x-0.5
              before:rounded-md before:opacity-0
              before:transition-opacity before:duration-300

              after:absolute
              after:left-1/2 after:-top-8
              after:h-0 after:w-0
              after:border-[--text-primary] after:border-8
              after:border-l-transparent
              after:border-b-transparent
              after:border-r-transparent
              after:opacity-0
              after:transition-opacity after:duration-300

              group-hover:before:opacity-100 group-hover:after:opacity-100

              ' data-tip="Add new album">
              
            </span>
            <button className=' group-hover:text-white transition-all duration-200'>
              <BsPlusLg className='text-xl'/>
            </button>
          </div>
          </div>
          <div className='group flex items-center gap-2 ml-auto sm:ml-4 border border-[--disable-text] rounded-lg py-2 px-3 cursor-pointer hover:bg-[--cta] hover:text-white hover:border-[--cta]'>
            <BsHeartFill className='text-[--cta] group-hover:text-white'/>
            Favorites
          </div>
          <div className='ml-auto'>
            <Upload />
          </div>
          
        </div>
              
      </Suspense>
      <div className='min-h-screen'>
        <Album/>
      </div>
        
      </div>
      
    </div>
  )
}