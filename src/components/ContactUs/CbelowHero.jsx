import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
const CbelowHero = () => {


    return (
        <>
            <div className='bg-[#ffffff] lg:flex w-[85%] mx-auto'>

                {/* section-2 left part */}
                <div className='lg:w-1/2  w-[98%]  lg:h-screen flex lg:flex-row flex-col justify-center items-center my-5 '>
                    <div className='lg:w-[80%] w-[90%] z-10'>
                        <img src="contact-img1.png" alt="contact img-1" />
                        
                    </div>
                    <div className='pulse animate-custom-pulse2 border rounded-full absolute left-0 right-0 top-0 bottom-0 w-[320px] h-[320px] '></div>
                    
                </div>

                {/* section-2 right part */}

                <div className='lg:w-1/2 w-full lg:h-screen flex  flex-col justify-center items-center px-10 gap-6'>

                    <div className='flex flex-col justify-around gap-4 h-5/6'>
                        <div >
                            <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>contact us</span>
                        </div>
                        <div>
                            <p className='text-4xl font-semibold'>
                            Feel Free to Contact With Us. We’re Ready to Help you</p>
                        </div>

                        <div>
                            <div className='flex gap-4'>
                                <div >
                                   <MdOutlineMail className='border rounded-full p-2 text-6xl text-white bg-[#1136FF]'/>
                                </div>
                                <div>
                                    <p>Email Address</p>
                                    <a className='text-3xl' href="support@febtech.in">support@febtech.in </a>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div >
                                   <FaPhoneAlt  className='border rounded-full p-2 text-6xl text-white bg-[#1136FF]'/>
                                </div>
                                <div>
                                    <p>Email Address</p>
                                    <a className='text-3xl' href="support@febtech.in">support@febtech.in </a>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div >
                                   <IoLocationOutline className='border rounded-full p-2 text-6xl text-white bg-[#1136FF]'/>
                                </div>
                                <div>
                                    <p>Email Address</p>
                                    <a className='text-3xl' href="support@febtech.in">support@febtech.in </a>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default CbelowHero
