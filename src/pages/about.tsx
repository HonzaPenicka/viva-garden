import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { LuLeaf } from "react-icons/lu";
import { Button } from "@/components/button";

export default function About() {
  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0 md:container md:mx-auto md:gap-8 md:px-0 text-center">
        <div className="bg-[url('/img/garden-green.jpg')] grid gap-4 bg-cover bg-center -mx-4 md:mx-0 min-h-[400px] md:min-h-[700px]">
          <div className="flex flex-col gap-8 justify-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold px-4 uppercase pt-8">
              O nás
            </h1>

            <h2 className="text-xl font-semibold md:text-2xl md:w-2/3">
              Rodinná tradice zakořeněná v praxi
            </h2>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold md:w-2/3 mt-4">
          Zahrady ViVa
        </h2>

        <p className="text-sm md:text-lg md:w-2/3 md:text-justify">
          Zahrady ViVa jsou rodinnou firmou, která vyrostla z celoživotních
          zkušeností otce – zahradníka, jenž se své profesi věnuje celý život.
          Na jeho práci a znalostech dnes navazuje mladší generace s novou
          energií a moderním přístupem. Společně tak spojujeme poctivou
          řemeslnou práci s aktuálními postupy a nabízíme komplexní služby pro
          vaši zahradu i okolí domu.
        </p>

        <p className="text-sm md:text-lg md:w-2/3 md:text-justify">
          Naším posláním je, aby váš dům i zahrada byly nejen krásné, ale i
          dlouhodobě udržované a funkční.
        </p>

        <p className="text-sm md:text-lg md:w-2/3 md:text-justify">
          Specializujeme se nejen na údržbu zahrad samotných, ale nabízíme také
          služby zámečnictví jako vrata, brány, ploty, zábradlí, opravy
          funkčních prvků domů, opravu zahradní techniky nebo stavební práce
          různého charakteru.
        </p>

        <h2 className="text-3xl font-semibold md:w-2/3 md:text-4xl my-4">
          Naše filozofie 🌳
        </h2>

        <p className="text-sm md:text-lg md:w-2/3 md:text-justify">
          Věříme, že zahrada není jen kus pozemku, o který se musíte starat, ale
          prodloužení vašeho domova. Proto k práci přistupujeme s respektem,
          pečlivostí a osobním nasazením. Každý projekt je pro nás příležitostí
          vytvořit místo, které bude odrážet vaši osobnost a přinášet radost po
          mnoho let.
        </p>

        <h3 className="text-2xl font-semibold  md:w-2/3 md:text-3xl mt-4 text-green-700/90">
          Tradice, zkušenost a péče, která má kořeny.
        </h3>

        <h2 className="text-3xl md:text-4xl font-semibold md:w-2/3 my-4">
          Naše vize a hodnoty
        </h2>

        <div className="grid gap-2">
          <div className="flex gap-4 items-start">
            <LuLeaf className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0 text-green-700/90" />
            <p className="flex-1 text-sm md:text-lg md:w-2/3 text-justify">
              Komplexní přístup: Spojujeme zahradnickou odbornost s technickým
              know-how, abychom nabízeli ucelené a inovativní řešení pro každého
              zákazníka.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <LuLeaf className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0 text-green-700/90" />
            <p className="flex-1 text-sm md:text-lg md:w-2/3 text-justify">
              Kvalita a preciznost: Každý projekt realizujeme s důrazem na
              detail, dlouhodobou udržitelnost a individuální potřeby klientů.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <LuLeaf className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0 text-green-700/90" />
            <p className="flex-1 text-sm md:text-lg md:w-2/3 text-justify">
              Osobní přístup: Jako rodinná firma klademe důraz na férové
              jednání, otevřenou komunikaci a vzájemnou důvěru.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <LuLeaf className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0 text-green-700/90" />
            <p className="flex-1 text-sm md:text-lg md:w-2/3 text-justify">
              Inspirace ze zahraničí: Naše zkušenosti z Česka i Švýcarska nám
              umožňují přinášet moderní trendy a efektivní řešení.
            </p>
          </div>
        </div>
        <Button className="my-4" />
      </main>

      <Footer />
    </>
  );
}
