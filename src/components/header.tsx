import Link from "next/link";
import { useCallback, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header className="flex justify-between items-center p-4 md:px-0 text-3xl font-bold border-b-2 border-yellow-700/50 bg-white relative overflow-visible md:container md:mx-auto">
      <Link href="/" className="w-32">
        <img src="/logo.png" />
      </Link>
      <button onClick={toggleMenu} aria-label="Toggle menu">
        <GiHamburgerMenu className="text-black" />
      </button>

      {isMenuOpen && (
        <nav className="absolute top-full z-10 left-0 right-0 bg-white border-2 border-yellow-700/50 p-4 lg:p-8 font-semibold text-xl w-full text-black">
          <ul className="flex flex-col gap-4 lg:gap-8 text-right uppercase">
            <li className="hover:decoration-green-600 hover:text-green-700/90">
              <a href="/">Domů</a>
            </li>

            <li className="hover:text-green-700/90">
              <a href="/about">O nás</a>
            </li>

            <li className="hover:text-green-700/90">
              <a href="/services">Služby</a>
            </li>

            <li className="hover:text-green-700/90">
              <a href="/references">Reference</a>
            </li>

            <li className="hover:text-green-700/90">
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
