import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0 md:container md:mx-auto md:px-0 md:gap-8 text-center">
        <div className="bg-[url('/img/garden-green.jpg')] grid gap-4 bg-cover bg-center -mx-4 md:mx-0 min-h-[400px] md:min-h-[700px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-6xl md:text-7xl font-bold px-4 text-white uppercase pt-8">
              Kontakt
            </h1>
          </div>
        </div>

        <p className="text-sm md:text-lg">
          Pokud Vás zajímá více informací nebo si chcete domluvit schůzku,
          neváhejte nás kontaktovat. Rádi Vám pomůžeme s jakýmkoli dotazem či
          přáním.
        </p>

        <p className="text-sm md:text-lg">
          Pomůže Vám k tomu náš kontaktní formulář, případně nás můžete
          kontaktovat na uvedených kontaktech.
        </p>

        <div className="grid gap-4 md:items-start md:gap-8 p-4 hover:shadow-lg rounded-xl">
          <h3 className="text-2xl font-semibold md:text-3xl text-green-700/90 text-center">
            Kontaktní informace
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 md:text-xl p-4 my-4 md:my-0">
            <Link
              href="mailto:zahradyviva@gmail.com"
              className="grid items-center justify-center aspect-square max-h-84 gap-4 border bg-white hover:bg-green-700/10 shadow-md border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl"
            >
              <LuMail className="text-green-700/80 w-10 h-10" />

              <h3 className="text-2xl font-semibold">E-mail</h3>

              <p>Napište nám s jakýmkoli dotazem</p>

              <p className="hover:font-bold hover:text-yellow-700/50 font-semibold text-green-700/90">
                zahradyviva@gmail.com
              </p>
            </Link>

            <Link
              href="tel:+420607037079"
              className="grid items-center justify-center aspect-square max-h-84 gap-4 border bg-white hover:bg-green-700/10 shadow-md border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl"
            >
              <LuPhone className="text-green-700/90 w-10 h-10" />

              <h3 className="text-2xl font-semibold">Telefon</h3>

              <p>Rádi vám zodpovíme vaše dotazy</p>

              <p className="hover:font-bold hover:text-yellow-700/50 font-semibold text-green-700/90">
                +420 607 037 079
              </p>
            </Link>

            <Link
              href="tel:+420607037079"
              className="grid items-center justify-center aspect-square max-h-84 gap-4 border bg-white hover:bg-green-700/10 shadow-md border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl"
            >
              <LuMapPin className="text-green-700/90 w-10 h-10" />

              <h3 className="text-2xl font-semibold">Lokalita</h3>

              <p>Působíme především v těchto oblastech</p>

              <p className="hover:font-bold hover:text-yellow-700/50 font-semibold text-green-700/90">
                Severní a střední Čechy, Celá ČR
              </p>
            </Link>
          </div>
          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
