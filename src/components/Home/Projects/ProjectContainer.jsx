import React from "react";
import Project from "./Project";
import SlickSlider from "../Sliders/SlickSlider";

const ProjectContainer = () => {
  return (
    <div className="w-[90vw] mx-auto py-3  my-8 flex flex-col items-center gap-5">
      <p className="w-1/5 text-center  rounded-xl font-semibold py-2 px-3  text-white bg-[#5C28CA] text-xl">
        Recent Project
      </p>
      <p className="w-2/4 text-center font-semibold py-2 px-3  text-[#000] text-4xl ">
        We’ve Done <span className="text-[#1136ff]">2560+</span> Global Projects
        Take a Looks Work Gallery
      </p>
      <div className=" h-[400px] ">
        <SlickSlider project={true} />
      </div>
    </div>
  );
};

export default ProjectContainer;
