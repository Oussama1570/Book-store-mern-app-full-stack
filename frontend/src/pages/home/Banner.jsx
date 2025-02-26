import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="Banner" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Arrivals This Week</h1>
            <p className='mb-10'>
                Discover the latest trending products across various categories. 
                From the newest tech gadgets to must-have fashion pieces, explore what's hot this week.
            </p>

            <button className='btn-primary'>Shop Now</button>
        </div>
    </div>
  )
}

export default Banner;
