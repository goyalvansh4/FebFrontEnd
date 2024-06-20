import React from "react";
import Slider from "react-slick";
import Project from "../Projects/Project";
import Testimonial from "../Testimonial/Testimonial";

function SlickSlider({project,test}) {
  const projects = {
    dots: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true
  };

  const tests = {
    dots: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>
  };
  
  return (
    <>
      {(project) && <Slider {...projects} className="w-[90vw] h-full flex">
      <Project />
      <Project />
      <Project />
      </Slider>
    }
      {(test) && <Slider {...tests} className="w-[40vw] bg-transparent h-full my-5 flex">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Slider>}
  </>
  );
}

export default SlickSlider;
