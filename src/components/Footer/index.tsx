import Image from "next/image";
import LinkNext from "next/link";

import { Link } from "react-scroll";

import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import logoFooter from "../../assets/logo-footer.png";
import logoDesktop from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-bg-secundary py-[5rem] tabletMD:py-[10rem]">
      <div className="max-w-[1440px] mx-auto pl-[4.2rem] flex flex-col tabletMD:flex-row tabletMD:items-center tabletMD:justify-between tabletMD:px-[2rem] laptopSM:px-[10rem]">
        <LinkNext
          href="#"
          className="mb-[3rem] tabletMD:mb-0 laptopLG:hidden laptopLG:absolute"
        >
          <Image src={logoFooter} alt="logo" />
        </LinkNext>
        <LinkNext href="#" className="hidden laptopLG:block w-[342px]">
          <Image src={logoDesktop} alt="" />
        </LinkNext>
        <nav>
          <ul className="text-[1.8rem] font-[600] leading-[3.3rem] flex flex-col justify-around gap-[1.6rem] tabletMD:flex-row tabletMD:gap-[3.5rem] laptopSM:gap-[5rem]">
            <li className="cursor-pointer text-white-400 links">
              <Link
                to="quem-somos"
                spy={true}
                duration={100}
                smooth={true}
                offset={-240}
              >
                Quem somos
              </Link>
            </li>
        
            <li className="cursor-pointer text-white-400 links">
              <Link
                to="inicio"
                spy={true}
                duration={100}
                smooth={true}
                offset={-240}
              >
                © NORDDEV
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-[2.1rem] mt-[5rem] tabletMD:mt-0 tabletMD:gap-[1.5rem]">
          <LinkNext
            href="https://www.linkedin.com/company/93205029/admin/feed/posts/"
            target="true"
          >
            <BsLinkedin className="social" />
          </LinkNext>
          <LinkNext href="https://www.instagram.com/nord_devv/" target="true">
            <BsInstagram className="social" />
          </LinkNext>
          <LinkNext href="https://github.com/Nord-Devv" target="true">
            <BsGithub className="social" />
          </LinkNext>
          <LinkNext
            href="https://api.whatsapp.com/send/?phone=5585992004530&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0"
            target="true"
          >
            <BsWhatsapp className="social" />
          </LinkNext>
        </div>
      </div>
    </footer>
  );
}
