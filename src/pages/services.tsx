import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { useState } from "react";
import { Button } from "@/components/button";

const servicesData = {
  "Údržba zahradní zeleně": [
    "Sekání trávy",
    "Stříhání živých plotů",
    "Péče o stromy a keře",
    "Vertikutace trávníku",
  ],
  "Zakládání zahrad": [
    "Návrh zahrady",
    "Výsadba rostlin",
    "Založení trávníku",
    "Instalace závlahových systémů",
  ],
  "Tvorba přírodních jezírek": [
    "Návrh jezírka",
    "Realizace",
    "Údržba",
    "Filtrace",
  ],
  "Terénní úpravy": [
    "Modelace terénu",
    "Odvodnění",
    "Zpevněné plochy",
    "Schody a opěrné zdi",
  ],
  Oplocení: ["Pletivové ploty", "Kované ploty", "Živé ploty", "Opravy plotů"],
  "Automatizované sekání": [
    "Instalace robotických sekaček",
    "Servis",
    "Vymezení plochy",
    "Optimalizace provozu",
  ],
  "Úklid a vyklízení": [
    "Vyklízení zahrad",
    "Odvoz bioodpadu",
    "Čištění ploch",
    "Zimní údržba",
  ],
  "Spolupráce s realitními kancelářemi": [
    "Příprava nemovitosti",
    "Údržba pozemků",
    "Pravidelný servis",
    "Konzultace",
  ],
  "Převoz materiálu": [
    "Dovoz substrátu",
    "Odvoz odpadu",
    "Přeprava rostlin",
    "Manipulace s těžkými břemeny",
  ],
  "Zakázková kovovýroba": [
    "Brány a branky",
    "Zábradlí",
    "Pergoly",
    "Kovové konstrukce",
  ],
  "Stavební práce": [
    "Drobné stavební úpravy",
    "Základové konstrukce",
    "Dlažby a obrubníky",
    "Zídky a tarasy",
  ],
};

export default function Services() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0 md:container md:mx-auto md:px-0 md:gap-8">
        <div className="bg-[url('/img/services.webp')] grid gap-4 bg-cover bg-top-left -mx-4 md:mx-0 min-h-[400px] md:min-h-[700px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-5xl md:text-6xl font-bold px-4 text-white uppercase">
              Nabízené <br /> služby
            </h1>
          </div>
        </div>

        <div className="text-sm pb-4 md:text-lg md:text-justify">
          Zajišťujeme široké spektrum služeb zaměřených na realizaci, údržbu i
          technické zajištění zahrad a přilehlých prostor.
          <br />
          <br />
          <p className="font-semibold md:text-lg md:text-justify">
            Níže naleznete seznam služeb, které poskytujeme.
          </p>
        </div>

        <div className="grid gap-4 md:gap-8 md:grid-cols-3">
          {Object.entries(servicesData).map(([service, options]) => (
            <div key={service} className="relative">
              <div
                className="text-sm md:text-lg text-left border-2 p-4 md:p-8 rounded-xl border-green-600/50 bg-green-50 hover:border-yellow-700/50 active:border-yellow-700/50 focus:border-yellow-700/50 cursor-pointer"
                onClick={() =>
                  setOpenDropdown(openDropdown === service ? null : service)
                }
              >
                <button className="w-full text-left flex justify-between items-center">
                  {service}
                  <span
                    className={`transition-transform duration-200 ${
                      openDropdown === service ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
              </div>

              {openDropdown === service && (
                <div className="absolute z-10 w-full mt-2 bg-yellow-50 border-2 border-green-600 rounded-xl text-sm md:text-lg">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="p-2 px-4 md:px-8 hover:bg-green-50 cursor-pointer rounded-xl"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold md:text-xl md:text-justify">
          ZAHRADY VIVA – tradice, zkušenost a péče, která má kořeny.
        </h3>

        <Button />
      </main>

      <Footer />
    </>
  );
}
