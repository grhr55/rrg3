'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Slaid({ products }) {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.muted = false;
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
          video.muted = true;
        }
      }
    });
  }, [activeIndex]);

  const getVisibleThumbnails = () => {
    const start = Math.max(activeIndex - 2, 0);
    const end = Math.min(start + 4, products.length);
    return products.slice(start, end);
  };

  return (
    <div className="w-full max-w-6xl mx-auto min-[1000px]:px-[0px] max-[1000px]:px-[20px] py-6 space-y-8">
    
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        loop={false}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: 'progressbar',
        }}
        modules={[Pagination]}
        className="rounded-xl"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
            <video
  ref={(el) => (videoRefs.current[index] = el)}
  src={product.video}
  muted={index !== activeIndex} 
  playsInline 
  preload="auto" 
  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl"
  onPause={(e) => {
    e.target.style.objectFit = 'cover'; 
  }}
  onPlay={(e) => {
    e.target.style.objectFit = 'cover';
  }}
/>

             
            </div>
            <div className="mt-2 text-center text-white text-sm font-semibold tracking-wide">
              {product.name} — <span className="text-gray-300">{product.kateor}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4">
        {getVisibleThumbnails().map((product, i) => {
          const realIndex = Math.max(activeIndex - 2, 0) + i;
          return (
            <div
              key={realIndex}
              onClick={() => swiperRef.current?.slideTo(realIndex)}
              className={`relative cursor-pointer transition-transform duration-200 ${
                activeIndex === realIndex ? 'scale-105 ring-2 ring-blue-500' : 'hover:scale-105'
              }`}
            >
              <video
                src={product.video}
                autoPlay
                muted
                loop
                className="w-full h-[120px] object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-1 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                {product.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
