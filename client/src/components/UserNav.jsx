import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const UserNav = () => {
  const dispatch = useDispatch();
    const handleSignOut = async () => {
        try {
          await fetch('/api/auth/signout');
          dispatch(signOut())
        } catch (error) {
          console.log(error);
        }
      };
    return (

        <div id="dropdownNavbar" className='absolute z-20 mt-5 bg-[--menu] divide-y divide-[--line-style2] rounded-lg shadow w-44'>
            <ul class="py-2 " aria-labelledby="dropdownLargeButton">
            <Link to='/profile'>
                  <li class="block px-4 py-2 hover:bg-[--hover-effect] font-normal">Account info</li>
            </Link>
            <Link to='/post'>
                  <li class="block px-4 py-2 hover:bg-[--hover-effect] font-normal">Write blog</li>
            </Link>
            <Link to='/'>
                  <li class="block px-4 py-2 hover:bg-[--hover-effect] font-normal">My Posts</li>
            </Link>
                </ul>
            <div class="py-1">
                  <span onClick={handleSignOut} class="block px-4 py-2 hover:bg-[--hover-effect] font-normal cursor-pointer">Sign out</span>
            </div>
        </div>
    );
};

export default UserNav;