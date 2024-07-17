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

  const strategyData = [
    {
      id: 1,
      title: "Step 01",
      subTitle: "First meeting understanding your needs",
      description:
        "We take the time to understand your business goals and objectives.",
      left: "1%",
      top: "-25px",
      src: "process1.png",
    },
    {
      id: 2,
      title: "Step 02",
      subTitle: "The second meeting design effective solution",
      description:
        "Our team of experts uses the latest technologies and best practices.",
      left: "34%",
      top: "15px",
      src: "process2.png",
    },
    {
      id: 3,
      title: "Step 03",
      subTitle: "The final meeting delivering exceptional results",
      description:
        "We are committed to delivering exceptional results within the budget.",
      right: "2%",
      top: "-25px",
      src: "process3.png",
    },
  ];

  return (
    // <div className="w-full  border-2 border-blue-800 ">
    <div className="hstrategy  flex flex-col lg:flex-row w-[95%] mx-auto lg:h-screen  gap-2">
      <div
        className="flex flex-col gap-10 w-full lg:w-3/5 px-8 py-8 z-20"
        style={{
          background: `url(processBg.jpg) no-repeat center center/cover`,
        }}
      >
        <p className="text-center text-xl rounded-lg font-semibold bg-[#1136FF] py-2 text-white  w-[220px]">
          Working Process
        </p>
        <p className="max-sm:text-2xl sm:text-2xl xl:text-[40px] w-4/5 text-gray-950 font-semibold leading-loose">
          We are committed to providing the best strategic guidance available
        </p>
        <div className="arrow mt w-full flex flex-col gap-5 lg:relative z-0">
          <img src="./markr.png" alt="mark" />
          {strategyData.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-center items-center gap-1 px-2 w-[100%] lg:absolute  lg:w-[15vw] lg:h-[280px] `}
                style={{
                  left: `${data.left}`,
                  top: `${data.top}`,
                  right: `${data.right}`,
                }}
              >
                <div className="flex  gap-4 justify-center items-center  inner_img w-[70px] h-[70px] border border-gray-800 rounded-full">
                  <img src={data.src} alt="" className="hrotate_img" />
                </div>
                <div className="w-full wk_process flex flex-col gap-2 items-center bg-white rounded-xl drop-shadow-2xl overflow-hidden py-4 px-1">
                  <p className="text-base font-light text-[#1136ff]">
                    {data.title}
                  </p>
                  <p className="text-lg font-semibold text-center text-[#000]">
                    {data.subTitle}
                  </p>
                  <p className="text-sm font-light text-center text-gray-400">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right flex flex-col gap-4 w-full lg:w-2/5 p-5 lg:relative">
        <p className="text-xl font-normal">Saticfied Clients</p>
        <p className="text-2xl font-semibold">
          We Have Thousands Of Global Clients
        </p>
        <div className="clients flex gap-1 lg:relative ">
          {client.map((item, index) => {
            return (
              <div
              key={index}
                className={`clientlogo w-[60px] h-[60px]  lg:w-[90px] lg:h-[90px]  rounded-full lg:absolute`}
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
        <div className="processBg lg:absolute z-0 lg:right-[0] lg:bottom-[-70px] w-full lg:w-[63vw] lg:h-[70vh] ">
          <img
            src="https://febtech.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-18-at-23.08.19.jpeg.webp"
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
