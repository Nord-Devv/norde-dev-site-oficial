import Image from "next/image";

import bgAboutMobile from "../../assets/bg-about-mobile.png";
import imageAbout from "../../assets/bg-image-about.png";
import bgAboutDesktop from "../../assets/bg-about-desktop.png";
import imageAboutDesktop from "../../assets/image-about-desktop.png";

export function About() {
  return (
    <section className="max-w-[2000px] relative flex flex-col tabletLG:flex-row tabletLG:justify-center laptopSM:mx-auto laptopSM:items-center overflow-hidden" id="quem-somos">
      <div className="h-[460px] flex items-center border-t-[1rem] border-yellow-500 w-full justify-center laptopSM:relative tabletLG:border-l-[1.3rem] tabletMD:h-[480px] tabletLG:border-t-0 tabletLG:h-[500px] laptopLG:h-[633px] tabletLG:max-w-full tabletLG:justify-normal"
      data-aos="fade-down"
      data-aos-duration="1000"
      >
        <Image
          className="block w-full h-full -z-10 border-top tabletLG:hidden"
          src={bgAboutMobile}
          alt=""
        />
        <Image
          className="hidden absolute h-full pr-[30rem] laptopMD:pr-[10rem] laptopLG:pr-0 tabletLG:block"
          src={bgAboutDesktop}
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
        />

        <div className="absolute max-w-[656px] px-[2rem] flex justify-center flex-col gap-[1.3rem] pb-[3.5rem] tabletSM:px-[4rem] laptopMD:px-0 laptopSM:pb-0 laptopMD:ml-[8rem]">
          <h2 className="before:bg-white font-[400] before:w-[3rem] before:h-[1px] after:bg-white after:w-[3rem] after:h-[1px] text-[1.5rem] mb-[1.3rem] text-center flex justify-center items-center gap-[1.9rem] tabletSM:text-[1.6rem] tabletMD:text-[2.3rem] tabletLG:text-[2rem] laptopMD:text-[2.3rem] laptopLG:text-[2.9rem]">
            SOBRE
          </h2>

          <p className="text-[1.5rem] font-[600] tabletSM:text-[1.9rem] tabletMD:text-[2.5rem] laptopMD:text-[3rem] laptopLG:text-[3.9rem]">
            Criando e melhorando sistemas com{" "}
            <span className="text-key">TECNOLOGIA</span>,
            <span className="text-key">INOVAÇÃO</span> &{" "}
            <span className="text-key">SEGURANÇA</span>
          </p>

          <p className="text-[1.4rem] tabletSM:text-[1.6rem] tabletMD:text-[1.6rem] tabletLG:text-[1.9rem] laptopMD:text-[2.1rem] laptopLG:text-[1.9rem]">
            Somos uma empresa de tecnologia com foco em criação de sites, visando solucionar a presença digital dos nossos clientes com excelência.
          </p>
          <p className="text-[1.4rem] tabletSM:text-[1.6rem] tabletMD:text-[1.6rem] tabletLG:text-[1.9rem] laptopMD:text-[2.1rem] laptopLG:text-[1.9rem]">
            Nossa equipe experiente combina criatividade e conhecimento técnico para desenvolver sites responsivos, intuitivos e visualmente atraentes, atendendo a empresa locais quanto a clientes de todo o país.
          </p>
        </div>
      </div>
      <Image
        className="w-full relative top-[-90px] -z-20 tabletMD:top-[-100px] laptopSM:top-[-130px] block tabletLG:hidden"
        src={imageAbout}
        alt=""
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <Image
        className="tabletLG:block max-w-[1200px] h-[495px] laptopLG:h-[633px] w-full object-cover hidden absolute right-0 -z-10"
        src={imageAboutDesktop}
        alt=""
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </section>
  );
}
