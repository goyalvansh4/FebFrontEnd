import React from 'react'
import Hero from './Hero'
import Connect from './Connect'
import Service from './Service'
import Strategy from './Strategy'
import Growing from './Growing'
import ProjectContainer from './Projects/ProjectContainer'
import SlickSlider from './Sliders/SlickSlider'
import Business from './Business'
import Partner from './Partner'

const Home = () => {
  return (
    <>
    <Hero/>
    <Connect/>
    <Service/>
    <Strategy />
    <Growing/>
    <ProjectContainer/>
    <Partner/>
    <Business/>
    </>
  )
}

export default Home