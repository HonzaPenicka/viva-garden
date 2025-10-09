import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { LuLeaf } from "react-icons/lu";
import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0">
        <div className="bg-[url('/img/garden-green.jpg')] grid gap-4 bg-cover bg-center -mx-4 min-h-[400px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-5xl font-bold px-4 text-white uppercase">
              Kontaktujte <br /> nás
            </h1>
          </div>
        </div>

        <h3 className="text-lg font-semibold ">
          ZAHRADY VIVA – tradice, zkušenost a péče, která má kořeny.
        </h3>

        <p className="text-sm">
          Pokud Vás zajímá více informací nebo si chcete domluvit schůzku,
          neváhejte nás kontaktovat. Rádi Vám pomůžeme s jakýmkoli dotazem či
          přáním.
        </p>

        <p className="text-sm">
          Pomůže Vám k tomu náš kontaktní formulář, případně nás můžete
          kontaktovat na uvedených kontaktech.
        </p>

        <ContactForm />

        <div className="grid gap-4">
          <div className="flex gap-2">
            <p className="font-semibold">Název společnosti:</p>
            <p className="uppercase">Zahrady ViVa</p>
          </div>

          <div className="flex gap-2">
            <p className="font-semibold">E-mail:</p>
            <Link
              href="mailto:zahradyviva@gmail.com"
              className="hover:font-bold hover:text-green-700"
            >
              zahradyviva@gmail.com
            </Link>
          </div>

          <div className="flex gap-2">
            <p className="font-semibold">Mobilní telefon:</p>
            <Link
              href="tel:+420607037079"
              className="hover:font-bold hover:text-green-700"
            >
              +420 607 037 079
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
