import React from "react";
import ScocialIcons from "./Home/Sections/SocialIcons";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const handleOpen = () => {
    document.getElementById("collapseMenu").style.display = "block";
    document.getElementById("toggleClose").style.display = "none";
  };
  const handleClose = () => {
    document.getElementById("collapseMenu").style.display = "none";
    document.getElementById("toggleClose").style.display = "block";
  };
  return (
    <header className="border-b border-gray-700 max-w-[98.8vw]  lg:w-[98.8vw] mx-auto tracking-wide  lg:absolute z-50">
      <nav className="navbar flex  gap-x-2 min-h-[30px] max-sm:px-4">
        <a href="javascript:void(0)" className=" border-r border-gray-700">
          <img src="./logo.png" alt="logo" className="pl-4 w-2/4" />
        </a>
        <div
          id="collapseMenu"
          className="max-lg:hidden flex justify-around w-[80%] lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 max-sm:px-4"
        >
          <button
            onClick={handleClose}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <div className="h-full flex items-center border-r border-gray-700">
            <ul className="lg:flex items-center w-full justify-between lg:gap-2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[200px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img src="./logo.png" alt="logo" className="w-2/4" />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 ">
                <button
                onClick={handleClose}>
                <NavLink
                  to="/"
                  className="text-[#000] rounded-md py-1 px-4 block font-bold text-lg"
                >
                  Home
                </NavLink>
                </button>

              </li>
              <li class="group text-[14px] max-lg:border-b max-lg: max-lg:py-2 relative">
                <button 
                onClick={handleClose}>
                <NavLink
                  to="/services"
                  className="text-[#000] rounded-md  py-1 px-4 block font-bold text-lg"
                >
                  <span className="items-center flex">
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    class="ml-1 inline-block"
                    viewBox="0 0 24 24"
                    className="max-xl:hidden"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                    
                  </svg>
                  </span>
                </NavLink>
                </button>
                <div class="lg:absolute lg:top-[60px] max-xl:hidden max-lg:top-8 -left-6 z-50 flex justify-around lg:w-[65vw] shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div class="">
                    <h6 class="text-base text-[#007bff] font-bold">Web Development</h6>
                    <ul class="mt-3 pt-3 border-t border-1 space-y-3">
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Domain Registration
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Website Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Website Development
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Software Development
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          E-commerce Website
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Payment Gateway
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Web Hosting
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Professional Emails
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Mobile Application
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 class="text-base text-[#007bff] font-bold">Digital Marketing</h6>
                    <ul class="mt-3 pt-3 border-t border-1 space-y-3">
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          SEO Services
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          SMM Services
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Content Writing
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Graphic Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Company Profile
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Email Marketing
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Logo Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Google Map Reviews
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Brand Building
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 class="text-base text-[#007bff] font-bold">Graphic  Design</h6>
                    <ul class="mt-3 pt-3 border-t border-1 space-y-3">
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Business Card Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Post Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Pamphlet Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Brochure Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                         Social Media Ads Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Flyer Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Letter Head Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Product Catalogue Design
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          More
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 class="text-base text-[#007bff] font-bold">Social Media Marketing</h6>
                    <ul class="mt-3 pt-3 border-t border-1 space-y-3">
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          FaceBook Marketing
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Facebook Ads
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          WhatsApp Ads
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Instrgram Ads
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                         Google Ads
                        </a>
                      </li>
                    </ul>
                    <h6 class="text-base mt-10 text-[#007bff] font-bold">Legal Services</h6>
                    <ul class="mt-3 pt-3 border-t border-1 space-y-3">

                    <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Domestic Trademark
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          International Trademark
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="max-lg:border-b max-lg:py-3 ">
                <button
                onClick={handleClose}>
                <NavLink
                  to="/about"
                  className="hover:text-[#fff] hover:bg-[#1136FF] hover:rounded-md px-4 py-1 text-[#000] block font-bold text-lg"
                >
                  About Us
                </NavLink>
                </button>
              </li>
              <li className="max-lg:border-b max-lg:py-3 ">
                <button
                onClick={handleClose}>
                <NavLink
                  to={"/client"}
                  className="hover:text-[#fff] hover:bg-[#1136FF] hover:rounded-md px-4 py-1 text-[#000] block font-bold text-lg"
                >
                  Our Clients
                </NavLink>
                </button>
              </li>
              <li className="max-lg:border-b max-lg:py-3 ">
                <button
                onClick={handleClose}>
                <NavLink
                   to={"/blog"}
                  className="hover:text-[#fff] hover:bg-[#1136FF] hover:rounded-md px-4 py-1 text-[#000] block font-bold text-lg"
                >
                  Blog
                </NavLink>
                </button>
              </li>
              <li className="max-lg:border-b max-lg:py-3 ">
                <button
                onClick={handleClose}>
                <NavLink
                  to= "/careers"
                  className="hover:text-[#fff] hover:bg-[#1136FF] hover:rounded-md px-4 py-1 text-[#000] block font-bold text-lg"
                >
                  Careers
                </NavLink>
                </button>
              </li>
              <li className="max-lg:border-b max-lg:py-3 ">
                <button
                onClick={handleClose}>
                <NavLink
                  to="/contactUs"
                  className="hover:text-[#fff] hover:bg-[#1136FF] hover:rounded-md px-4 py-1 text-[#000] block font-bold text-lg"
                >
                  Contact Us
                </NavLink>
                </button>
              </li>
              <li className="max-lg:border-b max-lg:py-3  ">
                <button
                onClick={handleClose}>
                <NavLink
                  to="/project"
                  className="hover:text-[#fff] hover:bg-[#1136FF] hover:rounded-md px-4 py-1 text-[#000] block font-bold text-lg"
                >
                  Project
                </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex max-lg:ml-auto">
          <button onClick={handleOpen} className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ScocialIcons className="sm:hidden" />
      </nav>
    </header>
  );
};
