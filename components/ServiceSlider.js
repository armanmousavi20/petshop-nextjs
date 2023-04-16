import React from 'react';
import Image from 'next/image';

import { Swiper , SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import Service1Icon from '../public/img/services/service-icon1.svg';
import Service2Icon from '../public/img/services/service-icon2.svg';
import Service3Icon from '../public/img/services/service-icon3.svg';

const services = [{ image : Service1Icon , name:"pharmacy" , btnText:"explore" ,
                    description:"Vet Pharmacy offer you wide range of leading brands in pet medicines, pet pharmacy, dog food, cat foods and other pet products for all your pets needs." },
                  {image : Service2Icon , name:"breed-specific Haircuts" , btnText:"explore" ,
                   description:"This is the haircut that you might see in Crufts or at your local dog show. The breed standard is there to accentuate your dog's genetic build and muscle structure. It is considered that the breed standard is the best look for each individual breed." },
                   {image : Service3Icon , name:"Cloths" , btnText:"explore" ,
                    description:"Our designer dog clothing includes a large selection of dog shirts, sweaters, coats, dresses, pajamas, and Halloween costumes"}     ]
const ServiceSlider = () => {
  return <>
           <Swiper slidesPerView={1} spaceBetween={30} navigation={true}
                 modules={[Navigation]} 
                 breakpoints={{ 
                         768:{slidesPerView:2 }
                             }} 
                  className='serviceSlider min-h-[680px]'>
              {services.map( (service , index) =>
                      { return <SwiperSlide key={index} 
                                            className="border border-primary/20 bg-cream min-h-[560px] 
                                                       rounded-[66px] py-16 px-8"> 
                                     <Image className='mb-9' src={service.image} /> 
                                     <div className='text-[26px] font-medium mb-4'> {service.name} </div>
                                     <div className='text-[20px] mb-8'> {service.description} </div>
                                     <button className='btn btn-primary'> {service.btnText} </button>
                                </SwiperSlide> } )}
           </Swiper>
         </>
};

export default ServiceSlider;
