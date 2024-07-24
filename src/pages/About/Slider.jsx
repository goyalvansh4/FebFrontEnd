import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const data = [
    {
      name: "Khurram Malik",
      profile: "Project Manager",
      image: "manager.png",
    },
    {
      name: "Annu Choudhary",
      profile: "SEO Expert",
      image: "avataar12.png",
    },
    {
      name: "Shoaib Malik",
      profile: "Wordpress Developer",
      image: "avaatar7.png",
    },
    {
      name: "Aryan Gupta",
      profile: "React Developer",
      image: "avaatar1.png",
    },
    {
      name: "Anshul Saini",
      profile: "Backend Developer",
      image: "avaatar2.png",
    },
    {
      name: "Vansh Gupta",
      profile: "React Developer",
      image: "avaatar5.png",
    },
    {
      name: "Kaushal Singlay",
      profile: "SEO Trainee",
      image: "avaatar8.png",
    },
    {
      name: "Uday Kumar",
      profile: "FullStack Developer",
      image: "avaatar4.png",
    },   
    {
      name: "Ayushi",
      profile: "Designer",
      image: "avaatar11.png",
    },
    {
      name: "Saba Malik",
      profile: "Graphic Designer",
      image: "saba.png",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
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
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <div className="pb-8 bg-slate-50 shadow-xl text-center">
                <div className="">
                  <div className="a-shadow-slider teamCard relative overflow-hidden object-cover w-full">
                    <img
                      className=" transform scale-100 hover:scale-125 transition-all duration-700 ease-in w-full h-[250px]"
                      src={item.image}
                      alt="team-member"
                    />
                    <div className="w-[80%] overlay left-0 bottom-4 p-2 right-0 mx-auto absolute opacity-0  flex justify-around bg-white items-center">
                      <div className="rounded-full bg-yellow-400 hover:bg-[#1136FF] tname p-3 border t-shadow">
                        <FaLinkedinIn className="iconStyle " />
                      </div>
                      <div className="rounded-full bg-yellow-400 hover:bg-[#1136FF] tname p-3 border t-shadow">
                        <FaTwitter className="iconStyle" />
                      </div>
                      <div className="rounded-full bg-yellow-400 hover:bg-[#1136FF] tname p-3 border t-shadow">
                        <FaInstagram className="iconStyle" />
                      </div>
                    </div>
                  </div>
                  <p className="font-bold text-xl pt-4 tmname">{item.name}</p>
                  <p>{item.profile}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
