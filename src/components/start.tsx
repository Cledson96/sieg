import Image from "next/image";
import corteImg from "../../public/img/bg-corte.png";
export default function Start() {
  return (
    <div className="bg-topo" id="inicio">
      <div className="topo">
        <h1>NOVOS HORIZONTES PARA SEU NEGÓCIO</h1>
      </div>
      <Image src={corteImg} alt="Corte" />
    </div>
  );
}
