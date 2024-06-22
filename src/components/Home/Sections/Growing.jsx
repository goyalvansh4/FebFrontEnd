import React from "react";

const Growing = () => {
  return (
    <div className="flex flex-col lg:flex-row  w-full mx-auto gap-5 lg:h-[80vh] border-b-2 justify-between my-16 ">
      <div className="flex w-full lg:w-1/2 items-center border-r-2 px-2">
        <img
          id="heroImg1"
          className="w-full lg:w-[90%]"
          src="growing1.png"
          alt="Awesome hero page image"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-5 px-5 justify-center">
        <a className="lg:w-2/5 text-center rounded-xl font-semibold py-2 px-3  text-white bg-[#1136ff] text-xl">
          Quality Service
        </a>
        <p className="lg:w-4/5 max-lg:text-center text-5xl font-semibold text-[#000] leading-normal">
          Feb Tech is incredibly For Your Business.
        </p>
        <p className="lg:w-3/4 max-lg:text-center">
          Whether you're a startup, small business, or a large corporation, we
          have the expertise and experience to help you achieve your business
          objectives and reach your full potential in the digital landscape.
        </p>
        <div className="w-full max-lg:flex max-lg:justify-center">
          <a
            href=""
            className="text-white text-lg bg-[#1136ff] px-8 py-3
          hover:bg-slate-900 hover:shadow-2xl hover:shadow-[#1136ff]"
          >
            Learn More &gt;&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Growing;
