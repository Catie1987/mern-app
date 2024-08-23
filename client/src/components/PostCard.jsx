import { Link } from 'react-router-dom';
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full bg-white dark:bg-[#242932] p-2 shadow-lg h-[430px] overflow-hidden rounded-xl transition-all hover:shadow-[#ffdde1] dark:hover:shadow-[#6c383e]'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20 border-transparent rounded-xl'
        />
      </Link>
      <Link
            to={`/search?category=${post && post.category}`}
            className='self-center -mt-10 ml-2 absolute'>
            <button className='border-2 border-transparent text-sm px-3 py-1 rounded-full bg-[--cta] transition-all duration-300 text-gray-200 hover:text-white hover:border-white'>
              {post && post.category}
            </button>
      </Link>
      <div className='p-3 flex flex-col gap-2'>
          
        <Link to={`/post/${post.slug}`} className='text-lg font-semibold line-clamp-1 hover:underline'>{post.title}</Link>
        <div className='flex w-full justify-between border-b pb-2 border-[--line-style]'>
          <span className='flex gap-2 items-center text-sm text-[--text-primary] font-normal'><IoCalendarOutline/>{new Date(post.updatedAt).toLocaleDateString()}</span>
          <span className='flex gap-2 text-sm items-center font-normal italic text-[--text-secondary]'><IoTimeOutline/>{post && (post.content.length / 1000).toFixed(0)} mins read</span>
        </div>
        <div className='line-clamp-3 font-light text-sm text-[--text-secondary] text-pretty ' dangerouslySetInnerHTML={{ __html: post && post.content }}></div>
        <Link
          to={`/post/${post.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-[--cta] text-[--cta] hover:bg-[--cta] hover:text-white transition-all duration-300 text-center py-2 rounded-lg !rounded-tl-none !rounded-tr-none m-2'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
