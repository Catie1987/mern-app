import { Link } from 'react-router-dom';
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

export default function PostList({ post }) {
    return(
        <div className='md:flex even:flex-row-reverse items-center gap-6 justify-between'>
            <Link to={`/post/${post.slug}`} className='relative basis-1/2 lg:basis-2/5'>
                
                <img
                src={post.image}
                alt='post cover'
                className='w-full max-h-[400px] object-cover z-20 border-transparent'
                />
            </Link>
            <div className='relative flex flex-col basis-1/2 md:mt-0 mt-2  max-h-[300px]'>
                <Link
                    to={`/search?category=${post && post.category}`}
                    className='mb-5'>
                    <button className='border-transparent text-sm px-3 py-1 rounded-full bg-slate-300 dark:bg-slate-600 text-[--text-primary]'>
                    {post && post.category}
                    </button>
                </Link>
                <Link to={`/post/${post.slug}`} ><p className='text-xl md:text-2xl font-bold line-clamp-2 mb-2 dark:text-white text-gray-900 hover:underline'>{post.title}</p></Link>
                <div className='flex w-full justify-between border-b pb-2 border-gray-300 dark:border-gray-600'>
                <span className='flex gap-2 items-center text-sm text-[--text-primary] font-normal'><IoCalendarOutline/>{new Date(post.updatedAt).toLocaleDateString()}</span>
                <span className='flex gap-2 text-sm items-center font-normal italic text-[--text-secondary]'><IoTimeOutline/>{post && (post.content.length / 1000).toFixed(0)} mins read</span>
                </div>
                <div className='line-clamp-3 font-light text-[--text-primary] ' dangerouslySetInnerHTML={{ __html: post && post.content }}></div>
                <Link
                    to={`/post/${post.slug}`}
                    className='border border-[--cta] w-36 flex justify-center py-2 mt-4 text-[--cta] hover:bg-[--cta] hover:text-white transition-colors duration-300'
                    >
                    Read article
                </Link>
            </div>
        </div>
    )
}