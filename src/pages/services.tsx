import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { useState } from "react";
import { Button } from "@/components/button";

import {
  LuLeaf,
  LuHammer,
  LuFence,
  LuDroplets,
  LuWrench,
} from "react-icons/lu";
import Gallery from "@/components/gallery";

const servicesData = [
  {
    icon: LuLeaf,
    title: "Zakládání zahrad",
    text: [
      "Kompletní realizace zahradních prvků včetně zakládání záhonů, trávníků, chodníků a výstavby zahradních zídek.",
    ],
    items: [
      {
        name: "Výsadba záhonů Jičín",
        text: "Osázení okrasných záhonů travinami, trvalkami a cibulovinami, které zaručují dlouhodobou krásu a celoroční efektní svěžest vašich zahradních kompozic.",
        before: [
          { src: "/img/contact.jpeg" },
          { src: "/img/flower.jpg" },
          { src: "/img/garden.jpg" },
          { src: "/img/services.webp" },
          { src: "/img/contact.jpeg" },
        ],
        after: [
          { src: "/img/vysadba-jicin/after1.jpg" },
          { src: "/img/vysadba-jicin/after2.jpg" },
        ],
      },
      {
        name: "Kompletní úprava zahrady Praha",
        text: "Komplexní realizace zahradního projektu včetně výstavby funkčních prvků, pískovcových chodníků, zídek a teras, doplněná o finální tvorbu okrasných a bylinných záhonů.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
    ],
  },
  {
    icon: LuDroplets,
    title: "Údržba zahradní zeleně",
    items: [
      {
        name: "Obnova zarostlé zahrady Hradec Králové",
        text: "Komplexní revitalizace pozemku pro maximální atraktivitu a úspěšný prodej nemovitosti. Profesionální sekání a vyžínání porostů, odborná prořezávka stromů a pečlivý úklid veškerého bioodpadu.",
        before: [
          { src: "/img/contact.jpeg" },
          { src: "/img/flower.jpg" },
          { src: "/img/garden.jpg" },
          { src: "/img/services.webp" },
          { src: "/img/contact.jpeg" },
        ],
        after: [
          { src: "/img/vysadba-jicin/after1.jpg" },
          { src: "/img/vysadba-jicin/after2.jpg" },
        ],
      },
      {
        name: "Razantní střih živého plotu",
        text: "Již velmi přerostlý živý plot který se vylamoval do obou stran bylo nutné velmi razantně zastřihnout pro zajištění budoucí funkce, dále došlo k celkovému snížení výšky, výsledkem je velmi nevzhledný živý plot který však v následujíccíh letech udělá ještě hodně parády.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
      {
        name: "Živý plot Jičín",
        text: "Jednoduché a přesné zastřižení živého plotu se zachováním jeho původního tvaru a estetické linie.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
      {
        name: "Živý plot a tvarování Jičín",
        text: "Lehký tvarovací střih živého plotu pro obnovení jeho původních linií, doplněný o hlubší a precizní zásah na tvarovaných tújích a buku pro dosažení dokonalé symmetry a čistého vzhledu.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
    ],
    text: [
      "Precizní sekání a dlouhodobá péče o trávníky, profesionální tvarování živých plotů, údržba okrasných keřů a odborné stříhání ovocných stromů.",
    ],
  },
  {
    icon: LuDroplets,
    title: "Tvorba přírodních jezírek",
    items: [
      {
        name: "Výsadba záhonů Jičín",
        text: "Osázení okrasných záhonů travinami, trvalkami a cibulovinami, které zaručují dlouhodobou krásu a celoroční efektní svěžest vašich zahradních kompozic.",
        before: [
          { src: "/img/contact.jpeg" },
          { src: "/img/flower.jpg" },
          { src: "/img/garden.jpg" },
          { src: "/img/services.webp" },
          { src: "/img/contact.jpeg" },
        ],
        after: [
          { src: "/img/vysadba-jicin/after1.jpg" },
          { src: "/img/vysadba-jicin/after2.jpg" },
        ],
      },
      {
        name: "Kompletní úprava zahrady Praha",
        text: "Komplexní realizace zahradního projektu včetně výstavby funkčních prvků, pískovcových chodníků, zídek a teras, doplněná o finální tvorbu okrasných a bylinných záhonů.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
    ],
    text: [
      "Tvorba přírodních koupacích i okrasných jezírek a realizace retenčních nádrží podporujících efektivní zadržování vody v krajině. Profesionální návrh, ekologické řešení a dlouhodobě udržitelná funkčnost.",
    ],
  },
  {
    icon: LuHammer,
    title: "Terénní úpravy",
    items: [
      {
        name: "Úprava terénu zahrady a založení trávníku Jičín",
        text: "Kompletní planýrovací práce v okolí novostavby, precizní frézování povrchu rotačními bránami pro profesionální založení nového trávníku a důkladný úklid celého pozemku.",
        before: [
          { src: "/img/contact.jpeg" },
          { src: "/img/flower.jpg" },
          { src: "/img/garden.jpg" },
          { src: "/img/services.webp" },
          { src: "/img/contact.jpeg" },
        ],
        after: [
          { src: "/img/vysadba-jicin/after1.jpg" },
          { src: "/img/vysadba-jicin/after2.jpg" },
        ],
      },
      {
        name: "Výkop prasklého potrubí Liberec",
        text: "Havarie prasklého vodovodního potrubí vyžadovala otevření výkopu ve vozovce, odstranění vrchních vrstev asfaltu a zhotovení přibližně 1,8 m hlubokého výkopu umožňujícího následnou odbornou opravu.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
      {
        name: "Výkop přípojky vody rodinného domu Liberec",
        text: "Jednoduchý výkop pro připojení rodinného domu provedený v nezámrzné hloubce, uložení potrubí dle technických požadavků, následné pečlivé zasypání výkopu a závěrečné planýrovací práce pro uvedení terénu do původního stavu.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
    ],
    text: [
      "Úpravy a profesionální modelace terénu zahrad, realizace přesných výkopových prací a instalace účinných drenážních systémů pro optimální odvodnění a stabilitu pozemku.",
    ],
  },
  {
    icon: LuFence,
    title: "Oplocení",
    items: [
      {
        name: "Renovace oplocení WPC Jičín",
        text: "Renovace původního oplocení se zachováním nosných prvků, jejich repasí a úpravou pro nové kotvení plotovek. Konstrukce ošetřena antikorozním nátěrem, WPC plotovky pevně uchyceny trhacími nýty pro dlouhou životnost.",
        before: [
          { src: "/img/contact.jpeg" },
          { src: "/img/flower.jpg" },
          { src: "/img/garden.jpg" },
          { src: "/img/services.webp" },
          { src: "/img/contact.jpeg" },
        ],
        after: [
          { src: "/img/vysadba-jicin/after1.jpg" },
          { src: "/img/vysadba-jicin/after2.jpg" },
        ],
      },
    ],
    text: [
      "Realizace různých typů oplocení včetně výstavby nových plotů i odborné renovace stávajících, s důrazem na dlouhou životnost, stabilitu a estetické zpracování.",
    ],
  },
  /*
  {
    icon: LuWrench,
    title: "Zakázková výroba a opravy",
    items: [
      {
        name: "Výsadba záhonů Jičín",
        text: "Osázení okrasných záhonů travinami, trvalkami a cibulovinami, které zaručují dlouhodobou krásu a celoroční efektní svěžest vašich zahradních kompozic.",
        before: [
          { src: "/img/contact.jpeg" },
          { src: "/img/flower.jpg" },
          { src: "/img/garden.jpg" },
          { src: "/img/services.webp" },
          { src: "/img/contact.jpeg" },
        ],
        after: [
          { src: "/img/vysadba-jicin/after1.jpg" },
          { src: "/img/vysadba-jicin/after2.jpg" },
        ],
      },
      {
        name: "Kompletní úprava zahrady Praha",
        text: "Komplexní realizace zahradního projektu včetně výstavby funkčních prvků, pískovcových chodníků, zídek a teras, doplněná o finální tvorbu okrasných a bylinných záhonů.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
    ],

    text: [
      "Výroba zahradních prvků z kovu – vrata, brány, zábradlí či potrubní prvky – z oceli i nerezové oceli. Profesionální zámečnická výroba metodami MIG, MAG, TIG / WIG. Součástí služeb jsou také opravy zahradní techniky, sezónní servis a mobilní opravy přímo u vás doma.",
    ],
  },    */
  {
    icon: LuWrench,
    title: "Terasy a dlažby",
    items: [
      {
        name: "Dlažba Hasičská vodní nádrž Liberec",
        text: "Kompletní realizace pokládky betonové dlažby včetně obrubníků. Klíčovým úkolem bylo dosažení co největší rovinnosti plochy vůči velmi nerovnému okraji vodní nádrže, aby se předešlo zbytečným vícenákladům na složité dořezy. Součástí zakázky byly také navazující hrubé planýrovací práce.",
        before: [
          { src: "/img/contact.jpeg" },
          { src: "/img/flower.jpg" },
          { src: "/img/garden.jpg" },
          { src: "/img/services.webp" },
          { src: "/img/contact.jpeg" },
        ],
        after: [
          { src: "/img/vysadba-jicin/after1.jpg" },
          { src: "/img/vysadba-jicin/after2.jpg" },
        ],
      },
      {
        name: "Oprava propadu žulové dlažby Praha",
        text: "Oprava propadlého úseku parkoviště ze žulových kostek, jehož poškození vzniklo přetěžováním a nesprávně založenými podkladními vrstvami při původní pokládce. Provedeno doplnění hrubého kameniva, důkladné zhutnění vibrační deskou a následné osazení žulových kostek zpět na původní místo.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
      {
        name: "Výkop prasklého potrubí Liberec",
        text: "Havárie prasklého vodovodního potrubí si vyžádala otevření výkopu ve vozovce, odstranění vrchních vrstev asfaltu a zhotovení přibližně 1,8 m hlubokého výkopu umožňujícího následnou opravu.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
      {
        name: "Stavba podlahy terasy Hradec Králové",
        text: "Realizace terasy včetně přípravy podkladu, založení palisád a obrubníků. Po dokončení výkopových a přípravných prací následovala montáž samotné terasy. Nosné body tvoří betonové dlaždice uložené do štěrkového lože frakce 4/8, výškové nerovnosti byly vyrovnány pomocí stavitelných terčů. Konstrukce je vyrobena z hliníkových terasových profilů 50×30 a finální pochozí vrstvu tvoří kompozitní prkna PERI.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [
          { src: "/img/uprava-praha/after1.jpg" },
          { src: "/img/uprava-praha/after2.jpg" },
        ],
      },
    ],
    text: [
      "Pokládka veškerých typů betonových dlažeb a chodníků a výstavba teras z materiálů WPC nebo Thermowood s důrazem na precizní provedení a dlouhou životnost.",
    ],
  },
];

export default function Services() {
  const before = [
    { src: "/img/flower.jpg" },
    { src: "/img/flower.jpg" },
    { src: "/img/flower.jpg" },

    // ...
  ];

  const after = [
    { src: "/img/flower.jpg" },
    { src: "/img/flower.jpg" },
    // ...
  ];
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <Header />

      <main className="grid gap-4 text-black p-4 pt-0 md:container md:mx-auto md:px-0 md:gap-8 text-center">
        <div className="bg-[url('/img/services.webp')] text-white grid gap-4 bg-cover bg-top-left -mx-4 md:mx-0 min-h-[400px] md:min-h-[700px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-6xl md:text-7xl font-bold px-4 uppercase pt-8">
              Nabízené <br /> služby
            </h1>
          </div>
        </div>

        <div className="text-left text-sm pb-4 md:text-lg mt-4">
          Zajišťujeme široké spektrum služeb zaměřených na realizaci, údržbu i
          technické zajištění zahrad a přilehlých prostor.
          <br />
          <br />
          <p className="font-semibold md:text-lg">
            Níže naleznete seznam služeb, které poskytujeme.
          </p>
        </div>

        <section className="grid gap-4 md:gap-8 md:grid-cols-2">
          {servicesData.map(({ icon: Icon, title, items, text }) => (
            <div
              key={title}
              className="p-4 rounded-2xl bg-white shadow-md border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-left text-left gap-4 pb-4 lg:mr-16">
                <Icon className="text-green-700/90 w-8 h-8" />

                <h3 className="text-2xl font-semibold text-green-700/90">
                  {title}
                </h3>

                <p className="text-sm">{text}</p>
              </div>
              <div className="text-sm grid text-left overflow-y-scroll pr-2 max-h-80 scrollbar-visible">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="grid gap-4 border p-4 py-6 mb-4 border-green-200 rounded-xl"
                  >
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="text-xs lg:mr-16">{item.text}</div>
                    <Gallery
                      before={item.before}
                      after={item.after}
                      beforeCover={item.before?.[0]?.src}
                      afterCover={item.after?.[0]?.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <h3 className="text-xl font-semibold md:text-3xl text-green-700/90">
          Tradice, zkušenost a péče, <br />
          která má kořeny.
        </h3>

        <Button className="my-4" />
      </main>

      <Footer />
    </>
  );
}
