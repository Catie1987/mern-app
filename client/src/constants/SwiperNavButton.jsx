import React from 'react';
import { useSwiper } from 'swiper/react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="z-50 h-10 flex justify-center -mt-16 gap-20">
      <button className='p-2 h-10 w-10 border-2 border-[--disable-text] hover:border-[--text-primary] active:border-[--cta] rounded-full flex items-center justify-center text-[--disable-text] hover:text-[--text-primary] active:text-[--cta] text-xl' onClick={() => swiper.slidePrev()}><FaAngleLeft className=''/></button>
      <button className='p-2 h-10 w-10 border-2 border-[--disable-text] hover:border-[--text-primary] active:border-[--cta] rounded-full flex items-center justify-center text-[--disable-text] hover:text-[--text-primary] active:text-[--cta] text-xl' onClick={() => swiper.slideNext()}><FaAngleRight/></button>
    </div>
  );
};