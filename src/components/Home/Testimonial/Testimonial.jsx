import React from 'react'

const Testimonial = () => {
  return (
    <div class="w-full flex flex-col items-center  justify-between">
           <div className='htestBox lg:w-3/5 p-4 rounded-xl shadow-2xl'>
            <p className='text-base font-semibold text-[#000]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et magnam accusamus consectetur voluptatum laborum debitis.</p>
            <p className='text-base font-light text-[#494949]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsum.</p>
           </div>
           <div className='mt-6 ml-10 flex gap-5 py-4'>
               <div className='w-[50px] h-[50px]  rounded-full border-2  border-gray-500'>
                <img src="./client1.jpg" className='h-full w-full rounded-full' alt="" />
                </div>
                <div className='flex flex-col'>
                <p className='text-lg font-bold text-black'>John Doe</p>
                <p className='text-lg font-medium text-black'>CEO, Company Name</p>
                </div>
           </div>
        </div>
  )
}

export default Testimonial