"use client";

import { useState } from "react";

import Tabela from "@/app/tables/tabela";

export default function Atas() {
  const [filtro, setFiltro] = useState("Computadores");
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto px-10 py-10 bg-white">
        <h1 className="text-left text-gray-700 text-4xl ">ATAS</h1>
        <div className="border-b border-gray-400 h-2 mb-3"></div>
        <ul className="flex place-content-between w-full py-5 font-normal text-gray-600 text-base cursor-pointer px-3">
          <li
            className={`hover:bg-padraoHover ${
              filtro === "Computadores" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setFiltro("Computadores")}
          >
            COMPUTADORES
          </li>
          <li
            className={`hover:bg-padraoHover ${
              filtro === "Lousa" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setFiltro("Lousa")}
          >
            LOUSA
          </li>
          <li
            className={`hover:bg-padraoHover ${
              filtro === "Interativo" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setFiltro("Interativo")}
          >
            SOLUÇÕES INTERATIVAS
          </li>
          <li
            className={`hover:bg-padraoHover ${
              filtro === "Monitores" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setFiltro("Monitores")}
          >
            MONITORES
          </li>
          <li
            className={`hover:bg-padraoHover ${
              filtro === "Nobreak" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setFiltro("Nobreak")}
          >
            NOBREAK
          </li>
          <li
            className={`hover:bg-padraoHover ${
              filtro === "Scanner" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setFiltro("Scanner")}
          >
            SCANNER
          </li>
          <li
            className={`hover:bg-padraoHover ${
              filtro === "Totem" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setFiltro("Totem")}
          >
            TOTEM
          </li>
        </ul>
        <div className="border-b border-gray-400 h-2 mb-3"></div>
        <Tabela filtro={filtro} />
      </div>
    </section>
  );
}
