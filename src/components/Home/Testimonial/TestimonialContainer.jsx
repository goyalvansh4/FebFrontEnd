import React from 'react'
import SlickSlider from '../Sliders/SlickSlider';

const TestimonialContainer = () => {
  return (
  <div class="w-full lg:h-screen  my-10  mx-auto lg:flex justify-between">
    <div class="htest_left lg:w-1/2 flex items-center py-16 pl-10"
     style={{
      background: `url(testimonialBg.png) no-repeat center center/cover`,
     }}
    >
       <div className='flex flex-col gap-10  '>
       <div class="lg:w-full flex flex-col items-center gap-8">
           <p className='lg:w-[40%] text-center px-3 rounded-md font-semibold py-2  text-white bg-[#5C28CA] text-xl'>Our Testimonial</p>
           <p className='lg:w-[80%] text-center font-bold text-[#000] text-5xl max-sm:text-2xl leading-normal  '>What Our Clients Say About Solutions</p>
        </div>
        {/* <Testimonial/> */}
        <SlickSlider test={true}/>
        </div>
      </div>
        <div className='htest_right  bg-indigo-100 lg:w-1/2 flex flex-col lg:gap-8 lg:px-10 py-16'
        style={{
          background: `url(testimonialBg2.png) no-repeat center center/cover`,
         }}>
          <div className='lg:relative lg:w-[50%] mx-auto py-5'>
             <div className='flex lg:gap-8'>
                  <img src="htestimonial1.png" className='' alt="" />
                  <img src="htestimonials2.png" className='lg:absolute left-40 top-[-40px] htest_img' alt="" />
                  <img src="htestimonial3.png" className='lg:absolute left-80 htest_img' alt="" />
                
             </div>
             <div className='flex lg:gap-8 mt-5'>
                 <img src="htestimonials4.png" className='htest_img' alt="" />
                 <img src="htestimonials5.png" className='lg:absolute lg:top-[40%] lg:left-40 htest_img' alt="" />
                 <img src="htestimonials6.png" className='lg:absolute left-80 htest_img' alt="" />
             </div>
             <div className='flex justify-center '>
          <img src="htestimonials7.png" className='lg:absolute left-40' alt="" />
          </div>
          </div>
        </div>
  </div>
  )
}

export default TestimonialContainer;