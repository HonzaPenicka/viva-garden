import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { useState } from "react";
import { Button } from "@/components/button";

import {
  LuLeaf,
  LuHammer,
  LuFence,
  LuDroplets,
  LuWrench,
} from "react-icons/lu";
import Link from "next/link";

const servicesData = [
  {
    icon: LuLeaf,
    title: "Údržba zahradní zeleně",
    items: [
      "Sekání trávy",
      "Stříhání živých plotů",
      "Péče o stromy a keře",
      "Vertikutace trávníku",
    ],
  },
  {
    icon: LuDroplets,
    title: "Zakládání zahrad",
    items: ["Návrh zahrady", "Výsadba rostlin", "Založení trávníku", "IZS"],
  },
  {
    icon: LuDroplets,
    title: "Tvorba přírodních jezírek",
    items: ["Návrh jezírka", "Realizace", "Údržba", "Filtrace"],
  },
  {
    icon: LuHammer,
    title: "Terénní úpravy",
    items: ["Modelace terénu", "Odvodnění", "Zpevněné plochy", "Opěrné zdi"],
  },
  {
    icon: LuFence,
    title: "Oplocení",
    items: ["Pletivové ploty", "Kované ploty", "Živé ploty", "Opravy plotů"],
  },
  {
    icon: LuWrench,
    title: "Zakázková kovovýroba",
    items: ["Brány a branky", "Zábradlí", "Pergoly", "Konstrukce"],
  },
];

export default function Services() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0 md:container md:mx-auto md:px-0 md:gap-8 text-center">
        <div className="bg-[url('/img/services.webp')] text-white grid gap-4 bg-cover bg-top-left -mx-4 md:mx-0 min-h-[400px] md:min-h-[700px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-6xl md:text-7xl font-bold px-4 uppercase pt-8">
              Nabízené <br /> služby
            </h1>
          </div>
        </div>

        <div className="text-sm pb-4 md:text-lg mt-4">
          Zajišťujeme široké spektrum služeb zaměřených na realizaci, údržbu i
          technické zajištění zahrad a přilehlých prostor.
          <br />
          <br />
          <p className="font-semibold md:text-lg">
            Níže naleznete seznam služeb, které poskytujeme.
          </p>
        </div>

        <section className="grid gap-4 md:gap-8 md:grid-cols-2">
          {servicesData.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="p-4 rounded-2xl bg-white shadow-md border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4 transition-all duration-300 ease-in-out hover:scale-105">
                <Icon className="text-green-700/90 w-6 h-6" />

                <h3 className="text-lg font-semibold text-green-700/90">
                  {title}
                </h3>
              </div>

              <div className="text-sm grid grid-cols-2 gap-2">
                {items.map((item) => (
                  <button key={item}>
                    <Link
                      href=""
                      className="border p-2 rounded-xl shadow-md border-green-100 hover:shadow-lg hover:bg-green-700/20 w-full block text-center transition-all duration-300 ease-in-out hover:scale-105"
                    >
                      {item}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        <h3 className="text-xl font-semibold md:text-3xl text-green-700/90">
          Tradice, zkušenost a péče, která má kořeny.
        </h3>

        <Button className="my-4" />
      </main>

      <Footer />
    </>
  );
}
