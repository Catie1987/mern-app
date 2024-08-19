import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeToggle from '../components/ThemeToggle';
import { useDispatch } from 'react-redux';
import { FaChevronDown } from "react-icons/fa";
import { signOut } from '../redux/user/userSlice';
import { Label, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoHeartSharp } from "react-icons/io5";

export default function Header() {
  const dispatch = useDispatch();
    const handleSignOut = async () => {
        try {
          await fetch('/api/auth/signout');
          dispatch(signOut())
        } catch (error) {
          console.log(error);
        }
      };
  const { currentUser } = useSelector((state) => state.user);

  
  return (
    <div className='relative bg-[--menu] border-b border-[--line-style2]'>
      <div className='text-[--text-primary] h-16 flex items-center justify-between max-w-6xl mx-auto p-3'>
        <Link to='/'>
        
        <div className='text-[--text-primary] font-semibold flex items-center text-3xl'>LA<IoHeartSharp className='w-4 h-4 self-end mb-2 text-[--cta]'/>BL
          <img className='w-7 h-7 self-start ml-1' src='/favicon/logo.png'/>
          G
        </div>
        </Link>

        <input type="checkbox" name="hamburger" id="hamburger" className="peer hidden" hidden />
          <label htmlFor="hamburger" className='z-40 peer-checked:hamburger md:hidden ml-auto mr-6 block relative h-8 w-8 cursor-pointer overflow-hidden'>
            <div aria-hidden="true" className="m-auto h-0.5 w-6 mt-1.5 rounded bg-[--text-primary] transition duration-300"></div>
            <div aria-hidden="true" className="m-auto h-0.5 w-6 mt-1.5 rounded bg-[--text-primary] transition duration-300"></div>
            <div aria-hidden="true" className="m-auto h-0.5 w-6 mt-1.5 rounded bg-[--text-primary] transition duration-300"></div>
          </label>

          <div className="overflow-hidden fixed inset-0 top-16 w-full h-0 bg-[--menu] shadow-xl transition-all duration-300 peer-checked:h-[calc(100%-4.5rem)] md:ml-auto md:flex md:top-0 md:static md:w-auto md:overflow-visible">
            
              <ul className='md:divide-y-0 md:mt-0 md:flex md:flex-row md:gap-4 md:items-center md:ml-auto md:mr-6 
              flex flex-col divide-y divide-[--line-style2]'>
              
                <Link to='/'>
                <li className='md:pr-0 md:border-t-0 border-t border-[--line-style2] hover:text-[--main-clr] h-16 flex items-center justify-end pr-10 text-xl md:text-base'>Home</li>
                </Link>
                <Link to='/blog'>
                <li className='md:pr-0 hover:text-[--cta] h-16 flex items-center justify-end pr-10 text-xl md:text-base'>Blog</li>
                </Link>
                <div className='cursor-pointer'>
                  {currentUser ? (
                    <Menu as="div">
                      <div className='relative'>
                        <MenuButton  className='h-16 flex w-full md:pr-0 pr-10 justify-end items-center gap-1 hover:text-[--main-clr] text-xl md:text-base'>
                          <img src={currentUser.profilePicture} alt='profile'
                          className='h-10 w-10 rounded-full object-cover' />
                          <p className='ml-1'>{currentUser.username}</p>
                          <FaChevronDown aria-hidden="true" />
                        </MenuButton>
                        <MenuItems transition
                        className="absolute overflow-hidden z-20 md:-ml-10 mt-2 md:w-44 origin-top-right divide-y divide-[--line-style2] rounded-md 
                        bg-[--menu] shadow-lg ring-1 ring-[--line-style2] ring-opacity-5 transition focus:outline-none 
                        data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 
                        data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in
                        right-0 w-full">
                          <div className="py-1 overflow-hidden">
                            <MenuItem>
                              <Link to='/profile'>
                                <li class="block px-4 py-2 hover:text-[--cta] font-normal md:text-base md:mr-0 md:text-left text-xl text-right mr-10">Account info</li>
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link to='/'>
                                <li class="block px-4 py-2 hover:text-[--cta] font-normal md:text-base md:mr-0 md:text-left text-xl text-right mr-10">Write blog</li>
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link to='/'>
                                <li class="block px-4 py-2 hover:text-[--cta] font-normal md:text-base md:mr-0 md:text-left text-xl text-right mr-10">My posts</li>
                              </Link>
                            </MenuItem>
                          </div> 
                          <div className="py-1 overflow-hidden">
                            <MenuItem>
                              <Link to='/'>
                                <li onClick={handleSignOut} class="block px-4 py-2 hover:text-[--cta] font-normal md:text-base md:mr-0 md:text-left text-xl text-right mr-10">Sign out</li>
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </div>

                    </Menu>
                  ) : (
                    <Link to='/profile'>
                    <div className='flex justify-end items-center h-16 border-b border-[--line-style2]'>
                    <li className='bg-[--cta] md:h-auto md:text-base md:mr-0 md:w-auto md:p-1 md:px-3 rounded-full hover:opacity-95 w-3/6 h-12 mr-6 flex justify-center items-center text-lg'>Log in/Register</li>
                    </div>
                    </Link>
                  )}
                </div>
                
                
              </ul>
             
          </div>              
            <div className='md:block visible'>
              <ThemeToggle />
            </div>
      </div>
    </div>
  )
}
