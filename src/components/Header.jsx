import React, { useState } from "react";
import SocialIcons from "./Home/Sections/SocialIcons";
import NavItem from "./NavBar/NavItem";
import MenuButton from "./NavBar/MenuButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-gray-700 max-w-[98.8vw] lg:w-[98vw] mx-auto tracking-wide lg:absolute z-50">
      <nav className="flex items-center justify-around min-h-[30px] px-4">
        <a href="/" className={`${isMenuOpen ? "hidden" : "block"} w-[10%]`}>
          <img src="./logo.png" alt="logo" className="max-w-[80px]" />
        </a>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={handleClose}
        ></div>
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-white z-50 p-6 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:translate-x-0 lg:flex lg:items-center lg:w-auto lg:bg-transparent lg:p-0`}
        >
          <button onClick={handleClose} className="lg:hidden mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 space-y-4 lg:space-y-0">
            <NavItem to="/" label="Home" handleClose={handleClose} />
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <NavItem
                to="/services"
                label="Services"
                handleClose={handleClose}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              {isServicesDropdownOpen && (
                <div className="absolute hidden lg:flex gap-5 top-full left-0 w-[700px] bg-white shadow-lg rounded mt-2 p-4 z-50">
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Web Development
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Domain Registration
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Website Design
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Website Development
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Software Development
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          E-commerce Website
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Payment Gateway
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Web Hosting
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Professional Emails
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Mobile Application
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Digital Marketing
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          SEO Services
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Optimization
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Pay Per Click
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Email Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Whatsapp Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          SMS Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Graphic Design
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Business Card Design
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Post Design
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Pamphlet Design
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Brochure Design
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Ads Design
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Flyer Design
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Letter Head Design
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Product Catalogue Design
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className=" flex flex-col gap-8">
                    <h6 className="text-base text-[#007bff] font-bold">
                      Social Media Marketing
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Facebook Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Facebook Ads
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          WhatsApp Ads
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Instagram Ads
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Google Ads
                        </a>
                      </li>
                    </ul>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Legal Services
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Domestic Trademark
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          International Trademark
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <NavItem to="/about" label="About" handleClose={handleClose} />
            <NavItem to="/client" label="Clients" handleClose={handleClose} />
            <NavItem to="/blog" label="Blog" handleClose={handleClose} />
            <NavItem to="/careers" label="Careers" handleClose={handleClose} />
            <NavItem
              to="/contactUs"
              label="Contact"
              handleClose={handleClose}
            />
            <NavItem to="/project" label="Project" handleClose={handleClose} />
          </ul>
        </div>
        <MenuButton isMenuOpen={isMenuOpen} handleOpen={handleOpen} />
      </nav>
    </header>
  );
};

export default Header;
