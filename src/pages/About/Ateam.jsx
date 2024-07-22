import React from 'react'
import Slider from './Slider'

const Ateam = () => {
  return (
    <>
     <div className='flex flex-col md:h-screen pt-10 '>
        <div>
        <div className='flex justify-center pb-8'>
              <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>Team Member</span>
            </div>
            <div className='text-center pb-10'>
            <p className='2xl:text-4xl lg:w-[60%] mx-auto text-2xl leading-loose'>Our passionate professionals are committed to delivering exceptional services to our clients.</p>
            </div>

            <div className='flex justify-center flex-wrap gap-4'>
                 <Slider className='flex'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ateam