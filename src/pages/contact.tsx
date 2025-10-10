import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0 md:container md:mx-auto md:px-0 md:gap-8">
        <div className="bg-[url('/img/garden-green.jpg')] grid gap-4 bg-cover bg-center -mx-4 md:mx-0 min-h-[400px] md:min-h-[700px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-5xl md:text-6xl font-bold px-4 text-white uppercase">
              Kontaktujte <br /> nás
            </h1>
          </div>
        </div>

        <h3 className="text-lg font-semibold md:text-xl md:text-justify">
          ZAHRADY VIVA – tradice, zkušenost a péče, která má kořeny.
        </h3>

        <p className="text-sm md:text-lg md:text-justify">
          Pokud Vás zajímá více informací nebo si chcete domluvit schůzku,
          neváhejte nás kontaktovat. Rádi Vám pomůžeme s jakýmkoli dotazem či
          přáním.
        </p>

        <p className="text-sm md:text-lg md:text-justify">
          Pomůže Vám k tomu náš kontaktní formulář, případně nás můžete
          kontaktovat na uvedených kontaktech.
        </p>

        <div className="grid gap-4 md:text-xl md:text-justify">
          <div className="flex gap-2">
            <p className="font-semibold">E-mail:</p>
            <Link
              href="mailto:zahradyviva@gmail.com"
              className="hover:font-bold hover:text-green-600"
            >
              zahradyviva@gmail.com
            </Link>
          </div>

          <div className="flex gap-2">
            <p className="font-semibold">Mobilní telefon:</p>
            <Link
              href="tel:+420607037079"
              className="hover:font-bold hover:text-green-600"
            >
              +420 607 037 079
            </Link>
          </div>
        </div>

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
