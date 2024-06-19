import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {

     const data =[
      {
        name: 'Shakuntala Paul',
        profile: 'Web Developer',
        image: 'team-1.jpg'
      },
      {
        name: 'Shakuntala Paul',
        profile: 'Web Developer',
        image: 'team-1.jpg'
      },
      {
        name: 'Shakuntala Paul',
        profile: 'Web Developer',
        image: 'team-1.jpg'
      },
      {
        name: 'Shakuntala Paul',
        profile: 'Web Developer',
        image: 'team-1.jpg'
      },
      {
        name: 'Shakuntala Paul',
        profile: 'Web Developer',
        image: 'team-1.jpg'
      },
     ]

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper lg:h-96 w-[85%] mx-auto box-border"

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          }
        }}
      >
        
        
        {data.map((item) => {
          return <SwiperSlide>
            <div className=' text-center'>
              <div className=''>
                <div className='a-shadow-slider teamCard relative overflow-hidden object-cover'>
                  <img className=' transform scale-100 hover:scale-125 transition-all duration-700 ease-in ' src={item.image} alt="team-member" />
                  <div className='w-[80%] overlay left-0 bottom-4 p-2 right-0 mx-auto absolute opacity-0  flex justify-around bg-white items-center'>
                  <div className='rounded-full bg-yellow-400 hover:bg-[#1136FF] tname p-3 border t-shadow'>
                  <FaLinkedinIn className='iconStyle '/>
                  </div>
                  <div className='rounded-full bg-yellow-400 hover:bg-[#1136FF] tname p-3 border t-shadow'>
                  <FaTwitter className='iconStyle'/>
                  </div>
                  <div className='rounded-full bg-yellow-400 hover:bg-[#1136FF] tname p-3 border t-shadow'>
                  <FaInstagram className='iconStyle'/>
                  </div>

                 </div>
                </div>
                <p className='font-bold text-xl pt-4 tname'>{item.name}</p>
                <p>{item.profile}</p>
              </div>
            </div>
          </SwiperSlide>
              } )}
        
      </Swiper>
    </>
  );
}