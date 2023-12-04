import Image from "next/image";
import logo from "../../public/img/sieg.svg";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-padraoFooter text-white px-10  w-full" id="Contato">
      <div className="flex-col  w-full flex sm:columns-2 sm:flex-row ">
        <div className="w-full sm:w-4/6 py-10">
          <div className="columns-2 ">
            <div className="h-80">
              <Image className="w-auto max-h-9 mb-10" src={logo} alt="Sieg" />
              <ul className="font-normal text-white ">
                <li className="mb-2 flex items-center	">
                  <FaLocationDot className="text-white text-xl mr-2" />
                  Rua José Merhy 1266, Curitiba - PR
                </li>
                <li className="mb-2 flex items-center	">
                  <BsFillTelephoneFill className="text-white text-lg mr-2" />
                  (41) 3019-7434
                </li>
                <li className="flex items-center	">
                  <IoIosMail className="text-white text-2xl mr-2" />
                  contato@sieg-ad.com.br
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-medium mb-4">Menu</h1>
              <ul className="font-normal text-white ">
                <li className="mb-1 cursor-pointer">
                  <a href="#inicio">Início</a>
                </li>
                <li className="mb-1 cursor-pointer">
                  <a href="#Sieg">A Sieg</a>
                </li>
                <li className="mb-1 cursor-pointer">
                  <a href="#Atuacao">Atuação</a>
                </li>
                <li className="mb-1 cursor-pointer">
                  <a href="#Atas">Atas</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#Contato">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/6 py-10 bg-form">
          <form className="flex flex-col px-7 ">
            <h1 className="font-medium mb-4 text-3xl">Formulário de contato</h1>
            <input
              type="text"
              className="bg-white border-2 border-gray-300 rounded-md p-2 mb-3 text-black"
              placeholder="Nome"
              name="nome"
              required
            />
            <input
              type="text"
              className="bg-white border-2 border-gray-300 rounded-md p-2 mb-3 text-black"
              placeholder="Empresa"
              name="empresa"
              required
            />
            <input
              type="email"
              className="bg-white border-2 border-gray-300 rounded-md p-2 mb-3 text-black"
              placeholder="Email"
              name="email"
              required
            />
            <input
              type="number"
              className="bg-white border-2 border-gray-300 rounded-md p-2 mb-3 text-black"
              placeholder="Telefone com ddd"
              name="telefone"
              required
            />
            <textarea
              className="bg-white border-2 border-gray-300 rounded-md p-2 resize-none text-black"
              placeholder="Escreva sua mensagem ..."
              rows={6}
            ></textarea>
            <div className="flex items-center mt-5">
              <input
                type="checkbox"
                id="politicasPrivacidade"
                className="form-checkbox h-5 w-5 text-blue-500"
                required
              />
              <label htmlFor="politicasPrivacidade" className="ml-2">
                Eu entendo e aceito as Políticas de Privacidade.
              </label>
            </div>
            <button
              type="submit"
              className="w-44 mt-8 flex items-center	 justify-center	h-10 bg-gray-200 text-gray-700 rounded-md p-3 border-2 border-gray-300 hover:bg-gray-300 focus:outline-none focus:border-blue-500"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
