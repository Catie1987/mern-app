import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import './style/style.css';


export default function App() {


  return <BrowserRouter>
  {/* header */}
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<PrivateRoute />} >
        <Route path="/profile" element={<Profile />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
}
  