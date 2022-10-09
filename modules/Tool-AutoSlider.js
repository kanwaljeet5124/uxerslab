import { useRef } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

function ToolAutoSlider(){
    const swiperRef = useRef(null);
    return (
        <div className="container-fluid text-center">
                <Swiper 
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    <SwiperSlide>klk</SwiperSlide>
                    <SwiperSlide>wswhs</SwiperSlide>
                    <SwiperSlide>whdwh</SwiperSlide>
                    <SwiperSlide>wiihwhw</SwiperSlide>
                    <SwiperSlide>hhjsh</SwiperSlide>
                    <SwiperSlide>jwjswjs</SwiperSlide>
                    <SwiperSlide>jjs</SwiperSlide>
                    <SwiperSlide>ssjsj</SwiperSlide>
                </Swiper>
            
        </div>
    );
}

export default ToolAutoSlider;