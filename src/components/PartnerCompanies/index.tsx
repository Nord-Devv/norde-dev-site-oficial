"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import empresa1 from "../../assets/empresa1.svg";
import empresa2 from "../../assets/empresa2.svg";
import empresa3 from "../../assets/empresa3.svg";
import empresa4 from "../../assets/empresa4.svg";
import empresa5 from "../../assets/empresa5.svg";
import "swiper/css";

export const PartnerCompanies: React.FC = () => {
  return (
    <section className="max-w-[2000px] mobileSM:mt-[-100px] tabletLG:mt-[0px] w-full py-[2rem] my-[3rem] flex items-center text-center justify-center">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter:false,
        }}
        speed={4650}
        breakpoints={{
          1024: {slidesPerView: 4,},
          768: {slidesPerView: 3,},
          425: {slidesPerView: 2,},
          375: {slidesPerView: 2,},
          320: {slidesPerView: 2,},
        }}
        modules={[Autoplay]}
      >
        {[empresa1, empresa2, empresa3, empresa4, empresa5].map((empresa, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center w-auto">
            <Image src={empresa} alt="Empresa Parceira" className="object-contain mobileSM:w-[120px] mobileSM:h-[80px] tabletLG:w-[150px] tabletLG:h-[100px] "/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};