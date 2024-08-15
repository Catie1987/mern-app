import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-slate-50'>
      <div className='h-12 flex items-center justify-between max-w-6xl mx-auto p-3'>
        <logo className='font-bold flex items-center'>BL
          <img className='w-7 h-7 self-start' src='src/assets/logo.png'/>
          G
        </logo>
        <ul className='flex gap-4 items-center'>
          <Link to='/'>
          <li>Home</li>
          </Link>
          <Link to='/about'>
           <li>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile'
              className='h-8 w-8 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          
          </Link>
         
          
        </ul>

      </div>
    </div>
  )
}
