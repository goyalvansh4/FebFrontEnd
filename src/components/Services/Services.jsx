import React from 'react'
import Hero from '../Hero/Hero'
import NewsLetter from '../Project/NewsLetter'
import Achivement from '../About/Achivement'
import BelowSHero from './BelowSHero'
import PopularService from './PopularService'

const Services = () => {
  return (
    <>
      <Hero title={"Our Services"} subtitle={"Our Services"}/>
      <BelowSHero />
      <PopularService />
       <div className='my-20'>
         <Achivement />
       </div>
      <NewsLetter />
    </>
  )
}

export default Services
