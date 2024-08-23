import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { SwiperNavButtons } from '../constants/SwiperNavButton';


import { FreeMode, Pagination, Navigation } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants/constants.index";

const CallToAction = () => {
  return (  
    <div className="flex flex-col gap-4 sm:flex-row p-3 border-2 border-[--cta] justify-center items-center rounded-tl-3xl rounded-br-3xl text-center relative">
      <div className="lg:basis-1/3 basis-1/4">
        <h2 className='flex text-4xl font-semibold lg:text-5xl text-[--cta] mb-6'>HOT <span className="px-2 font-bold bg-[--cta] text-white">TOPICS</span></h2>
        <p className="text-[--text-primary] text-base lg:text-lg font-normal text-left mb-4">Writing with inspration bring more to our experiences & adventures with the world</p>
        <p className="text-[--text-primary] text-base lg:text-lg font-normal text-left">Discover our list of 5 top writing topics to inspire your adventures. Get tips, strategies and unique insights from experienced travelers!</p>
        
      </div>  

      <Swiper
            breakpoints={{
              420: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              840: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1020: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={false}
            
            modules={[ Navigation]}
            className="max-w-[100%] lg:max-w-[80%] flex flex-col -gap-10">
            
            <SwiperNavButtons/>  
            {ServiceData.map((item) => (
              <SwiperSlide key={item.title} className="flex justify-center">
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[400px] w-[350px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <item.icon className="text-[--cta] group-hover:text-[--line-style] w-[32px] h-[32px]" />
                    <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                    <p className="lg:text-[18px]">{item.content} </p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-[--line-style] group-hover:rotate-45 duration-100" />
                </div>
              </SwiperSlide>
            ))}
          
      </Swiper>

    </div>
  );
};

export default CallToAction;