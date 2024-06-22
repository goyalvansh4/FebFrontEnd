import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ScocialIcons = () => {
  const icons = [
    <FaFacebook />,
    <FaTwitter />,
    <FaInstagram />,
    <FaLinkedin />,
  ];
  return (
    <ul className=" flex justify-center items-center gap-4 pl-4">
      {icons.map((icon, index) => (
        <li key={index} className="text-2xl text-[#000] hover:text-[#1136FF]">
          {icon}
        </li>
      ))}
    </ul>
  );
};

export default ScocialIcons;
