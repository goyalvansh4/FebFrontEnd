import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Growing = () => {
  return (
    <div className="max-w-[99.9%] flex flex-col lg:flex-row w-full mx-auto gap-5 lg:h-screen border-b-2  justify-between mt-[8rem] ">
      <motion.div
        className="flex w-full lg:w-1/2 items-center border-r-2 px-2"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <img
          id="heroImg1"
          className="w-full lg:w-[90%]"
          src="growing1.png"
          alt="Awesome hero page image"
        />
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8 px-5 justify-center"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h3 className="w-[220px] text-center rounded-xl font-semibold py-2 px-3 text-white bg-[#1136ff] text-xl">
          Quality Service
        </h3>
        <p className="lg:w-4/5 max-lg:text-center max-sm:text-2xl sm:text-2xl xl:text-5xl font-semibold text-[#000] leading-normal">
          Feb Tech is incredibly for Your Business.
        </p>
        <p className="lg:w-3/4 max-lg:text-center">
          Whether you're a startup, small business, or a large corporation, we
          have the expertise and experience to help you achieve your business
          objectives and reach your full potential in the digital landscape.
        </p>
        <div className="w-full max-sm:py-4 py-3 max-lg:flex max-lg:justify-center">
          <NavLink
            to="/services"
            className="text-black border-2 border-blue-200 text-lg bg-transparent px-8 py-3 myBtn"
          >
            Learn More &gt;&gt;
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Growing;
