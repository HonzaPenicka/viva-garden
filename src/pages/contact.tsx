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

        <div className="grid gap-4 md:grid-cols-2 md:items-start md:gap-8">
          <div className="grid gap-4 md:text-xl border rounded-xl p-4 my-4 md:my-0 bg-green-700/10 shadow-md border-green-100 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-left md:text-3xl text-green-700/90">
              Kontaktní informace
            </h3>

            <div className="flex gap-4 border bg-white shadow-md border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl items-center">
              <LuMail className="text-green-700/80 w-6 h-6" />

              <Link
                href="mailto:zahradyviva@gmail.com"
                className="hover:font-bold hover:text-green-700/90"
              >
                zahradyviva@gmail.com
              </Link>
            </div>

            <div className="flex gap-4 border bg-white shadow-md border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl items-center">
              <LuPhone className="text-green-700/90 w-6 h-6" />

              <Link
                href="tel:+420607037079"
                className="hover:font-bold hover:text-green-700/90"
              >
                +420 607 037 079
              </Link>
            </div>

            <div className="flex gap-4 p-4 rounded-xl items-center">
              <LuMapPin className="text-green-700/90 w-6 h-6" />
              <p>Celá ČR</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
