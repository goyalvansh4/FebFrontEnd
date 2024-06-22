import React from "react";

const NewsLetter = () => {
  return (
    <div className="hnews_ltBg relative top-8 w-[80%] mx-auto px-10 py-16  flex justify-center gap-5 rounded-lg ">
      <div className="hnewslt flex flex-col gap-2 w-1/2">
        <p className="w-[40%] text-center px-3 rounded-md font-semibold py-2  text-white bg-[#5C28CA] text-xl">
          Our NewsLetter
        </p>
        <p className="w-[95%] font-bold text-[#000] text-4xl leading-normal">
          Get Every Single Updates Newsletter Subscribe.
        </p>
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <div className="flex bg-white w-[90%] py-2">
          <form action="" className="w-full px-2">
            <input
              type="email"
              id="email"
              className="w-[75%] p-2 outline-none border-none"
              placeholder="Enter Email Address"
            />
            <button
              type="submit "
              className="w-[25%] text-white text-xl rounded-sm bg-[#000] hover:bg-slate-900 py-2 px-4 hover:shadow-2xl hover:shadow-[#1136ff]"
              for="email"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="relative px-5">
          <p className="hletter text-base font-light text-gray-600 pl-4">Get Every 7 Days Updates or Monthly updates</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
