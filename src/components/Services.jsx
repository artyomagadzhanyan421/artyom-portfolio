import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../styles/Services.css";

import { EffectCoverflow, Autoplay } from 'swiper/modules';

function Services() {
    return (
        <div className='Projects'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: true,
                }}
                spaceBetween={10}
                pagination={true}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide />
                <SwiperSlide />
                <SwiperSlide />
            </Swiper>
        </div>
    )
}

export default Services