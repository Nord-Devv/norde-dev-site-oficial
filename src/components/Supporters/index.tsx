import Image from "next/image";

import empresas from "../../assets/empresas.png"

export function Supporters() {
  return (
    <section className="w-full bg-bg-secundary py-[2rem] my-[3rem] flex justify-center">
        <Image className="max-w-[1200px] w-full px-[3rem]" src={empresas} alt=""/>
    </section>
  )
}

