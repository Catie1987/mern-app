import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState, lazy, Suspense } from 'react';
import PostCard from '../components/PostCard';
import BackGround from '../components/BackGround';
import { BsArrowRight } from "react-icons/bs";



export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className='relative isolate'>
    <BackGround />
      <div className='p-28 px-3 max-w-6xl mx-auto grid md:grid-cols-2 md:gap-24 gap-12'>
        <div className='flex flex-col gap-6 h-full justify-center'>
          <h1 className='text-4xl font-bold lg:text-5xl text-[--text-primary]'>Welcome to our <span className='font-bold text-[--cta]'>Amazing</span> World</h1>
          <p className='text-[--text-primary] text-base lg:text-lg font-normal'>
          I use this space to document my adventures in travelling and sight-seeing, sharing how I’ve overcome issues I’ve run into, useful resources, and more.
          </p>
          <p className='text-[--text-primary] text-base lg:text-lg font-normal'>
          Below are some of my favourite articles, or you can go to the blog page to see my most recent posts.
          </p>
            <div className='mt-10 flex flex-wrap gap-6 justify-between'>
              <div>
                  <Link to='/search' className='flex items-center gap-2 text-xl border border-[--disable-text] px-10 py-2 rounded-lg font-normal hover:bg-[--main-clr] hover:border-[--main-clr] transition-colors duration-200 ease-out'>
                  View all posts <BsArrowRight className='text-2x'/>
                  </Link>
              </div>
              <div>
                <a className='flex items-center gap-2 px-10 py-2 rounded-lg text-xl text-white bg-gradient-to-r from-[#cf4662] via-pink-500 to-[#cf4662] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80' href="#topic">Featured topics</a>
              </div>
            </div>
        </div>
        <div className='w-full flex justify-center'>
          <img className='object-cover' src="//unsplash.it/510" alt="" />
        </div>
      </div>
      
      <div className='p-3' id='topic'>
        
        <CallToAction />
        
      </div>
      
      

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6 mt-10'>
            <h2 className='text-4xl font-bold lg:text-5xl text-[--text-primary] text-center'>Recent <span className='font-bold text-[--cta]'>Posts</span></h2>
            <div className='grid gap-4 lg:grid-cols-3 sm:max-lg:grid-cols-2'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-[--cta] hover:underline text-center'
            >
              View more...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
