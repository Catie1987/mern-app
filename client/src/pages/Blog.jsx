import { Link } from 'react-router-dom';
import BackGround from '../components/BackGround';
import PostList from '../components/PostList';
import { useEffect, useState } from 'react';
import PaginationButtons from '../components/PaginationButtons';

export default function Blog() {
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
      <div className='p-28 px-3 max-w-6xl mx-auto flex justify-center'>
      <h1 className='text-4xl font-bold lg:text-5xl text-[--text-primary]'><span className='font-bold text-[--cta]'>Explore</span> With <span className='font-bold text-[--cta]'>Me</span></h1>
      </div>
      <div className='pb-10 md:pb-2 px-3 max-w-6xl mx-auto flex flex-col gap-12 min-h-screen'>
        <div className='flex flex-col gap-16 w-full'>
              {posts.map((post) => (
                <PostList key={post._id} post={post} />
              ))}
        </div>
        <div className=''>
            <PaginationButtons />
        </div>
      </div>
    </div>
  )
}