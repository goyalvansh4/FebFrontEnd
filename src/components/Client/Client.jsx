import React from 'react'
import Hero from '../Hero/Hero'
import OurClients from './OurClients'
import Aprogress from '../About/Aprogress'
import NewsLetter from '../Project/NewsLetter'

export const Client = () => {
  return (
    <>
     <Hero title={"Our Client"} subtitle={"Client"}/>
     <OurClients/>
     <div className='lg:max-w-[90vw] mx-auto'>
     <Aprogress/>
     </div>
     <NewsLetter/>
    </>
  )
}
