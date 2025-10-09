import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { LuLeaf } from "react-icons/lu";
import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0">
        <div className="bg-[url('/img/garden-green.jpg')] grid gap-4 bg-cover bg-center -mx-4 min-h-[400px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-5xl font-bold px-4 text-white">
              Kontaktujte <br /> nás
            </h1>
          </div>
        </div>

        <h3 className="text-lg font-semibold ">
          Zahrady ViVa – tradice, zkušenost a péče, která má kořeny.
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
      </main>

      <Footer />
    </>
  );
}
