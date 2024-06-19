import React from "react";

const Footer = () => {
  return (
    <footer className="footerBg tracking-wide">
      <div className="py-14 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="javascript:void(0)">
              <img src="./logo.png" alt="logo" className="w-44 mb-2" />
            </a>
            <p className="w-3/4 text-gray-800 text-md">
              We are passionate about providing innovative IT solutions to
              businesses of all sizes. Our team of experienced professionals
              works tirelessly to create custom solutions tailored to meet the
              unique needs of our clients. With our expertise in web
              development, digital marketing, and IT consulting, we help
              businesses stay ahead of the competition.
            </p>
            <ul className="flex gap-4 mt-4">
              <li>
                <a href="javascript:void(0)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-[#5c28ca] inline hover:fill-[#1136ff] w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[#5c28ca] hover:text-[#1136ff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-[#5c28ca] inline hover:fill-[#1136ff] w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-300 hover:text-[#1136ff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-[#5c28ca] inline hover:fill-[#1136ff] w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-300 hover:text-[#1136ff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-[#5c28ca] inline hover:fill-[#1136ff] w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-black">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Our Pricing
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Product Details
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Our Portfolio
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-16">
            <h4></h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  About Company
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Our Contact
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Blog Details
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-800 hover:text-black text-lg"
                >
                  Faqs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-black">Supports</h4>
            <div className="space-y-4">
              <div className="text-black text-lg flex gap-2">
                <svg
                className="rounded-full bg-[#1136ff] p-2"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="blue"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.657 16.657L13.414 20.9C13.2284 21.0857 13.0081 21.233 12.7656 21.3336C12.523 21.4341 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4341 11.2354 21.3336C10.9929 21.233 10.7726 21.0857 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657V16.657Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11V11Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div>
                  <p>Loction</p>
                  <p>Roorkee,India</p>
                </div>
              </div>
              <div className="text-black text-lg flex gap-2">
                <svg
                className="rounded-full bg-[#1136ff] p-2"
                  width="40"
                  height="40"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4L8.89 9.26C9.21866 9.47928 9.6049 9.5963 10 9.5963C10.3951 9.5963 10.7813 9.47928 11.11 9.26L19 4H1ZM3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div>
                  <p>Email Us</p>
                  <p>support@febtech.in</p>
                </div>
              </div>
              <div className="text-black text-lg flex gap-2">
                <svg
                className="rounded-full bg-[#1136ff] p-2"
                  width="40"
                  height="40"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H6.28C6.48979 1.00016 6.69422 1.0663 6.86436 1.18905C7.03449 1.3118 7.1617 1.48496 7.228 1.684L8.726 6.177C8.8019 6.40534 8.79293 6.65339 8.70072 6.87564C8.60851 7.0979 8.43925 7.27945 8.224 7.387L5.967 8.517C7.07332 10.9655 9.03446 12.9267 11.483 14.033L12.613 11.776C12.7205 11.5607 12.9021 11.3915 13.1244 11.2993C13.3466 11.2071 13.5947 11.1981 13.823 11.274L18.316 12.772C18.5152 12.8383 18.6885 12.9657 18.8112 13.136C18.934 13.3064 19.0001 13.511 19 13.721V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H16C7.716 19 1 12.284 1 4V3Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div>
                  <p>Hotline</p>
                  <p>Roorkee,India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-3 px-5 border-t-2 flex justify-between">
        <p className="text-gray-800 text-lg">
          © 2024 Feb Tech IT Solutions. All Rights Reserved.
        </p>
        <ul className="text-black text-lg flex gap-5">
          <li>About</li>
          <li>Setting & privacy</li>
          <li>Faqs</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
