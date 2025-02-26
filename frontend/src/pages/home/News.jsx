import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
    {
        "id": 1,
        "title": "New Smartwatch Launch Breaks Sales Records",
        "description": "The latest smartwatch model has shattered previous sales records, featuring advanced health tracking, longer battery life, and improved connectivity.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Revolutionary Skin Care Product Goes Viral",
        "description": "A newly launched skincare product has taken social media by storm, boasting all-natural ingredients and promising flawless skin.",
        "image": news2
    },
    {
        "id": 3,
        "title": "Top Fashion Brands Release Exclusive Collections",
        "description": "Leading fashion brands have unveiled exclusive new collections, setting trends for the upcoming season with bold colors and innovative designs.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Tech Giant Unveils Next-Gen Wireless Earbuds",
        "description": "A leading tech company has introduced its latest wireless earbuds, featuring superior noise cancellation and enhanced sound quality.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Fitness Gadgets: The Must-Have Items of the Year",
        "description": "From smart gym equipment to AI-powered fitness coaches, here are the top fitness gadgets transforming the industry.",
        "image": news2
    }
]

const News = () => {
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>Latest News</h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            news.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                        {/* content */}
                        <div className='py-4'>
                            <Link to="/">
                                 <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                            </Link>
                            <div className='w-12 h-[4px] bg-primary mb-5'></div>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>

                        <div className='flex-shrink-0'>
                            <img src={item.image} alt={item.title} className='w-full object-cover'/>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default News;
