import React from "react";
import Slider from "react-slick";
import Project from "../Projects/Project";

function SlickSlider() {
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Slider {...settings} className="w-[90vw] h-full my-5 flex py-4">
      <Project />
      <Project />
      <Project />
    </Slider>
  );
}

export default SlickSlider;
