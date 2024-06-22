import React from "react";

const Growing = () => {
  return (
    <div className="flex w-full mx-auto gap-5 h-[80vh] border-b-2 justify-between my-16 ">
      <div className="flex w-1/2 items-center border-r-2 px-2">
        <img
          id="heroImg1"
          className="w-[90%]"
          src="./growing1.png"
          alt="Awesome hero page image"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-5 px-5 justify-center">
        <a className="w-2/5 text-center rounded-xl font-semibold py-2 px-3  text-white bg-[#5C28CA] text-xl">
          Learn About Growing
        </a>
        <p className="w-4/5 text-5xl font-semibold text-[#000]">
          Get a Digital Marketing Plan that Drives Revenue.
        </p>
        <p className="w-3/4">
          Drive more leads, sales, and revenue for your business with digital
          marketing services from WebFX, a full-service digital marketing agency
          that’s helped small-to-midsized businesses generate more than $3
          billion in revenue from strategies like SEO, PPC, web design, and
          more.
        </p>
        <div className="w-full">
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
