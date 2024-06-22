import React from 'react'
import ProjectData from './ProjectData'

const LatestProject = () => {
  return (
    <>
      <div>
        <div className='flex flex-col justify-center items-center gap-8'>
          <div><span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>about company</span></div>
          <p className='text-5xl font-bold'>
          <div>We’ve Done 2560+ Global Projects Take a</div>
          <div className='text-center'>Looks Work Gallery</div>
          </p>
          <div className='capitalize'>
            <ul className='flex gap-8 font-semibold'>
                <li>Show All</li>
                <li>marketting</li>
                <li>web desing</li>
                <li>branding</li>
                <li>mobile apps</li>
                <li>dashboard</li>
            </ul>
          </div>

          <ProjectData />

        </div>
      </div>
    </>
  )
}

export default LatestProject
