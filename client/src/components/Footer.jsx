import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsYoutube, BsTiktok } from "react-icons/bs";
import { IoHeartSharp } from "react-icons/io5";


export default function FooterCom() {
  return (
  <Footer container className ='border-t border-[--line-style2] rounded-none flex items-center bg-[--menu] dark:bg-[--menu]'>
    <div className='mx-auto w-full max-w-screen-xl p-3 py-6 lg:py-8'>
      <div className='text-[--text-primary] gap-20 max-w-6xl mx-auto p-1 md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <Link to='/'>
          <div className='text-[--text-primary] font-semibold flex items-center text-5xl'>LA<IoHeartSharp className='w-6 h-6 self-end mb-2 text-[--cta]'/>BL
            <img className='w-10 h-10 self-start ml-1' src='/favicon/logo.png'/>
            G
          </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              
              <div><h2 className="mb-6 md:mb-6 text-xl font-medium text-gray-900 uppercase dark:text-white h-4">Reading</h2>
                  
                  <ul className="text-gray-500 dark:text-gray-400 font-normal flex flex-col gap-2">
                    <li className='hover:text-[--cta]'><a href="#">Travel</a></li>
                    <li className='hover:text-[--cta]'><a href="#">Food</a></li>
                    <li className='hover:text-[--cta]'><a href="#">Place</a></li>
                    <li className='hover:text-[--cta]'><a href="#">Stay</a></li>
                    <li className='hover:text-[--cta]'><a href="#">Beauty</a></li>
                  </ul>
              </div>
              <div><h2 className='mb-6 h-4'></h2>
                  
                  <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                    <li className='hover:text-[--cta]'><a href="#">With love</a></li>
                    <li className='hover:text-[--cta]'><a href="#">Restaurant</a></li>
                    <li className='hover:text-[--cta]'><a href="#">Study</a></li>
                    <li className='hover:text-[--cta]'><a href="#">Movie</a></li>
                    <li className='hover:text-[--cta]'><a href="#">Personal</a></li>
                  </ul>
              </div>
              <div className='w-full'><h2 className="mb-6 text-xl font-medium text-gray-900 uppercase dark:text-white h-4">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                    <li className='hover:underline hover:text-[--text-primary]'><a href="#">Privacy Policy</a></li>
                    <li className='hover:underline hover:text-[--text-primary]'><a href="#">Licensing</a></li>
                    <li className='hover:underline hover:text-[--text-primary]'><a href="#">Terms &amp; Conditions</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm font-normal text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">LaBlog™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center justify-center sm:mt-0 gap-6">
            <a href="#" className="text-gray-500 hover:text-[--cta] ">
                <BsFacebook className='w-6 h-6' />
            </a>
            <a href="#" className="text-gray-500 hover:text-[--cta] ">
                <BsInstagram className='w-6 h-6' />
            </a>
            <a href="#" className="text-gray-500 hover:text-[--cta] ">
                <BsYoutube className='w-6 h-6' />
            </a>
            <a href="#" className="text-gray-500 hover:text-[--cta] ">
                <BsTiktok className='w-6 h-6' />
            </a>
          </div>
      </div>
    </div>
  </Footer>
  );
}
