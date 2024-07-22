import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import NewsLetter from '../Project/NewsLetter'
import CertificateData from './CertificateData'


const Certificate = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);



  return (
    <>
      <Hero title={"Certificate"}  subtitle={"verify certificate"} />
      <CertificateData />
      
    </>
  )
}

export default Certificate;

