'use client'

import devWeb from "../../assets/dev-web.svg";
import design from "../../assets/design.svg";
import hospedagem from "../../assets/hospedagem.svg";
import socialMedia from "../../assets/social-media.svg";
import Image from "next/image";

import bgAboutMobile from "../../assets/bg-about-mobile.png";
import imageAbout from "../../assets/bg-image-about.png";
import bgAboutDesktop from "../../assets/bg-about-desktop.png";
import imageAboutDesktop from "../../assets/image-about-desktop.png";
import imgDesktop from "../../assets/home-desktop.png";
import bgDesktop from "../../assets/Vector-5.png";
import bgNotebook from "../../assets/Vector-3.png";

import { ButtonDefault } from "../../components/ButtonDefault";
import { ImageServicesDefault } from "../../components/ImageServicesDefault";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PartnerCompanies } from "@/components/PartnerCompanies";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function LandingPage() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (

    <>
      <Header />
      <section id="inicio" className="py-[4rem] tabletLG:py-[15rem]">
        <Image
          src={bgDesktop}
          className="absolute top-10 z-[-10] tabletLG:block tabletLG:top-auto tabletLG:bottom-[-15rem] tabletLG:left-0"
          alt=""
        />

        <div className="max-w-[1440px] mx-auto text-center flex flex-col justify-center items-center tabletLG:flex tabletLG:items-center tabletLG:flex-row laptopSM:gap-[2.5rem] overflow-hidden">
          <div className="w-[680px] min-w-[335px] max-w-full px-[5px] pr-[8px] tabletLG:text-left" data-aos="fade-right"
            data-aos-duration="1000">
            <h1 className="text-white text-[4.5rem] font-bold mb-[2.4rem] tabletSM:text-[6rem] tabletSM:max-w-[520px] tabletSM:mx-auto tabletMD:text-[6.5rem] tabletMD:max-w-[590px] tabletLG:text-[5.4rem] laptopSM:ml-0 laptopSM:max-w-full laptopSM:text-[5.6rem] laptopMD:text-[7rem] laptopLG:text-[7.1rem]">
              Bem-vindos a <span className="text-yellow-500">Nord Dev</span>
            </h1>
            <p className="text-[1.3rem] tabletSM:text-[1.8rem] laptopSM:text-[1.8rem] tabletMD:text-[2.4rem] tabletLG:text-[1.6rem] laptopMD:text-[2rem] laptopLG:text-[2.1rem]">
              Construindo o futuro da web, unindo inovação e excelência digital, impulsionando o amanhã.
            </p>

            <div className="pt-[2.4rem] flex justify-center items-center gap-[2rem] tabletMD:gap-[4.4rem] tabletLG:justify-start ">
              <ButtonDefault className="bg-yellow-500 px-[1.3rem] py-[0.9rem] text-[1.5rem] rounded-[4px] text-nord-neutral-10 font-[600] tabletSM:text-[2rem] tabletSM:rounded-[9px] tabletMD:px-[2rem] border-[1px] border-transparent hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all tabletLG:text-[1.8rem] laptopMD:text-[2.1rem]"
                target="https://api.whatsapp.com/send/?phone=5585994127582&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0">
                Entre em Contato
              </ButtonDefault>
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
          className="absolute right-0 bottom-[-20rem] z-[-10] tabletLG:bottom-[10rem] tabletLG:right-0 tabletLG:z-[-1] tabletLG:block"
          alt=""
        />
      </section>

      
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
              <span className="text-key">TECNOLOGIA</span>, {" "}
              <span className="text-key">INOVAÇÃO</span> &{" "}
              <span className="text-key">SEGURANÇA</span>
            </p>

            <p className="text-[1.4rem] tabletSM:text-[1.6rem] tabletMD:text-[1.6rem] tabletLG:text-[1.9rem] laptopMD:text-[2.1rem] laptopLG:text-[1.9rem]">
              Somos uma empresa de tecnologia com foco em criação de sites, visando solucionar a presença digital dos nossos clientes com excelência.
            </p>
            <p className="text-[1.4rem] tabletSM:text-[1.6rem] tabletMD:text-[1.6rem] tabletLG:text-[1.8rem]  laptopMD:text-[2.1rem] laptopLG:text-[1.9rem]">
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
      {/* /// Sessão Empresas Parceiras */}
      <section className="w-full py-[2rem] flex justify-center">
        <PartnerCompanies />
      </section>
      
      <section className="flex flex-col items-center justify-center my-[2.5rem] max-w-[1440px] mx-auto tabletSM:flex-wrap" id="servicos">
        <h1 className="before:bg-white before:w-[4.5rem] before:h-[1px] after:bg-white after:w-[4.5rem] after:h-[1px] flex justify-center items-center gap-[1.5rem] font-[200] text-[3.4rem] laptopSM:text-[5.9rem]">
          Nossos
        </h1>
        <h3 className="text-[3.5rem] font-bold mb-[2.4rem] laptopSM:text-[6rem]">Serviços</h3>

        <div className="flex flex-col items-center justify-center tabletSM:flex-wrap tabletSM:flex-row tabletSM:gap-[10%] pt-[4rem]">

          <ImageServicesDefault
            src={design}
            title='Design'
            description='Transformamos suas ideias em experiências visuais marcantes, criando designs inovadores e envolventes.'
          >
          </ImageServicesDefault>

          <ImageServicesDefault
            src={devWeb}
            title="Web Development"
            description="Desenvolvemos a espinha dorsal da sua presença online, com tecnologias atuais e funcionalidades robustas."
          >
          </ImageServicesDefault>

          <ImageServicesDefault
            src={hospedagem}
            title="Hospedagem"
            description="Oferecemos serviços de hospedagem confiáveis para manter seu site sempre disponível e eficiente."
          >
          </ImageServicesDefault>

          <ImageServicesDefault
            src={socialMedia}
            title="Social Media"
            description="Potencializamos sua marca nas redes sociais, criando estratégias envolventes para impulsionar sua presença online."
          >
          </ImageServicesDefault>

        </div>
      </section>
     
      <section className="flex items-center justify-center relative w-full bg-bg-request bg-cover bg-no-repeat bg-center">
        <div className="text-center px-[3.5rem] py-[100px] max-w-[1330px] flex flex-col items-center justify-center">
          <h3 className="before:bg-white before:w-[3rem] before:h-[1px] after:bg-white after:w-[3rem] after:h-[1px] flex justify-center items-center gap-[1.5rem] text-[1.3rem] mb-[2rem] font-[300] tabletSM:text-[2rem] tabletMD:text-[2.5rem] laptopLG:text-[4rem]" data-aos="fade-down" data-aos-duration="1000">Vamos solicitar o seu orçamento</h3>
          <h2 className="text-[3.6rem] font-[700] pb-[5rem] tabletSM:text-[5rem] tabletSM:px-[6rem] tabletMD:px-[3rem] laptopSM:text-[7rem]" data-aos="fade-down" data-aos-duration="1000">E garantir o <span className="text-yellow-500">sucesso da sua empresa</span> no mundo digital</h2>

          <ButtonDefault className="text-[1.4rem] text-black bg-yellow-500 px-[1.9rem] py-[1rem] rounded-[5px] font-[600] tabletSM:text-[2rem] tabletMD:text-[2.3rem] laptopLG:text-[2.7rem] laptopLG:px-[3.5rem] border-[1px] border-transparent hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all" target="https://api.whatsapp.com/send/?phone=5585994127582&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0">
            Solicitar orçamento
          </ButtonDefault>
        </div>
      </section>
      <Footer />
    </>
  )
}