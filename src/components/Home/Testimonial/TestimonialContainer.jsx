import React from 'react'
import SlickSlider from '../../Sliders/SlickSlider';

const TestimonialContainer = () => {
  return (
    <div className="w-full lg:h-screen xl:h-[80%] my-10  mx-auto lg:flex justify-between ">
      <div className="htest_left lg:w-1/2 w-full flex items-center justify-center py-10"
        style={{
          background: `url(testimonialBg.png) no-repeat center center/cover`,
        }}
      >
        <div className='flex flex-col items-center justify-between px-10 h-full w-full'>
          <div className="lg:w-full flex flex-col items-center gap-5 ">
            <p className='w-[250px] text-center px-3 rounded-md font-semibold py-2  text-white bg-[#1136ff] text-xl'>Our Testimonial</p>
            <p className='lg:w-[80%] text-center font-semibold text-[#000] 2xl:text-4xl sm:text-3xl leading-loose max-sm:text-2xl '>What Our Clients Say About Solutions</p>
          </div>
          {/* <Testimonial/> */}
          <SlickSlider test={true} />
        </div>
      </div>
      <div className='htest_right bg-indigo-100 lg:w-1/2 flex flex-col lg:gap-8 lg:px-10 py-16'
        style={{
          background: `url(testimonialBg2.png) no-repeat center center/cover`,
        }}>



        <div className='w-[100%] lg:relative  mx-auto py-5'>

          <div className='w-full flex px-5 justify-between '>
            <img src="htestimonial1.png" className='' alt="" />
            <img src="htestimonials2.png" className='lg:absolute left-[40%] top-[-40px] htest_img' alt="" />
            <img src="htestimonial3.png" className='lg:absolute right-[5%] htest_img' alt="" />
          </div>

          <div className='flex lg:gap-8 justify-between px-5 mt-5'>
            <img src="htestimonials4.png" className='htest_img' alt="" />
            <img src="htestimonials5.png" className='lg:absolute lg:top-[40%] lg:left-[40%] htest_img' alt="" />
          <img src="htestimonials6.png" className='lg:absolute right-[5%] htest_img' alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default TestimonialContainer;