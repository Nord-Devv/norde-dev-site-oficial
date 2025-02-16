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
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "ease-in-out",
        autoplaySpeed: 70,
        arrows: false, 
        pauseOnHover: false,
        swipeToSlide: true,
    } 
    return (
        <section className="w-full bg-bg-secundary py-[2rem] my-[3rem] flex items-center justify-center border-b-2 border-nord-neutral-30">
        <Slider {...settings} className="max-w-[1000px] w-full flex justify-center">
          <div className="flex items-center w-[120px]">
            <Image src={empresa1} alt="Empresas" className="w-auto max-w-[500px] h-[100px]" />
          </div>
          <div className="flex items-center px-1 w-[120px]">
            <Image src={empresa2} alt="Empresas" className="w-auto max-w-[500px] h-[100px]" />
          </div>
          <div className="flex items-center px-1 w-[120px]">
            <Image src={empresa3} alt="Empresas" className="w-auto max-w-[500px] h-[100px]" />
          </div>
          <div className="flex items-center px-1 w-[120px]">
            <Image src={empresa4} alt="Empresas" className="w-auto max-w-[500px] h-[100px]" />
          </div>
          <div className="flex items-center px-1 w-[120px]">
            <Image src={empresa5} alt="Empresas" className="w-auto max-w-[500px] h-[100px]" />
          </div>
        </Slider>
      </section>
    )
}