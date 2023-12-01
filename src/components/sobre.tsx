import SobreBox from "./sobre-box";
import { itens } from "./itensSobre";
export default function Sobre() {
  return (
    <>
      <section className="bg-white w-full">
        <div className="container mx-auto px-10 py-10 bg-white">
          <h1 className="text-left text-gray-700 text-4xl ">A SIEG</h1>
          <div className="border-b border-gray-200 h-2 mb-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {itens.map((item, index) => {
              return (
                <SobreBox
                  key={index}
                  icon={item.icon}
                  tittle={item.tittle}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
