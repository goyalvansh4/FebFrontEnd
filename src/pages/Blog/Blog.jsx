import React, { useEffect } from 'react'
import Blogdata from './Blogdata'
import Hero from '../../components/Hero/Hero'
import NewsLetter from '../Project/NewsLetter'


const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);



  return (
    <>
      <Hero title={"Our Blog List"}  subtitle={"blog"} />
      <Blogdata />
      <NewsLetter />
      
    </>
  )
}

export default Blog

