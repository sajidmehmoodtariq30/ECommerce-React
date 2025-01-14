import React from 'react'
import Slider from "react-slick";
import Button from '../Shared/Button';

import { HeroData } from '../../Api/Data';



const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
    };
    return (
        <div className="mt-1">
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-color flex justify-center items-center'>
                { /* Hero component */}
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {
                            HeroData.map((data) => (
                                <div className='overflow-hidden' key={data.id}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                                        <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                            <h1 
                                            data-aos = 'zoom-out' 
                                            data-aos-duration = '500'
                                            data-aos-once = 'true'
                                            className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                            <h1 
                                            data-aos = 'zoom-out' 
                                            data-aos-duration = '800'
                                            data-aos-once = 'true'
                                            className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                            <h1 
                                            data-aos = 'zoom-out' 
                                            data-aos-duration = '1000'
                                            data-aos-once = 'true'
                                            className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                            <div className='flex justify-center sm:justify-start gap-4 pt-4'>
                                                <Button 
                                                text='Shop By Category' bgColor='bg-primary' textColor='text-white' />
                                            </div>
                                        </div>
                                        <div className='order-1 sm:order-2'>
                                            <div>
                                                <img 
                                                    data-aos = 'zoom-out' 
                                                    data-aos-duration = '1200'
                                                    data-aos-once = 'true'
                                                    src={data.img}
                                                    className='w-[300px] h-[350px] sm-h-[450px] sm-w-[450px] sm:scale-105 lg:scale-125 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero
