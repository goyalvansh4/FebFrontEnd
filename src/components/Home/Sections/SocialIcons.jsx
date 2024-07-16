import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ScocialIcons = () => {
  const icons = [
    { id: 1, icon: <FaFacebook />, url: "https://www.facebook.com/febtech.in" },
    { id: 3, icon: <FaTwitter />, url: "https://twitter.com/" },
    { id: 4, icon: <FaLinkedin />, url: "https://www.linkedin.com/company/febtech-it-solutions/posts/?feedView=all" },
    { id: 5, icon: <FaInstagram />, url: "https://www.instagram.com/febtech.in/" },
  ];
  return (
    <ul className=" flex max-sm:hidden justify-center items-center gap-4 pl-4">
      {icons.map((item, index) => (
        <li key={index} className="text-2xl text-[#000] hover:text-[#1136FF]">
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>
        </li>
      ))}
    </ul>
  );
};

export default ScocialIcons;
