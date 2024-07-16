import React from 'react'
import Slider from './Slider'

const Ateam = () => {
  return (
    <>
     <div className='flex flex-col md:h-screen pt-10 mb-10'>
        <div>
        <div className='flex justify-center pb-8'>
              <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>Team Member</span>
            </div>
            <div className='text-center pb-10'>
            <p className='md:text-4xl font-semibold text-2xl '>At Feb Tech, we have a team of dedicated and passionate professionals<br/> who are committed to providing the best services to our clients.</p>
            </div>

            <div className='flex'>
                 <Slider className='flex py-10'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ateam