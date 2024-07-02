import React from 'react'
import News from './News'

const NewsContainer = () => {
  const newsData = [
    {
      id: 1,
      src:"blog1.jpg",
      title: 'Ultimate Free Solo Blog Setup With Ghost And Gatsby',
      date: 'September 20, 2023'
    },
    {
      id: 2,
      src:"blog2.jpg",
      title: 'Rethinking Server-Timing As Seen Critical Monitoring Tool',
      date: 'September 25, 2023'
    },
    {
      id: 3,
      src:"blog3.jpg",
      title: 'Tasks Focus On What Matters Must Focus On What Doesn’t',
      date: 'September 25, 2023'
    }
  ]
  return (
    <div className='hnewsBg lg:w-[90%] mx-auto my-16 lg:py-16 flex flex-col gap-8'
    style={{
      background: `url(newsBg.png) no-repeat center center/cover`,
    }}>
    <div className='hnews_content flex flex-col gap-12 items-center'>
       <p className='lg:w-[20%] text-center px-3 rounded-md font-semibold py-2  text-white bg-[#5C28CA] text-xl'>News & Blogs</p>
       <p className='lg:w-[50%] text-center font-bold text-[#000]  max-sm:text-2xl lg:text-5xl leading-normal  '>Get Every Single Updates Articles Recent News & Blogs</p>
    </div>
    <div className='flex flex-col lg:flex-row justify-around items-center'>
    {newsData.map((data) => {
        return <News data={data} />
    })}
    </div>
  </div>
  )
}

export default NewsContainer