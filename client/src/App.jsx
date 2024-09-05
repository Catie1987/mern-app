import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingSpinner from './constants/LoadingSpinner';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './constants/BackToTopButton';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import './style/style.css';



export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    
    <BrowserRouter>
      <ScrollToTop />

      <Header />
      <div>
        {loading ? ( <LoadingSpinner/>):(
        <Routes>
          
          <Route path='/' element={<Home />} />
          
          
          <Route path='/about' element={<About />} />
          
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/search' element={<Search />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:postId' element={<UpdatePost />} />
            
          </Route>

          <Route path='/blog' element={<Blog />} />
          <Route path='/gallery' element={<Gallery />} />
          
          <Route path='/post/:postSlug' element={<PostPage />} />
        </Routes> )}
      </div>
      <BackToTopButton/>
      <Footer />
    </BrowserRouter>
  );
}
