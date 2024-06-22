import React from 'react'

const Ahero = () => {
  return (
    <>
      <div className='w-full md:h-screen h-[80%] flex md:flex-row flex-col justify-center box-border mb-10' style={{ backgroundImage: "url('about-banner.jpg')" }}>

        {/* section-1 left part */}
        <div className='lg:w-[50%] w-[99%] mx-auto md:flex justify-center items-center md:h-full lg:my-1 my-10 lg:px-1 px-5'>
          <div className='bg-[#1136FF] p-10 a-shadow'>
            <div>
              <p className='md:text-6xl text-xl text-white font-bold border-b-4'>About Us</p>
            </div>

            <div className='text-white flex gap-4 text-lg font-semibold md:py-5 '>
              <a href="#">
                Home
              </a>
              <p>&gt;</p>
              <a href="#">
                About Us
              </a>
            </div>
          </div>
        </div>

        {/* section-1 right part */}

        <div className='lg:w-1/2 w-full md:h-full h-[25%] flex justify-center items-center lg:my-1 my-10'>
          <div className='lg:w-[80%] w-[85%] flex items-center justify-center '>
            <img src="about-img1.png" className='sliding' alt="about image-1" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Ahero