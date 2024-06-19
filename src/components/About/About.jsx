import React from 'react'
import Ahero from './Ahero'
import Acompany from './Acompany'
import Aprogress from './Aprogress'
import Achivement from './Achivement'
import TestimonialParent from './TestimonialParent'
import Ateam from './Ateam'

const About = () => {
  return (
    <>
      <Ahero/>
      <Acompany/>
      <Aprogress/>
      <Achivement />
      <div className='bg-white'>
      <Ateam />
      </div>
      <TestimonialParent/>
    </>
  )
}

export default About