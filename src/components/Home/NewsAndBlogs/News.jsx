import React from "react";
import { NavLink } from "react-router-dom";

const News = ({ data }) => {
  return (
    <div key={data.id} className="lg:w-[1/3] md:w-[400px] sm:w-full mx-auto hblog_card hover:bg-white  rounded-3xl hover:shadow-xl  overflow-hidden flex flex-col flex-wrap md:justify-center">
      <div className="hblogcard_img w-full">
        <img src={data.src} alt="" />
      </div>
      <div className="hblog_cont w-full  px-3 py-5   flex flex-col gap-2">
        <p className="hb_date  text-base text-[#1136ff] font-normal">
          {data.date}
        </p>
        <p className="hb_title w-[90%] text-xl xl:text-2xl font-semibold text-[#000] hover:text-[#1136ff]">
          {data.title}
        </p>
        <NavLink to="/blog" className="text-lg flex gap-4 items-center font-medium underline">
          Read More
          <svg
            width="31"
            height="9"
            viewBox="0 0 31 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z"
              fill="#120A21"
            ></path>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default News;
