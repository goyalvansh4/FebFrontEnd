import React from 'react'
import Blogdata from './Blogdata'
import Hero from '../Hero/Hero'
import NewsLetter from '../Project/NewsLetter'


const Blog = () => {
  return (
    <>
      <Hero title={"Our Blog List"}  subtitle={"blog"} />
      <Blogdata />
      <NewsLetter />
      
    </>
  )
}

export default Blog

