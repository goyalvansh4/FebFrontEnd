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
      top: "60%",
      src:"./process1.png",
      imgTop:"-45%"
    },
    {
      id: 2,
      title: "Step 02",
      subTitle: "The second meeting Designing effective solutions",
      description:
        "Our team of experts uses the latest technologies and best practices.",
      top: "65%",
      src:"./process2.png",
      imgTop:"-42%"
    },
    {
      id: 3,
      title: "Step 03",
      subTitle: "The final meeting Delivering exceptional results",
      description:
        "We are committed to delivering exceptional results for our clients within the budget.",
      top: "60%",
      src:"./process3.png",
      imgTop:"-45%"
    },
  ];

  return (
    <div className="hstrategy relative flex flex-col lg:flex-row w-[95%] mx-auto h-screen my-5  gap-2">
      <div className="hstrategyleft_part flex flex-col gap-10 w-full lg:w-3/5 px-8 py-8 z-20">
        <p className="text-center text-xl rounded-lg font-semibold bg-[#1136FF] py-2 text-white  w-2/5">
          Working Process
        </p>
        <p className="text-[40px] w-4/5 text-gray-950 font-semibold leading-relaxed">
          We are committed to providing the best strategic guidance available
        </p>
        <div className="arrow mt w-full lg:relative z-0">
          <img src="./markr.png" alt="mark" />
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
        {strategyData.map((data, index) => {
          return (
            <div
              className={`flex flex-col max-lg:items-center gap-5 lg:absolute w-full lg:w-2/4`}
              style={{
                left: `${index * 18 + 2}%`,
                top: `${data.top}`,
              }}
            >
              <div className="flex lg:absolute  gap-4 justify-center items-center  inner_img w-[70px] h-[70px] border border-gray-800 rounded-full"
               style={{
                left: `${index+1 * 12}%`,
                top: `${data.imgTop}`,
              }}
              >
                <img src={data.src} alt="" />
              </div>
              <div className="w-full lg:w-1/3 wk_process flex flex-col gap-2 items-center bg-white rounded-xl overflow-hidden py-4 px-1">
                <p className="text-base font-light text-[#1136ff]">
                  {data.title}
                </p>
                <p className="text-xl font-semibold text-center text-[#000]">
                  {data.subTitle}
                </p>
                <p className="text-base font-light text-center text-gray-400">
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
      <div className="right flex flex-col gap-4 w-full lg:w-2/5 p-5">
        <p className="text-xl font-normal">Saticfied Clients</p>
        <p className="text-2xl font-semibold">
          We Have Thousands Of Global Clients
        </p>
        <div className="clients lg:flex lg:relative ">
          {client.map((item, index) => {
            return (
              <div
                className={`clientlogo w-[90px] h-[90px]  rounded-full lg:absolute`}
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
        <div className="processBg lg:absolute top-[40%] z-0 left-[29%]   w-[60%] h-[450px] ">
          <img src="./processsBg.jpg" className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
