import React from "react";
import Slider from 'react-slick';
import Image from "next/image";
import empresa1 from "../../assets/empresa1.svg";
import empresa2 from "../../assets/empresa2.svg";
import empresa3 from "../../assets/empresa3.svg";
import empresa4 from "../../assets/empresa4.svg";
import empresa5 from "../../assets/empresa5.svg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PartnerCompanies: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    cssEase: "ease-in-out",
    autoplaySpeed: 100,
    arrows: false,
    pauseOnHover: false,
    swipeToSlide: true,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ], 
  }
  return (
    <section className="w-full bg-bg-secundary py-[2rem] my-[3rem] flex items-center justify-center border-b-2 border-nord-neutral-30">
        <Slider {...settings} className="max-w-[1000px] w-full flex justify-center">
          {[empresa1,empresa2, empresa3, empresa4, empresa5].map((empresa, index) => (
               <div key={index} className="flex items-center w-[120px] md:w-[150px] lg:w-[180px]">
               <Image src={empresa} alt="Empresas" className="w-auto max-w-xl h-[90px] md:h-[100px]" />
             </div>
          ))}
        </Slider>
    </section>
  )
}