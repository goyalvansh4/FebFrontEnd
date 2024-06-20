import React from 'react'
import Testimonial from './Testimonial';
import SlickSlider from '../Sliders/SlickSlider';

const TestimonialContainer = () => {
  return (
  <div class="w-full  my-10  mx-auto lg:flex justify-around">
    <div class="htest_left w-1/2 flex items-center pl-10">
       <div className='flex flex-col gap-10  py-10'>
       <div class="lg:w-full flex flex-col gap-8">
           <p className='w-[40%] text-center px-3 rounded-md font-semibold py-2  text-white bg-[#5C28CA] text-xl'>Our Testimonial</p>
           <p className='w-[80%]  font-bold text-[#000] text-5xl  '>What Our Clients Say About Solutions</p>
        </div>
        {/* <Testimonial/> */}
        <SlickSlider test={true}/>
        </div>
      </div>
        <div className='htest_right lg:w-1/2 flex flex-col gap-8 items-center py-10'>
          <div>
             <div className='flex gap-8'>
                 <img src="./htestimonial1.png" alt="" />
                 <img src="./htestimonials2.png" alt="" />
                 <img src="./htestimonial3.png" alt="" />
             </div>
             <div className='flex gap-8 mt-5'>
                 <img src="./htestimonials4.png" alt="" />
                 <img src="./htestimonials5.png" alt="" />
                 <img src="./htestimonials6.png" alt="" />
             </div>
          </div>
          <div className='flex justify-center mt-3'>
          <img src="./htestimonials7.png" alt="" />
          </div>
        </div>
  </div>
  )
}

export default TestimonialContainer;