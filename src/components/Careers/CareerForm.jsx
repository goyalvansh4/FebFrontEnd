import React from 'react'

const CareerForm = () => {
  return (
    <div className='w-[85%] my-10 border border-black mx-auto bg-white flex flex-col        items-center gap-10'>
        <div className='mt-16'>
          <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded'>Opportunity</span>
        </div>
        <p className='md:text-4xl text-2xl text-center'>
            We are thrilled to have you join our team and 
            <br /> look forward to a successful and 
         productive <br />
         working relationship.</p>
        <form action="#" className='w-[100%]'>
          <div className='w-[85%] mx-auto flex flex-col gap-10 '>
            <div className='w-full flex flex-col md:flex-row gap-10'>
              <input type="text" id='text' required className='cclick p-4 border border-black text-black md:w-1/2 w-full' placeholder='Full Name' />
              <input type="tel" id='tel' required className='cclick p-4 border border-black md:w-1/2 w-full' placeholder='Phone Number' />
            </div>
            <div className='w-full flex flex-col md:flex-row gap-10'>
              <input type="email" id='email' required className='cclick p-4 border border-black text-black md:w-1/2 w-full' placeholder='EMail' />
              <input type="text" id='text' required className='cclick p-4 border border-black md:w-1/2 w-full' placeholder='Apply For ..?' />
            </div>
            <input type="file" name="cv" id="cv" placeholder='upload your cv' className='border border-black p-3' />
          </div>

          <div className='flex justify-center items-center w-full my-10'>
            <div className='capitalize bg-yellow-400 flex items-center justify-between px-6 py-3 gap-2 pb-shadow'>
              <span>Apply Now</span>
              
            </div>
          </div>
        </form>
      </div>
  )
}

export default CareerForm
