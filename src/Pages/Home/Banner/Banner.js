import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import car1 from '../../../assets/slider/1.png';
import car2 from '../../../assets/slider/2.png';
import car3 from '../../../assets/slider/3.png';
import car4 from '../../../assets/slider/4.png';
import car5 from '../../../assets/slider/5.png';
import car6 from '../../../assets/slider/6.png';
import car7 from '../../../assets/slider/7.png';
import car8 from '../../../assets/slider/8.png';
import car9 from '../../../assets/slider/9.png';

const Banner = () => {
    return (
        <div className="hero mb-6 background ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-full md:w-full lg:w-1/2'>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 1500
                        }}
                        navigation
                        loop={true}
                        modules={[Pagination, Navigation, Autoplay]}

                        className="mySwiper"
                    >
                        <SwiperSlide><img src={car6} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                        <SwiperSlide><img src={car2} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                        <SwiperSlide><img src={car8} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                        <SwiperSlide><img src={car9} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                        <SwiperSlide><img src={car5} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                        <SwiperSlide><img src={car1} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                        <SwiperSlide><img src={car7} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                        <SwiperSlide><img src={car3} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                        <SwiperSlide><img src={car4} alt='' className=' h-[530px] w-[680px]' /></SwiperSlide>
                    </Swiper>

                </div>
                <div className='w-full md:w-full lg:w-1/2'>
                    <h1 className="text-4xl font-bold text-white">Welcome to Bangladesh’s largest car selling platform for buy and sell cars.</h1>
                    <div className="py-6 text-white">
                        <p>We sale second hand cars. Best in condition also affordable in price. You may get your desire car with an affordable price.</p>
                    </div>
                    <div className='flex my-10 gap-4'>
                        <Link to='/login' className="btn btn-accent m-2">Start Buying</Link>
                        <Link to='/login' className="btn btn-info m-2">Start Selling</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;