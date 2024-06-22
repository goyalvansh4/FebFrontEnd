import React from 'react'
import Hero from '../Hero/Hero'
import OurClients from './OurClients'
import Aprogress from '../About/Aprogress'

export const Client = () => {
  return (
    <>
     <Hero title={"Our Client"} subtitle={"Client"}/>
     <OurClients/>
     <div>
     <Aprogress/>
     </div>
    </>
  )
}
