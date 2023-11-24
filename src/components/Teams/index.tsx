import Image from "next/image";

import member from "../../assets/member.png";

export function Teams() {
  return (
    <section className="max-w-[1920px] mx-auto text-center py-[4rem]">
      <h2 className="before:bg-white before:w-[3rem] before:h-[1px] after:bg-white after:w-[3rem] after:h-[1px] text-[3.8rem] text-center flex justify-center items-center gap-[1.9rem] laptopSM:text-[6rem]">
        Nossa
      </h2>
      <h3 className="text-[3.8rem] font-bold laptopSM:text-[6rem]">Equipe</h3>

      <div className=" flex justify-center flex-wrap text-start pt-[3rem]">
        <div className="img-teams">
          <Image className="w-full" src={member} alt="" />
          <div className="absolute bottom-[1.5rem] left-[1rem]">
            <h3 className="name">Emanuel Fortes</h3>
            <p className="office">CEO e Desenvolvedor Front-End</p>
          </div>
        </div>

        <div className="img-teams">
          <Image className="w-full" src={member} alt="" />
          <div className="absolute bottom-[1.5rem] left-[1rem]">
            <h3 className="name">Gabriel S.s</h3>
            <p className="office">Desenvolvedor PL</p>
          </div>
        </div>

        <div className="img-teams">
          <Image className="w-full" src={member} alt="" />
          <div  className="absolute bottom-[1.5rem] left-[1rem]">
            <h3 className="name">Daniel Moreno</h3>
            <p className="office">Desenvolvedor PL</p>
          </div>
        </div>

        <div className="img-teams">
          <Image className="w-full" src={member} alt="" />
          <div  className="absolute bottom-[1.5rem] left-[1rem]">
            <h3 className="name">Matheus Macedo</h3>
            <p className="office">Desenvolvedor PL</p>
          </div>
        </div>

        <div className="img-teams">
          <Image className="w-full" src={member} alt="" />
          <div  className="absolute bottom-[1.5rem] left-[1rem]">
            <h3 className="name">Augusto Pontes</h3>
            <p className="office">Desenvolvedor PL</p>
          </div>
        </div>

        <div className="img-teams">
          <Image className="w-full" src={member} alt="" />
          <div  className="absolute bottom-[1.5rem] left-[1rem]">
            <h3 className="name">Emanuel Fprtes</h3>
            <p className="office">CEO e Desenvolvedor Front-End</p>
          </div>
        </div>

        <div className="img-teams">
          <Image className="w-full" src={member} alt="" />
          <div  className="absolute bottom-[1.5rem] left-[1rem]">
            <h3 className="name">Emanuel Fprtes</h3>
            <p className="office">Desenvolvedor PL</p>
          </div>
        </div>

        <div className="img-teams">
          <Image className="w-full" src={member} alt="" />
          <div  className="absolute bottom-[1.5rem] left-[1rem]">
            <h3 className="name">Lais Cristine</h3>
            <p className="office">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
