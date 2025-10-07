import Link from "next/link";
import { useCallback, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  return (
    <>
      <header className="flex justify-between items-center p-4 text-3xl font-bold border-b-2 border-yellow-700 bg-white relative overflow-visible">
        <Link href="/" className="w-32">
          <img src="/logo.png" />
        </Link>
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <GiHamburgerMenu className="text-black" />
        </button>

        {isMenuOpen && (
          <nav className="absolute top-full z-10 left-0 right-0 bg-white border-2 border-green-500 p-4 font-semibold text-xl w-full text-black">
            <ul className="flex flex-col gap-4 text-right uppercase">
              <li className="hover:decoration-green-500 hover:underline hover:underline-offset-4">
                <a href="/">Domů</a>
              </li>

              <li className="hover:decoration-green-500 hover:underline hover:underline-offset-4">
                <a href="/about">O nás</a>
              </li>

              <li className="hover:decoration-green-500 hover:underline hover:underline-offset-4">
                <a href="/services">Služby</a>
              </li>

              <li className="hover:decoration-green-500 hover:underline hover:underline-offset-4">
                <a href="/references">Reference</a>
              </li>

              <li className="hover:decoration-green-500 hover:underline hover:underline-offset-4">
                <a href="/contact">Kontakt</a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="grid p-4 gap-4 bg-[url('/img/garden.jpg')] bg-cover bg-center">
        <h1 className="text-4xl font-bold">Zahrady ViVa</h1>

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
      </main>

      <footer className="grid md:flex p-4 gap-4 justify-center md:justify-around items-center">
        <Link href="/" className="w-56">
          <img src="/logo.png" />
        </Link>

        <div className="flex gap-8">
          <div className="flex flex-col gap-4 font-bold">
            <a href="/">Domů</a>
            <a href="/about">O nás</a>
          </div>

          <div className="flex flex-col gap-4 font-bold">
            <a href="/services">Služby</a>
            <a href="/references">Reference</a>
          </div>

          <div className="flex flex-col gap-4 font-bold">
            <a href="/contact">Kontakt</a>
          </div>
        </div>

        <div className="flex gap-8 text-4xl justify-center">
          <Link
            href="https://www.youtube.com"
            target="_blank"
            className="hover:text-green-500"
          >
            <AiOutlineYoutube />
          </Link>

          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-green-500"
          >
            <AiOutlineInstagram />
          </Link>

          <Link href="tel:+420607037079" className="hover:text-green-500">
            <AiOutlinePhone />
          </Link>

          <Link
            href="mailto:zahradyviva@gmail.com"
            className="hover:text-green-500"
          >
            <AiOutlineMail />
          </Link>
        </div>
      </footer>
    </>
  );
}
