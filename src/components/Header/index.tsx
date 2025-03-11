import { Link } from "react-scroll";

import LinkNext from "next/link";

import Image from "next/image";

import logo from "../../assets/logo.png";

import { ButtonDefault } from "../ButtonDefault";

export function Header() {
  return (
    <header className="bg-bg-secundary sticky top-0 w-full z-10">
      <div className="max-w-[1440px] mx-auto px-[1.4rem] pb-[1.5rem] flex flex-col tabletSM:px-[3rem] tabletLG:flex-row tabletLG:pb-0 tabletLG:justify-between tabletLG:items-center ">
        <LinkNext className="links" href="/">
          <Image
            src={logo}
            alt=""
            className="w-[25rem] py-[4.6rem] px-[1.4rem] "
          />
        </LinkNext>

        <nav className="max-w-full px-[1.4rem]">
          <ul className="text-white-400 flex items-center justify-between text-[1.3rem] tabletSM:text-[1.8rem] tabletLG:gap-[6rem]">
            <li >
              <Link
                className="links"
                to="inicio"
                spy={true}
                duration={100}
                smooth={true}
                offset={-240}
              >
                Início
              </Link>
            </li>
            <li >
              <Link
                className="links"
                to="quem-somos"
                spy={true}
                duration={100}
                smooth={true}
                offset={-240}
              >
                Quem somos?
              </Link>
            </li>
            {/* <li className={menuActive == "projetos" ? "active" : "links"}>
              <Link
                onClick={() => setMenuActive("projetos")}
                href={"#projetos"}
              >
                Projetos
              </Link>
            </li> */}
            <li >
              <Link
                className="links"
                to="servicos"
                spy={true}
                duration={100}
                smooth={true}
                offset={-200}
              >
                Serviços
              </Link>
            </li>
          </ul>
        </nav>

        <ButtonDefault className="hidden bg-yellow-500 text-black border-[1px] border-transparent px-[21px] py-[7px] rounded-[6px] text-[1.8rem] laptopMD:block hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all
    links" target="https://api.whatsapp.com/send/?phone=558592004530&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0" >
          Solicite um orçamento
        </ButtonDefault>
      </div>
    </header>
  );
}
