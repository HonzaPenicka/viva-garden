import Link from "next/link";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="grid md:flex p-4 gap-4 justify-center md:justify-between items-center text-black bg-white border-t-2 border-yellow-700/50">
      <div className="flex justify-center">
        <Link href="/" className="w-32">
          <img src="/logo.png" />
        </Link>
      </div>

      {/*<div className="flex gap-8">
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
      */}

      <div className="flex gap-8 text-4xl justify-center">
        <Link
          href="mailto:zahradyviva@gmail.com"
          className="hover:text-green-600"
        >
          <AiOutlineMail />
        </Link>

        <Link href="tel:+420607037079" className="hover:text-green-600">
          <AiOutlinePhone />
        </Link>

        <Link
          href="https://www.instagram.com"
          target="_blank"
          className="hover:text-green-600"
        >
          <AiOutlineInstagram />
        </Link>

        <Link
          href="https://www.youtube.com"
          target="_blank"
          className="hover:text-green-600"
        >
          <AiOutlineYoutube />
        </Link>
      </div>
    </footer>
  );
};
