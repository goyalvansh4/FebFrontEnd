import React from "react";
import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiPhoneCall,
  FiMail,
  FiNavigation2,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  
  const socialLinks = [
    {
      id: 1,
      icon: <FiFacebook />,
      url: "https://www.facebook.com/febtech.in",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://twitter.com/",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/company/febtech-it-solutions/posts/?feedView=all",
    },
    {
      id: 5,
      icon: <FiInstagram />,
      url: "https://www.instagram.com/febtech.in/",
    },
  ];
  return (
    <footer className="py-5 tracking-wide"
    style={{
      background: `url(footerBg.jpg) no-repeat center center/cover`,
    }}>
      <div className="py-14 px-6 sm:px-10">
        <div className="grid max-lg:place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 max-lg:flex flex-col justify-center items-center">
            <NavLink to="/">
              <img src="./logo.png" alt="logo" className="w-44 mb-2" />
            </NavLink>
            <p className="lg:w-3/4 max-lg:text-center text-gray-800 text-md">
              We are passionate about providing innovative IT solutions to
              businesses of all sizes. Our team of experienced professionals
              works tirelessly to create custom solutions tailored to meet the
              unique needs of our clients.
            </p>
            <ul className="flex max-lg:justify-center gap-4 mt-4">
              {socialLinks.map((link,index) => (
              <li key={index} className="h-[40px] w-[40px] flex justify-center items-center bg-[#5c28ca] text-[#fff] rounded-full hover:bg-[#1133ff]">
               <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="cursor-pointer rounded-lg shadow-sm  duration-300"
              >
                <i className="text-lg">{link.icon}</i>
              </a>
            </li>
            ))}

            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-black">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <NavLink to="/services"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/services"                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Our Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/services"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Product Details
                </NavLink>
              </li>
              <li>
                <NavLink to="/project"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Our Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactUs"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Team
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-16">
            <h4></h4>
            <ul className="space-y-4">
              <li>
                <NavLink to="/about"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  About Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactUs"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Our Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Blog Details
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers"
                  className="text-gray-800 hover:text-[#1136ff] text-lg"
                >
                  Faqs
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg max-lg:text-center font-semibold mb-8 text-[#000]">Supports</h4>
            <div className="space-y-4">
              <div className="text-black text-lg flex gap-2">
              <li className="h-[50px] w-[50px] flex justify-center items-center bg-[#5c28ca] text-[#fff] rounded-full hover:bg-[#1133ff]">
               <a
                target="__blank"
                className="cursor-pointer rounded-lg shadow-sm  duration-300"
              >
                <i className="text-xl">
                  <FiNavigation2 />
                </i>
              </a>
            </li>
                <div>
                  <p className="text-lg font-semibold text-[#000]">Loction</p>
                  <p className="text-base font-light text-[#000]">Roorkee,India</p>
                </div>
              </div>
              <div className="text-black text-lg flex gap-2">
              <li className="h-[50px] w-[50px] flex justify-center items-center bg-[#5c28ca] text-[#fff] rounded-full hover:bg-[#1133ff]">
               <a
                target="__blank"
                className="cursor-pointer rounded-lg shadow-sm  duration-300"
              >
                <i className="text-xl">
                  <FiMail />
                </i>
              </a>
            </li>
                <div>
                  <p className="text-lg font-semibold text-[#000]">Email Us</p>
                  <a href="mailto:support@febtech.in" className="text-base font-light text-[#000]" >support@febtech.in</a>
                </div>
              </div>
              <div className="flex gap-2">
              <li className="h-[50px] w-[50px] flex justify-center items-center bg-[#5c28ca] text-[#fff] rounded-full hover:bg-[#1133ff]">
               <a
                href=""
                target="__blank"
                className="cursor-pointer rounded-lg shadow-sm  duration-300"
              >
                <i className="text-xl">
                  <FiPhoneCall />
                </i>
              </a>
            </li>
                <div>
                  <p className="text-lg font-semibold text-[#000]">Hotline</p>
                  <p className="text-base font-light text-[#000]" >+91 8868864441</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-3 px-5 border-t-2 flex  justify-between">
        <p className="text-gray-800 max-lg:py-5 max-lg:text-center text-lg">
          © 2024 Feb Tech IT Solutions. All Rights Reserved.
        </p>
        <ul className="text-black max-lg:hidden text-lg flex gap-5">
          <li>About</li>
          <li>Setting & privacy</li>
          <li>Faqs</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
