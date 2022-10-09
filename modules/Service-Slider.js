import { useRef } from 'react';
import SectionHeading from "./Section-Heading";
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import ServiceCard from './Service-Card';

function ServiceSlider(){
    const swiperRef = useRef(null);

    return (
        <div className="section">
            <div className="container d-flex d-flex-wrap d-justify-space-between">
                <SectionHeading title="Latest Verified Collectibles in " highlighted-title="last 7 days"></SectionHeading>
                
                <Swiper 
                    ref={swiperRef}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={4}
                    speed={1500}
                    grabCursor= {true}
                    mousewheelControl= {true}
                    keyboardControl= {true}
                >
                    <SwiperSlide><ServiceCard></ServiceCard></SwiperSlide>
                    <SwiperSlide><ServiceCard></ServiceCard></SwiperSlide>
                    <SwiperSlide><ServiceCard></ServiceCard></SwiperSlide>
                    <SwiperSlide><ServiceCard></ServiceCard></SwiperSlide>
                    <SwiperSlide><ServiceCard></ServiceCard></SwiperSlide>
                    <SwiperSlide><ServiceCard></ServiceCard></SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
export default ServiceSlider;