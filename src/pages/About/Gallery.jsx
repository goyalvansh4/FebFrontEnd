import React from "react";

const Gallery = () => {
  return (
    <div class="bg-gray-100">
      <div class="p-4 mx-auto text-center  sm:max-w-full">
        <span class="text-xl  capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded ">
          Our Gallery
        </span>
        <div className="gallery_container justify-center md:justify-evenly flex flex-col md:flex-row mt-4 flex-wrap w-full  gap-y-7 py-4">
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery1.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery10.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery3.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery8.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery5.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery11.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery7.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery4.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-[95%] md:w-[38%] xl:w-[30%] h-[100%]">
            <img src="./gallery9.jpg" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
