import { ReactNode } from "react";

interface SobreBoxProps {
  icon: ReactNode;
  tittle: string;
  text: string;
}

export default function SobreBox({ icon, tittle, text }: SobreBoxProps) {
  return (
    <>
      <div className="bg-transparent p-4 cursor-pointer hover:bg-padraoHover">
        <div className="flex items-center justify-center w-full">{icon}</div>
        <h1 className="text-center text-gray-500 text-lg pb-2">{tittle}</h1>
        <p className="text-center text-black-100 font-normal">{text}</p>
      </div>
    </>
  );
}
