import React from "react";
import { NavLink } from "react-router-dom";

const HeroSlider = ({ data }) => {

  return (
    <div
      className="hero  max-w-[99.3vw] h-[100%] py-5 flex flex-col lg:flex-row lg:justify-center lg:items-center mx-auto gap-5 lg:gap-2"
      style={{
        background: `url(headerBg.png) no-repeat center center/cover`,
      }}
    >
      <div className="content py-10 lg:w-2/5 w-[100%] flex lg:pl-10 gap-2 flex-col justify-center lg:gap-4">
        <p className="text-white max-sm:text-sm sm:text-lg 2xl:text-xl lg:w-[90%] bg-[#1136FF] py-2 px-2 rounded-lg  mt-3 text-center">
          {data.title}
        </p>
        <h1 className="text-[#00234B] text-lg sm:text-2xl 2xl:text-5xl  font-bold uppercase max-sm:text-center  leading-loose">
          {data.main}
        </h1>
        <p className="text-[#00234B] max-sm:w-[90%] max-sm:text-center max-sm:text-lg sm:text-lg xl:text-xl max-sm:mx-auto">
          {data.para}
        </p>
        <NavLink
            to="/services"
            className="w-[220px] text-black border-2 border-blue-200 text-lg bg-transparent px-8 max-sm:mx-auto  py-3
        myBtn"
          >
            Discover More &gt;&gt;
          </NavLink>
      </div>
      <div className="imageContainer lg:w-2/5 w-[100%] max-sm:py-5">
        <img className="w-1/4 h-full mt-2" src={data.src} alt="slider" />
      </div>
    </div>
  );
};

export default HeroSlider;
