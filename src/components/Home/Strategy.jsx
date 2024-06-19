import React from "react";

const Strategy = () => {
  const client = [
    {
      id: 1,
      src: "./client1.jpg",
    },
    {
      id: 2,
      src: "./client2.jpg",
    },
    {
      id: 3,
      src: "./client3.jpg",
    },
    {
      id: 4,
      src: "./client4.jpg",
    },
    {
      id: 5,
      src: "./client5.jpg",
    },
    {
      id: 6,
      src: "./client6.jpg",
    },
    {
      id: 7,
      src: "./client7.jpg",
    },
    {
      id: 8,
      src: "./client8.jpg",
    },
    {
      id: 9,
      src: "./client9.jpg",
    },
  ];

  return (
    <div className="strategy relative lg:flex w-[96%] mx-auto h-screen my-5  gap-2">
      <div className="left_part flex flex-col gap-8  w-1/2 px-3 py-8 z-20">
        <p className="text-center text-xl rounded-lg font-semibold bg-[#1136FF] py-2 text-white  w-2/5">
          Working Process
        </p>
        <p className="text-[42px] w-3/4 text-gray-950 font-semibold leading-relaxed">
          We are committed to providing the best strategic guidance available
        </p>
        <div className="arrow mt w-full relative z-0">
          <img src="./markr.png" alt="mark" />
        </div>
        <div className="flex relative bottom-[7%] justify-between px-8">
          <div className="flex absolute bottom-[7%]  left-[10%]  justify-center items-center  inner_img w-[70px] h-[70px] border border-gray-800 rounded-full">
            <img src="./process1.png" alt="" />
          </div>
          <div className="flex absolute left-[45%] bottom-[-45px]  justify-center items-center  inner_img w-[70px] h-[70px] border border-gray-800 rounded-full">
            <img src="./process2.png" alt="" />
          </div>
          <div className="flex absolute left-[75%] bottom-[20%]  justify-center items-center  inner_img w-[70px] h-[70px] border border-gray-800 rounded-full">
            <img src="./process3.png" alt="" />
            <div></div>
          </div>
        </div>
        <div className="flex gap-5 relative top-0">
          <div className="wk_process w-[30%] flex flex-col items-center bg-white rounded-xl overflow-hidden py-4 px-1">
            <p>step 01</p>
            <p>Perform a Complete SEO and Content Audit</p>
            <p>Sit amet consect adipiscing nec tortor nec aenean</p>
          </div>
          <div className="wk_process w-[30%] flex flex-col items-center bg-white rounded-xl overflow-hidden py-4 px-1">
            <p>step 02</p>
            <p>Perform a Complete SEO and Content Audit</p>
            <p>Sit amet consect adipiscing nec tortor nec aenean</p>
          </div>
          <div className="wk_process w-[30%] flex flex-col items-center bg-white rounded-xl overflow-hidden py-4 px-1">
            <p>step 03</p>
            <p>Perform a Complete SEO and Content Audit</p>
            <p>Sit amet consect adipiscing nec tortor nec aenean</p>
          </div>
        </div>
      </div>
      <div className="right  flex flex-col gap-4 w-1/2 p-5">
        <p className="text-xl font-normal">Saticfied Clients</p>
        <p className="text-2xl font-semibold">
          We Have Thousands Of Global Clients
        </p>
        <div className="clients lg:flex relative ">
          {client.map((item, index) => {
            return (
              <div
                className={`clientlogo w-[90px] h-[90px]  rounded-full absolute`}
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  left: `${index * 10}%`,
                }}
              >
                {/* Hello */}
              </div>
            );
          })}
        </div>
        <div className="processBg absolute top-[40%] z-0 left-[29%]   w-[60%] h-[450px] ">
          <img src="./processsBg.jpg" className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
