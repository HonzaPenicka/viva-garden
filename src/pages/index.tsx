import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0">
        <div className="bg-[url('/img/garden.jpg')] grid gap-4 bg-cover bg-bottom -mx-4 min-h-[400px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-5xl font-bold px-4 text-white">
              ZAHRADY <br />
              ViVa
            </h1>
          </div>
        </div>

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

        <h2 className="text-xl font-semibold">Naše filozofie</h2>

        <p className="text-sm">
          Věříme, že zahrada není jen kus pozemku, o který se musíte starat, ale
          prodloužení vašeho domova. Proto k práci přistupujeme s respektem,
          pečlivostí a osobním nasazením. Každý projekt je pro nás příležitostí
          vytvořit místo, které bude odrážet vaši osobnost a přinášet radost po
          mnoho let.
        </p>

        <h2 className="text-xl font-semibold">
          Zahrady ViVa – tradice, zkušenost a péče, která má kořeny.
        </h2>

        <Button />
      </main>

      <Footer />
    </>
  );
}
