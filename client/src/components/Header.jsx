import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';
import { IoHeartSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { HiCog, HiLogout, HiOutlinePencilAlt, HiOutlineServer} from "react-icons/hi";
import ThemeToggle from '../components/ThemeToggle';


export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const customTheme = {
    "root": {
    "base": "bg-[--menu] border-b border-[--line-style2] px-2 py-2.5 sm:px-4 shadow-md",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
    "bordered": {
      "on": "border",
      "off": ""
    },
    "inner": {
      "base": "mx-auto flex flex-wrap items-center justify-between max-w-6xl",
      "fluid": {
        "on": "",
        "off": "container"
      }
    }
  },
  "brand": {
    "base": "flex items-center"
  },
  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col text-xl md:mt-0 md:flex-row md:space-x-8 md:text-base md:font-medium",
    "hidden": {
      "on": "hidden transition-all ease-out duration-300",
      "off": ""
    }
  },
  "link": {
    "base": "block py-2 pl-3 pr-4 md:p-0",
    "active": {
      "on": "border-b border-[--line-style2] text-[--cta] md:border-none",
      "off": "border-b border-[--line-style2] text-[--text-primary] hover:text-[--cta] md:border-0 md:hover:text-[--cta]"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    "icon": "h-5 w-6 shrink-0"
  },
  
}



  return (
    <Navbar theme={customTheme} fluid rounded className='z-100'>
    
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <div className='text-[--text-primary] font-semibold flex items-center text-3xl'>LA<IoHeartSharp className='w-4 h-4 self-end mb-2 text-[--cta]'/>BL
          <img className='w-7 h-7 self-start ml-1' src='/favicon/logo.png'/>
          G
        </div>

      </Link>
      
      <div className='flex gap-2 md:order-2'>

        
        <div className='visible flex items-center'>
          <ThemeToggle />
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'><span className='h-10 flex items-center'>Home</span></Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'><span className='h-10 flex items-center'>About</span></Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/blog'} as={'div'}>
          <Link to='/blog'><span className='h-10 flex items-center'>Blog</span></Link>
        </Navbar.Link>
        <div className='mt-3 md:mt-0'>
        {currentUser ? (
        <Dropdown
        arrowIcon={false}
        inline
        label={<div className='flex items-center gap-2 hover:text-[--cta] md:ml-0 ml-4'>
          <Avatar alt='user' img={currentUser.profilePicture} rounded />{currentUser.username}
          <FaChevronDown className='text-sm'/>
          </div>
        }
        
      >
          <Dropdown.Header className=''>
            <span className='block text-base text-[--text-primary] dark:text-white font-semibold'>Admin</span>
            <span className='block text-sm font-normal truncate text-[--text-primary]'>
              {currentUser.email}
            </span>
          </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item icon={HiCog}>Profile</Dropdown.Item>
            </Link>
            <Link to={'/create-post'}>
              <Dropdown.Item icon={HiOutlinePencilAlt}>Write Blog</Dropdown.Item>
            </Link>
            <Link to={'/'}>
              <Dropdown.Item icon={HiOutlineServer}>My Posts</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout} onClick={handleSignout}>Sign out</Dropdown.Item>
        </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <button className='h-10 p-4 px-8 flex items-center text-base rounded-full bg-[--cta] hover:opacity-90'>
            <span className='h-10 flex items-center text-base text-[#f3f3f3]'>
              Sign In / Sign Up
              </span>
            </button>
          </Link>
        )}
        </div>
      </Navbar.Collapse>
      
    </Navbar>
  );
}