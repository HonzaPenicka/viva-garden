import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { LuLeaf } from "react-icons/lu";

export default function About() {
  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0">
        <div className="bg-[url('/img/garden-green.jpg')] grid gap-4 bg-cover bg-center -mx-4 min-h-[400px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-7xl font-bold px-4 text-white">O nás</h1>
          </div>
        </div>

        <h2 className="text-4xl font-bold">Zahrady ViVa</h2>

        <h2 className="text-xl font-semibold">
          Rodinná tradice zakořeněná v praxi
        </h2>

        <p className="text-sm">
          Zahrady ViVa jsou rodinnou firmou, která vyrostla z celoživotních
          zkušeností otce – zahradníka, jenž se své profesi věnuje celý život.
          Na jeho práci a znalostech dnes navazuje mladší generace s novou
          energií a moderním přístupem. Společně tak spojujeme poctivou
          řemeslnou práci s aktuálními postupy a nabízíme komplexní služby pro
          vaši zahradu i okolí domu.
        </p>

        <p className="text-sm">
          Naším posláním je, aby váš dům i zahrada byly nejen krásné, ale i
          dlouhodobě udržované a funkční.
        </p>

        <p className="text-sm">
          Specializujeme se nejen na údržbu zahrad samotných, ale nabízíme také
          služby zámečnictví jako vrata, brány, ploty, zábradlí, opravy
          funkčních prvků domů, opravu zahradní techniky nebo stavební práce
          různého charakteru.
        </p>

        <h2 className="text-lg font-semibold">Naše filozofie</h2>

        <p className="text-sm">
          Věříme, že zahrada není jen kus pozemku, o který se musíte starat, ale
          prodloužení vašeho domova. Proto k práci přistupujeme s respektem,
          pečlivostí a osobním nasazením. Každý projekt je pro nás příležitostí
          vytvořit místo, které bude odrážet vaši osobnost a přinášet radost po
          mnoho let.
        </p>

        <h3 className="text-lg font-semibold ">
          Zahrady ViVa – tradice, zkušenost a péče, která má kořeny.
        </h3>

        <div className="flex justify-center">
          <button className="p-4 rounded-xl border-green-600 font-bold my-4 border-2 hover:border-yellow-700 hover:bg-green-600 hover:text-white action:border-yellow-700 action:bg-green-600 action:text-white transition delay-50 duration-300">
            Kontaktujte nás
          </button>
        </div>

        <h2 className="text-xl font-semibold">Naše vize a hodnoty</h2>

        <div className="grid gap-2">
          <div className="flex gap-2 items-start">
            <LuLeaf className="w-4 h-4 flex-shrink-0" />
            <p className="flex-1 text-sm">
              Komplexní přístup: Spojujeme zahradnickou odbornost s technickým
              know-how, abychom nabízeli ucelené a inovativní řešení pro každého
              zákazníka.
            </p>
          </div>

          <div className="flex gap-2 items-start">
            <LuLeaf className="w-4 h-4 flex-shrink-0" />
            <p className="flex-1 text-sm">
              Kvalita a preciznost: Každý projekt realizujeme s důrazem na
              detail, dlouhodobou udržitelnost a individuální potřeby klientů.
            </p>
          </div>

          <div className="flex gap-2 items-start">
            <LuLeaf className="w-4 h-4 flex-shrink-0" />
            <p className="flex-1 text-sm">
              Osobní přístup: Jako rodinná firma klademe důraz na férové
              jednání, otevřenou komunikaci a vzájemnou důvěru.
            </p>
          </div>

          <div className="flex gap-2 items-start">
            <LuLeaf className="w-4 h-4 flex-shrink-0" />
            <p className="flex-1 text-sm">
              Inspirace ze zahraničí: Naše zkušenosti z Česka i Švýcarska nám
              umožňují přinášet moderní trendy a efektivní řešení.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
