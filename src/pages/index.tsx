import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="grid gap-8 text-black p-4 pt-0 md:container md:mx-auto lg:gap-24 text-center">
        <div className="bg-[url('/img/image-6.png')] lg:bg-[url('/img/image-7.png')] grid gap-8 bg-cover bg-center bg-no-repeat -mx-4 md:mx-0 min-h-[600px] md:min-h-[700px]">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-bold px-4 text-white uppercase py-16">
              ZAHRADY <br />
              ViVa
            </h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Rodinná tradice <br /> zakořeněná v praxi
          </h2>
          <div>
            <Button />
          </div>
        </div>

        <div
          className="grid gap-8 lg:gap-24 lg:grid-cols-2 md:items-center text-justify"
          id="about"
        >
          <div className="grid gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold my-4 md:my-0 md:pb-4 text-center">
              O nás
            </h2>
            <p className="text-sm md:text-lg">
              <b className="text-green-700/90">Zahrady ViVa</b> jsou rodinnou
              firmou, která vyrostla z celoživotních zkušeností otce –
              zahradníka, jenž se své profesi věnuje celý život. Na jeho práci a
              znalostech dnes navazuje mladší generace s novou energií a
              moderním přístupem. Společně tak spojujeme poctivou řemeslnou
              práci s aktuálními postupy a nabízíme komplexní služby pro vaši
              zahradu i okolí domu.
            </p>

            <p className="text-sm md:text-lg">
              Naším posláním je, aby váš dům i zahrada byly nejen krásné, ale i
              dlouhodobě udržované a funkční.
            </p>

            <p className="text-sm md:text-lg">
              Specializujeme se nejen na údržbu zahrad samotných, ale nabízíme
              také služby zámečnictví jako vrata, brány, ploty, zábradlí, opravy
              funkčních prvků domů, opravu zahradní techniky nebo stavební práce
              různého charakteru.
            </p>

            <p className="text-sm md:text-lg text-justify lg:flex hidden">
              🌳 Věříme, že zahrada není jen kus pozemku, o který se musíte
              starat, ale prodloužení vašeho domova. Proto k práci přistupujeme
              s respektem, pečlivostí a osobním nasazením. Každý projekt je pro
              nás příležitostí vytvořit místo, které bude odrážet vaši osobnost
              a přinášet radost po mnoho let.
            </p>
          </div>

          <div>
            <img
              src="/img/lidi-3.png"
              alt="garden-green"
              className="rounded-xl bg-cover"
            />
          </div>

          <p className="text-sm md:text-lg text-justify flex lg:hidden">
            🌳 Věříme, že zahrada není jen kus pozemku, o který se musíte
            starat, ale prodloužení vašeho domova. Proto k práci přistupujeme s
            respektem, pečlivostí a osobním nasazením. Každý projekt je pro nás
            příležitostí vytvořit místo, které bude odrážet vaši osobnost a
            přinášet radost po mnoho let.
          </p>
        </div>

        <div className="grid gap-4 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold my-4 md:my-0 text-center">
            Naše práce
          </h2>

          <p className="text-sm md:text-lg md:text-center mb-4 text-justify">
            Ukázky realizovaných zahrad a projektů, které jsme s láskou
            vytvořili
          </p>

          <div className="overflow-hidden w-full md:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper w-full"
            >
              <SwiperSlide>
                <img
                  src="/img/garden-green.jpg"
                  alt="work1"
                  className="rounded-xl h-64 w-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/garden-green.jpg"
                  alt="work2"
                  className="rounded-xl h-64 w-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/garden-green.jpg"
                  alt="work3"
                  className="rounded-xl h-64 w-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/garden-green.jpg"
                  alt="work4"
                  className="rounded-xl h-64 w-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              <Link
                href="#"
                className="group relative block rounded-xl overflow-hidden h-64"
              >
                <img
                  src="/img/garden-green.jpg"
                  alt="work1"
                  className="rounded-xl h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                />

                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-green-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-4 justify-center items-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Kvetoucí zahrada
                  </h3>
                  <p className="text-sm text-center">Rodinný dům Praha</p>
                </div>
              </Link>

              <Link
                href="#"
                className="group relative block rounded-xl overflow-hidden h-64"
              >
                <img
                  src="/img/garden-green.jpg"
                  alt="work1"
                  className="rounded-xl h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                />

                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-green-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-4 justify-center items-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Kvetoucí zahrada
                  </h3>
                  <p className="text-sm text-center">Rodinný dům Praha</p>
                </div>
              </Link>

              <Link
                href="#"
                className="group relative block rounded-xl overflow-hidden h-64"
              >
                <img
                  src="/img/garden-green.jpg"
                  alt="work1"
                  className="rounded-xl h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                />

                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-green-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-4 justify-center items-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Kvetoucí zahrada
                  </h3>
                  <p className="text-sm text-center">Rodinný dům Praha</p>
                </div>
              </Link>

              <Link
                href="#"
                className="group relative block rounded-xl overflow-hidden h-64"
              >
                <img
                  src="/img/garden-green.jpg"
                  alt="work1"
                  className="rounded-xl h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                />

                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-green-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-4 justify-center items-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Kvetoucí zahrada
                  </h3>
                  <p className="text-sm text-center">Rodinný dům Praha</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold md:text-3xl text-green-700/90 text-center -mt-4 md:mt-0 lg:-my-4">
          Tradice, zkušenost a péče, <br />
          která má kořeny.
        </h3>

        <div className="grid gap-4 md:gap-8 bg-white rounded-xl p-4 py-8 md:p-8 md:mb-8">
          <h3 className="text-3xl md:text-4xl font-semibold text-center">
            Připravte svou zahradu na novou sezónu
          </h3>

          <p className="text-sm md:text-lg md:text-center">
            Kontaktujte nás ještě dnes a domluvte si nezávaznou konzultaci
            zdarma
          </p>

          <Button className="my-4" />
        </div>
      </main>

      <Footer />
    </>
  );
}
