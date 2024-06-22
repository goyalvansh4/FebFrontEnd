import React from "react";

const Business = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mx-auto gap-4 lg:h-[80vh] border-b-2 justify-between my-16 ">
      <div className="flex w-full lg:w-1/2 items-center border-r-2 px-2">
        <img
          id="heroImg1"
          className="w-[90%]"
          src="./business.png"
          alt="Awesome hero page image"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-6 px-10 justify-center">
        <a className="lg:w-2/5 text-center rounded-xl font-semibold py-2 px-3  text-white bg-[#5C28CA] text-xl">
         Knowledge and Numbers
        </a>
        <p className="lg:w-4/5  max-lg:text-center text-3xl font-semibold text-[#000] leading-normal">
        There are several reasons to choose Feb tech for your business needs.
        </p>
        <p className="lg:w-3/4">
        We believe that by fostering a culture of collaboration and creativity within our team, we can continue to stay ahead of the curve in the rapidly-evolving IT industry.
        </p>
        <ul className="flex flex-col gap-4 max-lg:text-sm  lg:text-lg font-semibold">
          <li><span className="mr-1 lg:mr-5  bg-[#1136ff] text-white rounded-full py-2 px-3">&#10003;</span>Experience</li>
          <li><span className="mr-1 lg:mr-5 bg-[#1136ff] text-white rounded-full py-2 px-3">&#10003;</span>Timely Delivery </li>
          <li><span className="mr-1 lg:mr-5 bg-[#1136ff] text-white rounded-full py-2 px-3">&#10003;</span> Affordable Pricing</li>
          <li><span className="mr-1 lg:mr-5 bg-[#1136ff] text-white rounded-full py-2 px-3">&#10003;</span> Expert Team</li>
        </ul>
        <div className="w-full max-lg:flex justify-center">
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
