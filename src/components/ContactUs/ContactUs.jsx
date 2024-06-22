import React from 'react'
import CbelowHero from './CbelowHero'
import NewsLetter from '../Project/NewsLetter'
import Hero from '../Hero/Hero';
import MapComponent from './MapComponent';
import GetInTouch from './GetInTouch';
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <Hero title={"Contact Us"} subtitle={"Contact Us"}/>
      <CbelowHero />
      <MapComponent />
      <GetInTouch />
      <NewsLetter />
    </>
  )
}

export default ContactUs
