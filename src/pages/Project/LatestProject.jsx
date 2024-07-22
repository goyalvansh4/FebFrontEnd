import React from 'react'
import ProjectData from './ProjectData'

const LatestProject = () => {
  return (
    <>
      <div>
        <div className='flex flex-col justify-center items-center gap-8'>
          <div><span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>Projects</span></div>
          <p className='text-3xl md:text-5xl font-bold'>
          <div className='text-center px-2'>We’ve Done 2560+ Global Projects Take a <br />
          Looks Work Gallery</div>
          </p>
          <div className='capitalize text-lg 2xl:text-xl text-center' >Our passionate professionals are committed to delivering exceptional services to our clients.
          </div>

          <ProjectData />

        </div>
      </div>
    </>
  )
}

export default LatestProject
