import React from "react";

const HeroSlider = ({ data }) => {
  return (
    <div className="hero  w-full h-[100%] py-5 lg:flex lg:justify-center lg:items-center lg:gap-2"
    style={{
      background: `url(headerBg.png) no-repeat center center/cover`,
    }}>
      <div className="content lg:w-2/5 w-[100%] lg:flex pl-10 lg:flex-col gap-8">
        <p className="text-white text-xl w-[80%] bg-[#1136FF] py-2 rounded-lg px-0 mt-3 text-center">
          {data.title}
        </p>
        <h1 className="text-[#00234B] text-7xl font-bold uppercase text-left">
          {data.main}
        </h1>
        <h4 className="text-[#00234B] text-5xl text-left">
          {data.subMain ? data.subMain : ""}
        </h4>
        <p className="text-[#00234B] text-xl text-left">{data.para}</p>
        <button className="lg:w-[40%] py-4 px-2 bg-[#1136FF] rounded-xl text-white text-base font-medium">
          Discover More &gt;&gt;
        </button>
      </div>
      <div className="imageContainer lg:w-2/5 w-[100%]">
        <img className="w-1/4 h-full" src="slider1.png" alt="slider" />
      </div>
    </div>
  );
};

export default HeroSlider;
