import React from "react";

const Business = () => {
  return (
    <div className="flex w-full mx-auto gap-5 h-[80vh] border-b-2 justify-between my-16 ">
      <div className="flex w-1/2 items-center border-r-2 px-2">
        <img
          id="heroImg1"
          className="w-[90%]"
          src="./business.png"
          alt="Awesome hero page image"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-10 px-10 justify-center">
        <a className="w-2/5 text-center rounded-xl font-semibold py-2 px-3  text-white bg-[#5C28CA] text-xl">
          Business Analytics
        </a>
        <p className="w-4/5 text-4xl font-semibold text-[#000]">
          Helping Clients Realize Higher ROI through SEO Service.
        </p>
        <p className="w-3/4">
          Drive more leads, sales, and revenue for your business with digital
          marketing services from WebFX full-service digital marketing agency
          that’s helped small-to-midsized businesses generate
        </p>
        <ul className="flex flex-col gap-5 text-lg font-semibold">
          <li><span className="mr-5 bg-[#1136ff] text-white rounded-full py-2 px-3">&#10003;</span>Professional SEO Optimizations</li>
          <li><span className="mr-5 bg-[#1136ff] text-white rounded-full py-2 px-3">&#10003;</span>Experience Team Members & Lot’s Of Customers</li>
          <li><span className="mr-5 bg-[#1136ff] text-white rounded-full py-2 px-3">&#10003;</span>DIgital Business & SEO Solutions</li>
        </ul>
        <div className="w-full">
          <a
            href="/"
            className="bg-transparent border-2 text-[#000] text-lg bg-[#1136ff] px-8 py-3
          hover:bg-slate-900 hover:shadow-2xl hover:shadow-[#1136ff] hover:text-white"
          >
            Learn More &gt;&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Business;
