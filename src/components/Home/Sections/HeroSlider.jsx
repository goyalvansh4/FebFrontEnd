import React from "react";

const HeroSlider = ({ data }) => {
  return (
    <div
      className="hero  max-w-[99.3vw] h-[100%] py-5 flex flex-col lg:flex-row lg:justify-center lg:items-center mx-auto gap-5 lg:gap-2"
      style={{
        background: `url(headerBg.png) no-repeat center center/cover`,
      }}
    >
      <div className="content  lg:w-2/5 w-[100%] px-3 flex lg:pl-10 gap-2 flex-col justify-center items-center lg:gap-4">
        <p className="text-white max-sm:text-sm sm:text-lg lg:text-xl lg:w-[90%] bg-[#1136FF] py-2 rounded-lg px-3 mt-3 text-center">
          {data.title}
        </p>
        <h1 className="text-[#00234B] max-sm:text-2xl text-7xl  font-bold uppercase text-left">
          {data.main}
        </h1>
        <h4 className="text-[#00234B]  max-sm:text-xl text-5xl  lg:text-left">
          {data.subMain ? data.subMain : ""}
        </h4>
        <p className="text-[#00234B] max-sm:w-[60%] text-center max-sm:text-lg text-xl sm:text-left">
          {data.para}
        </p>
        <button className="lg:w-[40%] bg-[#1136ff] py-4 px-4 myBtn text-white max-sm:text-sm text-lg font-medium rounded-xl">
          <span className="flex items-center justify-center">Discover More &gt;&gt;</span>
        </button>
      </div>
      <div className="imageContainer lg:w-2/5 w-[100%] max-sm:py-5">
        <img className="w-1/4 h-full" src="slider1.png" alt="slider" />
      </div>
    </div>
  );
};

export default HeroSlider;
