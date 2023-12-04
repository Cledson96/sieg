import Image from "next/image";
import fundo from "../../public/img/bg-atuacao.png";
import fundo2 from "../../public/img/bg-atuacao2.png";
import corteImg from "../../public/img/bg-corte.png";
export default function Atuacao() {
  return (
    <section className="bg-white w-full relative" id="Atuacao">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 img-full">
        <Image src={fundo} alt="fundo" />
        <div className="relative pb-16">
          <Image className="absolute top-0 left-0" src={fundo2} alt="fundo" />
          <div
            style={{ position: "inherit" }}
            className="container py-10 px-14 mt-28"
          >
            <h1 className="text-gray-600 text-4xl">ATUAÇÃO</h1>
            <div className="border-b border-gray-500 h-2 mb-3"></div>
            <h2 className="text-orange-500 text-2xl">
              Estamos preparados para trabalhar em todos os ramos de negócio
            </h2>
            <p className="text-gray-600 text-base mt-5 font-normal">
              Conheça as principais áreas em que já atuamos:
            </p>
            <ul className="list-disc pl-6 pt-5 font-normal text-gray-600 text-base">
              <li>Comunicação visual</li>
              <li>Design gráfico</li>
              <li>Design de produto</li>
              <li>Publicidade</li>
              <li>Embalagens</li>
              <li>Eletroeletrônico</li>
              <li>Engenharia de materiais</li>
              <li>Engenharia de serviços</li>
              <li>Equipamentos/ferramentas</li>
              <li>Móveis e mobiliários</li>
              <li>Prestações e serviços</li>
              <li>Sistemas de energia</li>
              <li>Energias renováveis</li>
              <li>Service desk</li>
              <li>Infraestrutura de redes</li>
              <li>Equipamentos de informática</li>
              <li>Segurança de dados</li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        className="absolute bottom-0 left-0 w-full"
        src={corteImg}
        alt="Corte"
      />
    </section>
  );
}
