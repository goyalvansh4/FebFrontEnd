import React from 'react'
import LatestProject from './LatestProject'
import './Project.css'
import NewsLetter from './NewsLetter'
import Hero from '../Hero/Hero'


const Project = () => {
  return (
    <>
       <Hero title={"Latest Project"} subtitle={"Project"}/>
      <LatestProject />
      <NewsLetter />
    </>
  )
}

export default Project
