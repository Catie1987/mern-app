import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeToggle from '../components/ThemeToggle';
import { useDispatch } from 'react-redux';
import { FaChevronDown } from "react-icons/fa";
import { signOut } from '../redux/user/userSlice';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

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
    <div className='bg-[--menu]'>
      <div className='text-[--text-primary] h-16 flex items-center justify-between max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <div className='text-[--text-primary] font-semibold flex items-center text-3xl'>BL
          <img className='w-7 h-7 self-start ml-1' src='src/assets/logo.png'/>
          G
        </div>
        </Link>
        <ul className='flex gap-4 items-center'>
          <Link to='/'>
          <li className='hover:text-[--main-clr]'>Home</li>
          </Link>
          <Link to='/blog'>
           <li className='hover:text-[--cta]'>Blog</li>
          </Link>
          <div className='cursor-pointer'>
            {currentUser ? (
              <Menu as="div">
                <div className='relative'>
                  <MenuButton  className='flex items-center gap-1 hover:text-[--main-clr]'>
                    <img src={currentUser.profilePicture} alt='profile'
                    className='h-10 w-10 rounded-full object-cover' />
                    <p className='ml-1'>Catie</p>
                    <FaChevronDown aria-hidden="true" />
                  </MenuButton>
                  <MenuItems transition
                  className="absolute overflow-hidden z-20 -ml-10 mt-2 w-44 origin-top-right divide-y divide-[--line-style2] rounded-md 
                  bg-[--menu] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none 
                  data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 
                  data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                    <div className="py-1 overflow-hidden">
                      <MenuItem>
                        <Link to='/profile'>
                          <li class="block px-4 py-2 hover:text-[--cta] font-normal">Account info</li>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to='/'>
                          <li class="block px-4 py-2 hover:text-[--cta] font-normal">Write blog</li>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to='/'>
                          <li class="block px-4 py-2 hover:text-[--cta] font-normal">My posts</li>
                        </Link>
                      </MenuItem>
                    </div> 
                    <div className="py-1 overflow-hidden">
                      <MenuItem>
                        <Link to='/'>
                          <li onClick={handleSignOut} class="block px-4 py-2 hover:text-[--cta] font-normal">Sign out</li>
                        </Link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </div>

              </Menu>
            ) : (
              <Link to='/profile'>
              <li className='bg-[--cta] p-1 px-3 rounded-md hover:opacity-95'>Log in</li>
              </Link>
            )}
          </div>

          <ThemeToggle />
         
          
        </ul>

      </div>
    </div>
  )
}
