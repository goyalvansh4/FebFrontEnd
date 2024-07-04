import React from 'react'
import "./Services.css";
import { PiRocketThin,PiMouseThin,PiMonitorPlayThin,PiScrollThin } from "react-icons/pi";
import { SiAmazonsimpleemailservice } from "react-icons/si";

const PopularService = () => {

    const serviceData = [
        {
            icon: <PiRocketThin/>,
            technology: "SEO Optimization",
            para: "Drive more leads sale and revenue your business with digital marketing service",

        },
        {
            icon: <SiAmazonsimpleemailservice/>,
            technology: "Email Marketing",
            para: "Drive more leads sale and revenue your business with digital marketing service",

        },
        {
            icon: <PiMouseThin/>,
            technology: "Web Development",
            para: "Drive more leads sale and revenue your business with digital marketing service",

        },
        {
            icon: <PiMonitorPlayThin/>,
            technology: "UI/UX Strategy",
            para: "Drive more leads sale and revenue your business with digital marketing service",

        },
        {
            icon: <PiScrollThin/>,
            technology: "Content Writting",
            para: "Drive more leads sale and revenue your business with digital marketing service",

        },
        {
            icon: <PiRocketThin/>,
            technology: "SEO Optimization",
            para: "Drive more leads sale and revenue your business with digital marketing service",

        },
        {
            icon: <PiRocketThin/>,
            technology: "SEO Optimization",
            para: "Drive more leads sale and revenue your business with digital marketing service",

        },
        {
            icon: <PiRocketThin/>,
            technology: "SEO Optimization",
            para: "Drive more leads sale and revenue your business with digital marketing service",

        },
    ]
  return (
    <>
     <div className='bg-[#FFF4E8] w-[90%] mx-auto py-10'>
     <div className='w-[90%] mx-auto py-10 '>
     <div className='flex justify-between'>
        <div>
            <img src="stars.png" alt="starts image" className='animate-bounce' />
        </div>
        <div className='flex flex-col items-center gap-6'>
          <div >
              <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>popular service</span>
          </div>
            <p className='text-4xl font-semibold text-center'>
            Outsmart the competition with best-in-class <br /> Digital Services
            </p>
        </div>
        <div>
            <img src="sun.png" alt="sun image" className='animate-spin transition duration-1000 delay-100'/>
        </div>
     </div>


      <div className='mt-16 flex gap-5 flex-wrap justify-center'>
         {serviceData.map((items) => {
            return <div className='card w-[100%] xl:w-[23%] lg:w-[360px] sm:[360px] bg-white flex flex-col items-center p-4 mb-10 gap-4 a-shadow-slider'>
            <div className='rounded-full text-6xl p-2 bg-[#1136FF] text-white my-3 a-shadow-sm z-10 '>
                {items.icon}
            </div>
            <p className='text-lg font-semibold z-10 '>{items.technology}</p>
            <p className='text-center px-6 text-justify z-10'>{items.para}</p>

            <button type="button" className='capitalize underline underline-offset-4 mb-4 z-10 '>read more</button>
            <div className='overlay'></div>
         </div>

         
         })}
      </div>
     </div>
     </div>
    </>
  )
}

export default PopularService
