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
    bgImage: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1243.jpeg",
    text: [
      "Kompletní realizace zahradních prvků včetně zakládání záhonů, trávníků, chodníků a výstavby zahradních zídek.",
    ],
    items: [
      {
        name: "Výsadba záhonů Jičín",
        text: "Osázení okrasných záhonů travinami, trvalkami a cibulovinami, které zaručují dlouhodobou krásu a celoroční efektní svěžest vašich zahradních kompozic.",
        before: [],
        after: [
          { src: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1238.jpeg" },
          { src: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1239.jpeg" },
          { src: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1240.jpeg" },
          { src: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1241.jpeg" },
          { src: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1242.jpeg" },
          { src: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1243.jpeg" },
          { src: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1244.jpeg" },
          { src: "/img/zahrady/vysadba/jpeg-optimizer_IMG_1245.jpeg" },
        ],
      },
      {
        name: "Kompletní úprava zahrady Praha",
        text: "Komplexní realizace zahradního projektu včetně výstavby funkčních prvků, pískovcových chodníků, zídek a teras, doplněná o finální tvorbu okrasných a bylinných záhonů.",
        before: [],
        after: [
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1256.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1257.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1258.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1259.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1260.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1261.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1262.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1263.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1264.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1265.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1266.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1267.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1268.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1269.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1271.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1272.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1273.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1274.jpeg" },
          { src: "/img/zahrady/zahrady/jpeg-optimizer_IMG_1275.jpeg" },
        ],
      },
    ],
  },
  {
    icon: LuDroplets,
    title: "Údržba zahradní zeleně",
    bgImage: "/img/zelen/snizeni jicin/jpeg-optimizer_00 PO.jpeg",
    items: [
      {
        name: "Obnova zarostlé zahrady Hradec Králové",
        text: "Komplexní revitalizace pozemku pro maximální atraktivitu a úspěšný prodej nemovitosti. Profesionální sekání a vyžínání porostů, odborná prořezávka stromů a pečlivý úklid veškerého bioodpadu.",
        before: [
          { src: "/img/zelen/hradec/jpeg-optimizer_00 PŘED.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_11 PŘED.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_22 PŘED.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_33 PŘED.jpeg" },
        ],
        after: [
          { src: "/img/zelen/hradec/jpeg-optimizer_00 PO.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_11 PO.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_22 PO.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_33 PO.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_IMG_1314.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_IMG_1317.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_IMG_1319.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_IMG_1320 (2).jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_IMG_1320.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_IMG_1324.jpeg" },
          { src: "/img/zelen/hradec/jpeg-optimizer_IMG_1325.jpeg" },
        ],
      },
      {
        name: "Razantní střih živého plotu",
        text: "Již velmi přerostlý živý plot který se vylamoval do obou stran bylo nutné velmi razantně zastřihnout pro zajištění budoucí funkce, dále došlo k celkovému snížení výšky, výsledkem je velmi nevzhledný živý plot který však v následujíccíh letech udělá ještě hodně parády.",
        before: [
          { src: "/img/zelen/snizeni jicin/jpeg-optimizer_00 PŘED.jpeg" },
        ],
        after: [
          { src: "/img/zelen/snizeni jicin/jpeg-optimizer_00 PO.jpeg" },
          { src: "/img/zelen/snizeni jicin/jpeg-optimizer_IMG_0890.jpeg" },
          { src: "/img/zelen/snizeni jicin/jpeg-optimizer_IMG_0893.jpeg" },
          { src: "/img/zelen/snizeni jicin/jpeg-optimizer_IMG_0894.jpeg" },
        ],
      },
      {
        name: "Živý plot Jičín",
        text: "Jednoduché a přesné zastřižení živého plotu se zachováním jeho původního tvaru a estetické linie.",
        before: [],
        after: [
          { src: "/img/zelen/zivy plot jicin/jpeg-optimizer_IMG_4517.jpeg" },
          { src: "/img/zelen/zivy plot jicin/jpeg-optimizer_IMG_4518.jpeg" },
          { src: "/img/zelen/zivy plot jicin/jpeg-optimizer_IMG_4519.jpeg" },
        ],
      },
      {
        name: "Živý plot a tvarování Jičín",
        text: "Lehký tvarovací střih živého plotu pro obnovení jeho původních linií, doplněný o hlubší a precizní zásah na tvarovaných tújích a buku pro dosažení dokonalé symmetry a čistého vzhledu.",
        before: [
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0705 (2).jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0705.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0706 (2).jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0706.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0707 (2).jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0707.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0708 (2).jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0708.jpeg" },
        ],
        after: [
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0709.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0710.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0711.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0712.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0713.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0714.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0715.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0716.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0717.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0718.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0719.jpeg" },
          { src: "/img/zelen/dřeviny/jpeg-optimizer_IMG_0720.jpeg" },
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
    bgImage: "/img/jezirka/jezero.jpg",
    items: [
      {
        name: "Přírodní jezírko",
        text: "Vytvoření přírodního jezírka s ekologickým přístupem, zajišťujícím dlouhodobou funkčnost a harmonické začlenění do zahradního prostředí.",
        before: [],
        after: [
          { src: "/img/jezirka/jezero.jpg" },
          { src: "/img/jezirka/jezero2.jpg" },
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
    bgImage: "/img/teren/pripojka lbc/jpeg-optimizer_IMG_1145.jpeg",
    items: [
      {
        name: "Úprava terénu zahrady a založení trávníku Jičín",
        text: "Kompletní planýrovací práce v okolí novostavby, precizní frézování povrchu rotačními bránami pro profesionální založení nového trávníku a důkladný úklid celého pozemku.",
        before: [],
        after: [
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1171.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1172.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1173.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1174.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1175.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1176.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1177.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1178.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1179.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1180.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1181.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1182.jpeg" },
          { src: "/img/teren/jicin/jpeg-optimizer_IMG_1183.jpeg" },
        ],
      },
      {
        name: "Výkop prasklého potrubí Liberec",
        text: "Havarie prasklého vodovodního potrubí vyžadovala otevření výkopu ve vozovce, odstranění vrchních vrstev asfaltu a zhotovení přibližně 1,8 m hlubokého výkopu umožňujícího následnou odbornou opravu.",
        before: [],
        after: [{ src: "/img/teren/potrubi lbc/jpeg-optimizer_IMG_1148.jpeg" }],
      },
      {
        name: "Výkop přípojky vody rodinného domu Liberec",
        text: "Jednoduchý výkop pro připojení rodinného domu provedený v nezámrzné hloubce, uložení potrubí dle technických požadavků, následné pečlivé zasypání výkopu a závěrečné planýrovací práce pro uvedení terénu do původního stavu.",
        before: [],
        after: [
          { src: "/img/teren/pripojka lbc/jpeg-optimizer_IMG_1139.jpeg" },
          { src: "/img/teren/pripojka lbc/jpeg-optimizer_IMG_1140.jpeg" },
          { src: "/img/teren/pripojka lbc/jpeg-optimizer_IMG_1141.jpeg" },
          { src: "/img/teren/pripojka lbc/jpeg-optimizer_IMG_1142.jpeg" },
          { src: "/img/teren/pripojka lbc/jpeg-optimizer_IMG_1143.jpeg" },
          { src: "/img/teren/pripojka lbc/jpeg-optimizer_IMG_1144.jpeg" },
          { src: "/img/teren/pripojka lbc/jpeg-optimizer_IMG_1145.jpeg" },
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
    bgImage: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (6).jpeg",
    items: [
      {
        name: "Renovace oplocení WPC Jičín",
        text: "Renovace původního oplocení se zachováním nosných prvků, jejich repasí a úpravou pro nové kotvení plotovek. Konstrukce ošetřena antikorozním nátěrem, WPC plotovky pevně uchyceny trhacími nýty pro dlouhou životnost.",
        before: [{ src: "/img/oploceni/jicin/jpeg-optimizer_00 PŘED.JPG" }],
        after: [
          { src: "/img/oploceni/jicin/jpeg-optimizer_0 PO.JPG" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GOPR0147.JPG" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GOPR0184.JPG" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GOPR0189.JPG" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GOPR0196.JPG" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (2).jpeg" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (3).jpeg" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (4).jpeg" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (5).jpeg" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (6).jpeg" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (7).jpeg" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (8).jpeg" },
          { src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (9).jpeg" },
          {
            src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (10).jpeg",
          },
          {
            src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (11).jpeg",
          },
          {
            src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (16) - kopie.jpeg",
          },
          {
            src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (16).jpeg",
          },
          {
            src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (17) - kopie.jpeg",
          },
          {
            src: "/img/oploceni/jicin/jpeg-optimizer_GPTempDownload (17).jpeg",
          },
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
    bgImage: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0917.jpeg",
    items: [
      {
        name: "Dlažba Hasičská vodní nádrž Liberec",
        text: "Kompletní realizace pokládky betonové dlažby včetně obrubníků. Klíčovým úkolem bylo dosažení co největší rovinnosti plochy vůči velmi nerovnému okraji vodní nádrže, aby se předešlo zbytečným vícenákladům na složité dořezy. Součástí zakázky byly také navazující hrubé planýrovací práce.",
        before: [
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0695 (2).jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0696 (2).jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0697 (2).jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0698 (2).jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0699 (2).jpeg" },
        ],
        after: [
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0695.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0696.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0697.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0698.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0699.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0910.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0911.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0912.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0913.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0914.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0915.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0916.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0917.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0918.jpeg" },
          { src: "/img/teresy/hasici lbc/jpeg-optimizer_IMG_0919.jpeg" },
        ],
      },
      {
        name: "Oprava propadu žulové dlažby Praha",
        text: "Oprava propadlého úseku parkoviště ze žulových kostek, jehož poškození vzniklo přetěžováním a nesprávně založenými podkladními vrstvami při původní pokládce. Provedeno doplnění hrubého kameniva, důkladné zhutnění vibrační deskou a následné osazení žulových kostek zpět na původní místo.",
        before: [
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1023 - kopie.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1024 - kopie.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1025 - kopie.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1026 - kopie.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1027 - kopie.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1028 - kopie.jpeg" },
        ],
        after: [
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1023.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1024.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1025.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1026.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1027.jpeg" },
          { src: "/img/teresy/zula/jpeg-optimizer_IMG_1028.jpeg" },
        ],
      },
      {
        name: "Výkop prasklého potrubí Liberec",
        text: "Havárie prasklého vodovodního potrubí si vyžádala otevření výkopu ve vozovce, odstranění vrchních vrstev asfaltu a zhotovení přibližně 1,8 m hlubokého výkopu umožňujícího následnou opravu.",
        before: [{ src: "/img/uprava-praha/before1.jpg" }],
        after: [],
      },
      {
        name: "Stavba podlahy terasy Hradec Králové",
        text: "Realizace terasy včetně přípravy podkladu, založení palisád a obrubníků. Po dokončení výkopových a přípravných prací následovala montáž samotné terasy. Nosné body tvoří betonové dlaždice uložené do štěrkového lože frakce 4/8, výškové nerovnosti byly vyrovnány pomocí stavitelných terčů. Konstrukce je vyrobena z hliníkových terasových profilů 50×30 a finální pochozí vrstvu tvoří kompozitní prkna PERI.",
        before: [],
        after: [
          {
            src: "/img/teresy/hradec/jpeg-optimizer_58A9A762-652F-406C-837A-EE4D50F1DD0E.jpeg",
          },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1220.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1221.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1222.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1223.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1224.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1225.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1278.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1279.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1280.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1281.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1282.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1283.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1284.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1285.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1286.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1287.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1288.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1289.jpeg" },
          { src: "/img/teresy/hradec/jpeg-optimizer_IMG_1290.jpeg" },
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
        <div className="bg-[url('/img/jpeg-optimizer_services.jpg')] text-white grid gap-4 bg-cover bg-top-left -mx-4 md:mx-0 min-h-[400px] md:min-h-[700px]">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-6xl md:text-7xl font-bold px-4 uppercase pt-8">
              Nabízené <br /> služby
            </h1>
          </div>
        </div>

        <div className="text-justify md:text-center text-sm pb-4 md:text-lg mt-4">
          Zajišťujeme široké spektrum služeb zaměřených na realizaci, údržbu i
          technické zajištění zahrad a přilehlých prostor.
          <br />
          <br />
          <p className="font-semibold md:text-lg">
            Níže naleznete seznam služeb, které poskytujeme.
          </p>
        </div>

        <section className="grid gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {servicesData.map(({ icon: Icon, title, items, text, bgImage }) => (
            <div
              key={title}
              className="p-4 flex flex-col rounded-2xl bg-white shadow-md border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="flex flex-col items-left text-left gap-4 pb-4">
                <Icon className="text-green-700/90 w-8 h-8" />
                <h3 className="text-xl font-semibold text-green-700/90">
                  {title}
                </h3>

                <div
                  className="bg-cover bg-center rounded-lg h-56 px-4 py-8 md:align-text-bottom flex items-end"
                  style={{
                    backgroundImage: bgImage ? `url('${bgImage}')` : "none",
                  }}
                >
                  <div className="flex flex-col gap-4 bg-white/80 py-2 px-4 rounded-lg md:mr-16 self-end">
                    <p className="text-justify text-xs/4 font-medium">{text}</p>
                  </div>
                </div>
              </div>

              <div className="text-sm grid text-left overflow-y-scroll pr-2 max-h-80 scrollbar-visible">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="grid gap-4 border p-4 py-6 mb-4 border-green-200 rounded-xl"
                  >
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="text-justify text-xs md:text-sm">
                      {item.text}
                    </div>
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
