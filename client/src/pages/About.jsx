import BackGround from '../components/BackGround';
import myImg from '../assets/me1.jpg'

export default function About() {
  return (
    <div className='relative isolate'>
      <BackGround />
      <div className='p-28 px-3 max-w-6xl mx-auto grid md:grid-cols-2 md:gap-24 gap-12'>
        <div className='flex flex-col gap-6 h-full justify-center'>
          <h1 className='text-4xl font-bold lg:text-5xl text-[--text-primary]'>About <span className='font-bold text-[--cta]'>Me</span></h1>
          <p className='text-[--text-primary] text-base lg:text-lg font-normal'>
          My author name is Sweetie Cheese. This actually a nick name that my bf given it to me and I found out it is very happy when he called me as that. 
          </p>
          <p className='text-[--text-primary] text-base lg:text-lg font-normal'>
          At 21, I've start writing some blog and articles about education already. The key is to approach reading not just as a passive activity, but an active exploration and experience. With the right mindset and techniques, you can make reading a truly engaging and enthusiastic process.
          </p>
            
        </div>
        <div className='w-full h-full flex justify-center aspect-square items-center'>
          <div className='rounded-full bg-gradient-to-r from-[#cf4662] via-pink-500 to-[#cf4662] p-0 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80'>
            <img className='object-cover h-full rounded-full filter grayscale hover:grayscale-0 hover:p-3 cursor-pointer transition-all duration-300' src={ myImg } alt="" />
          </div>
        </div>
      </div>

      <div className='p-10 px-3 max-w-6xl mx-auto grid md:grid-cols-2 md:gap-0 gap-12'>
        <div className='flex bg-gradient-to-br from-[#cf4662] via-transparent to-transparent p-1 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800'>  
          <div className='bg-[--background] w-full h-full grid sm:max-md:grid-cols-2 md:grid-cols-2 md:max-lg:grid-cols-1 gap-8 p-8'>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='text-5xl font-normal lg:text-6xl text-[--cta]'>2021</h2>
              <p className='text-[--text-primary] text-base lg:text-lg font-normal'>Start our Journey</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='text-5xl font-normal lg:text-6xl text-[--cta]'>2</h2>
              <p className='text-[--text-primary] text-base lg:text-lg font-normal'>Countries traveled</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='text-5xl font-normal lg:text-6xl text-[--cta]'>200+</h2>
              <p className='text-[--text-primary] text-base lg:text-lg font-normal'>Posts & Article</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='text-5xl font-normal lg:text-6xl text-[--cta]'>20+</h2>
              <p className='text-[--text-primary] text-base lg:text-lg font-normal'>Cities in Vietnam</p>
            </div>
          </div>
        </div>
        <div className='flex bg-gradient-to-tl from-[#cf4662] via-transparent to-transparent p-1 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800'>
          <div className='flex items-center p-8 w-full h-full bg-[--background]'>
            <p className='text-[--text-primary] text-base lg:text-lg font-normal first-letter:text-7xl first-letter:font-bold first-letter:me-3 first-letter:float-start first-letter:text-[--cta] first-line:uppercase first-line:tracking-widest'>Wishlist: To visit every country in the world with my beloved — but, I am in <span className='font-bold'>NO RUSH</span> to accomplish this. Also trying food and enjoy staying as much homestays and resorts as I can to get more experience. Afterward, I would write travel guides and itineraries that are based on my experiences as well as the facts that I have researched.</p>
          </div>
        </div>
      </div>

    </div>
    
  );
}
