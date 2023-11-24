import Image from "next/image";
import Link from "next/link";

import imgDesktop from "../../assets/home-desktop.png";
import bgDesktop from "../../assets/Vector-5.png";
import bgNotebook from "../../assets/Vector-3.png";


export function HomePage() {

  return (
    <section id="inicio" className="py-[4rem] tabletLG:py-[15rem]">
      <Image
        src={bgDesktop}
        className="hidden tabletLG:block tabletLG:absolute tabletLG:bottom-[-15rem] tabletLG:left-0"
        alt=""
      />
      
      <div className="max-w-[1440px] mx-auto text-center flex flex-col justify-center items-center tabletLG:flex tabletLG:items-center tabletLG:flex-row laptopSM:gap-[2.5rem] overflow-hidden">
        <div className="w-[680px] min-w-[335px] max-w-full px-[16px] tabletLG:text-left" data-aos="fade-right"
        data-aos-duration="1000">
          <h1 className="text-white text-[4.5rem] font-bold mb-[2.4rem] tabletSM:text-[6rem] tabletSM:max-w-[520px] tabletSM:mx-auto tabletMD:text-[6.5rem] tabletMD:max-w-[590px] tabletLG:text-[5.4rem] laptopSM:ml-0 laptopSM:max-w-full laptopSM:text-[5.6rem] laptopMD:text-[7rem] laptopLG:text-[7.1rem]">
            Bem-vindos a <span className="text-yellow-500">Nord Dev</span>
          </h1>
          <p className="text-[1.3rem] tabletSM:text-[1.8rem] laptopSM:text-[1.8rem] tabletMD:text-[2.4rem] tabletLG:text-[1.6rem] laptopMD:text-[2rem] laptopLG:text-[2.1rem]">
            Construindo o futuro da web, unindo inovação e excelência digital, impulsionando o amanhã.
          </p>

          <div className="pt-[2.4rem] flex justify-center items-center gap-[2rem] tabletMD:gap-[4.4rem] tabletLG:justify-start ">
            <Link
              href="https://api.whatsapp.com/send/?phone=5585986263325&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0"
              className="bg-yellow-500 px-[1.3rem] py-[0.9rem] text-[1.5rem] rounded-[4px] text-nord-neutral-10 font-[600] tabletSM:text-[2rem] tabletSM:rounded-[9px] tabletMD:px-[2rem] border-[1px] border-transparent hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all tabletLG:text-[1.8rem] laptopMD:text-[2.1rem] "
            >
              Entre em contato
            </Link>
            {/* <Link
              href="#"
              className="border-[0.05rem] rounded-[4px] px-[2.2rem] py-[0.9rem] text-[1.3rem] font-[600] tabletSM:text-[2rem] tabletSM:rounded-[9px]  hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all tabletLG:text-[1.8rem] laptopMD:text-[2.1rem]"
            >
              Nossos projetos
            </Link> */}
          </div>
        </div>
      
        <Image
          className="w-[680px] min-w-[340px] max-w-full mt-[5rem] pl-[1.5rem] tabletLG:mt-0 tabletLG:pl-0"
          src={imgDesktop}
          alt=""
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
      </div>
      
      <Image
        src={bgNotebook}
        className="hidden tabletLG:absolute tabletLG:bottom-[10rem] tabletLG:right-0 tabletLG:z-[-1] tabletLG:block"
        alt=""
      />
    </section>
  );
}
