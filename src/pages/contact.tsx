import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0 md:container md:mx-auto md:px-0 md:gap-8 text-justify lg:text-center">
        <div className="bg-[url('/img/garden-green.jpg')] grid gap-4 bg-cover bg-center -mx-4 md:mx-0 min-h-[400px] md:min-h-[700px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-6xl md:text-7xl font-bold px-4 text-white uppercase pt-8 text-center">
              Kontakt
            </h1>
          </div>
        </div>

        <p className="text-sm md:text-lg mt-4">
          Pokud Vás zajímá více informací nebo si chcete domluvit schůzku,
          neváhejte nás kontaktovat. Rádi Vám pomůžeme s jakýmkoli dotazem či
          přáním.
        </p>

        <p className="text-sm md:text-lg">
          Pomůže Vám k tomu náš kontaktní formulář, případně nás můžete
          kontaktovat na uvedených kontaktech.
        </p>

        <div className="grid gap-4 md:items-start md:gap-8 p-4">
          <h3 className="text-3xl font-semibold md:text-3xl text-green-700/90 text-center">
            Kontaktní informace
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 md:text-xl p-4 my-4 md:my-0">
            <Link
              href="mailto:zahradyviva@gmail.com"
              className="grid items-center text-center justify-center w-full aspect-square max-h-84 gap-4 border bg-white hover:bg-green-700/10 shadow-md border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl"
            >
              <div className="flex justify-center items-center">
                <LuMail className="text-green-700/80 w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold">E-mail</h3>

              <p className="text-sm md:text-lg">
                Napište nám s jakýmkoli <br />
                dotazem
              </p>

              <p className="hover:font-bold hover:text-yellow-700/50 font-semibold text-green-700/90">
                zahradyviva@gmail.com
              </p>
            </Link>

            <Link
              href="tel:+420607037079"
              className="grid items-center text-center justify-center w-full aspect-square max-h-84 gap-4 border bg-white hover:bg-green-700/10 shadow-md border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl"
            >
              <div className="flex justify-center items-center">
                <LuPhone className="text-green-700/90 w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold">Telefon</h3>

              <p className="text-sm md:text-lg">
                Rádi vám zodpovíme vaše <br />
                dotazy
              </p>

              <p className="hover:font-bold hover:text-yellow-700/50 font-semibold text-green-700/90">
                +420 607 037 079
              </p>
            </Link>

            <Link
              href="tel:+420607037079"
              className="grid items-center text-center justify-center w-full aspect-square max-h-84 gap-4 border bg-white hover:bg-green-700/10 shadow-md border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl"
            >
              <div className="flex justify-center items-center">
                <LuMapPin className="text-green-700/90 w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold">Lokalita</h3>

              <p className="text-sm md:text-lg">
                Působíme především v těchto oblastech
              </p>

              <p className="hover:font-bold hover:text-yellow-700/50 font-semibold text-green-700/90">
                Severní a střední Čechy, Celá ČR
              </p>
            </Link>
          </div>
          <ContactForm />
        </div>

        <div className="grid gap-4 md:items-start md:gap-8 xl:px-48">
          <h3 className="text-2xl font-semibold md:text-3xl text-center">
            Často kladené dotazy
          </h3>

          <p className="text-sm text-center md:text-lg mb-4">
            Odpovědi na nejčastější otázky našich klientů
          </p>

          <div className="grid gap-4 md:gap-8 md:text-xl text-justify">
            <div className="grid gap-4 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 mx-">
              <h3 className="text-xl text-left font-semibold">
                Jak dlouho trvá realizace zahrady?
              </h3>

              <p className="text-sm md:text-lg">
                Délka realizace závisí na velikosti a složitosti projektu.
                Jednoduchá zahrada může být hotová za několik dní, komplexní
                projekt může trvat několik týdnů až měsíců. Přesnou dobu vám
                sdělíme po konzultaci.
              </p>
            </div>

            <div className="grid gap-4 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 mx-">
              <h3 className="text-xl text-left font-semibold">
                Jaké jsou ceny vašich služeb?
              </h3>

              <p className="text-sm md:text-lg">
                Ceny se odvíjejí od rozsahu a náročnosti projektu. Po nezávazné
                konzultaci vám připravíme detailní cenovou kalkulaci přesně na
                míru vašim potřebám a rozpočtu.
              </p>
            </div>

            <div className="grid gap-4 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 mx-">
              <h3 className="text-xl text-left font-semibold">
                Poskytujete záruku na realizované práce?
              </h3>

              <p className="text-sm md:text-lg">
                Ano, na všechny naše práce poskytujeme záruku. Délka záruky se
                liší podle typu služby a použitých materiálů. Rádi vám
                poskytneme detailní informace při osobní konzultaci.
              </p>
            </div>

            <div className="mb-4 grid gap-4 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 mx-">
              <h3 className="text-xl text-left font-semibold">
                Pracujete i v zimních měsících?
              </h3>

              <p className="text-sm md:text-lg">
                Některé práce jako je návrh zahrady, konzultace nebo příprava
                projektu mohou probíhat i v zimě. Realizační práce provádíme
                především v jarních a letních měsících, kdy jsou pro to nejlepší
                podmínky.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
