import React from "react";
import ServicesCard from "./ServicesCard";

const Service = () => {
  return (
    <>
      <div className="py-10 hservice_bg">
        <div className="flex flex-col  justify-center items-center gap-4">
          <p className="text-center text-xl rounded-lg font-semibold bg-[#1136FF] py-2 text-white px-5 w-1/8">
            Our Services
          </p>
          <p className="text-center text-4xl w-2/4 leading-relaxed font-semibold text-[#000]">
            We believe in delivering quality services that exceed our clients'
            expectations
          </p>
        </div>
        <div className="w-[85%]  mx-auto flex flex-col lg:flex-row gap-5 px-2  justify-center items-center">
          <ServicesCard />
        </div>
      </div>
    </>
  );
};

export default Service;
