import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../constants/LoadingSpinner';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    if (post) {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?category=${post.category}&limit=3`);
        const data = await res.json();
        if (res.ok) {
          const filteredPost = data.posts.filter(p => p._id !== post._id);
          setRecentPosts(filteredPost);
          
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }}
  }, [post]);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <LoadingSpinner />
      </div>
    );
  return (
    <main className='p-12 px-3 max-w-6xl mx-auto flex flex-col min-h-screen'>
      <h1 className='text-4xl font-bold lg:text-5xl text-[--text-primary] text-center my-5'>
        {post && post.title}
      </h1>
      
      <Link
        to={`/search?category=${post && post.category}`}
        className='self-center mt-5'
      >
        <button className='border border-[--line-style2] text-sm px-3 py-1 rounded-full bg-slate-300 dark:bg-slate-600 text-[--text-primary]'>
          {post && post.category}
        </button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className='mt-10 p-3 max-h-[600px] w-full object-cover'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full text-xs'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 mx-auto w-full post-content text-pretty text-[--text-primary] text-base lg:text-lg font-normal'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      
      <CommentSection postId={post._id} />

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-3xl mt-5 font-semibold mb-5'><span className='text-[--cta] font-semibold'>Related</span> Posts</h1>
        <div className='grid gap-4 lg:grid-cols-3 sm:max-lg:grid-cols-2'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
