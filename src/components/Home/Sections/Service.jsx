import React from "react";
import ServicesCard from "./ServicesCard";

const Service = () => {
  return (
    <>
      <div className="pt-10 pb-2 hservice_bg">
        <div className="flex flex-col  justify-center items-center gap-4">
          <p className="text-center text-2xl rounded-lg font-semibold bg-[#1136FF] py-2 text-white px-5 w-1/8">
            Our Services
          </p>
          <p className="text-center max-sm:text-xl text-4xl w-2/4 leading-relaxed font-semibold text-[#000]">
            We believe in delivering quality services that exceed our clients'
            expectations
          </p>
        </div>
        <div className="lg:w-[85%]  mx-auto  flex lg:flex-row gap-5 px-2  justify-center items-center">
          <ServicesCard />
        </div>
      </div>
    </>
  );
};

export default Service;
