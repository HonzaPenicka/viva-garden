import { Button } from "./button";

export const ContactForm = () => {
  return (
    <form>
      <div className="grid gap-8 mb-4 shadow-md border border-green-100 hover:shadow-lg p-4 -mx-4 md:p-16 md:mx-4 xl:mx-64 rounded-xl md:gap-8 text-left">
        <h3 className="text-4xl font-semibold md:text-3xl text-green-700/90 text-center">
          Nezávazná konzultace
        </h3>

        <p className="text-gray-600 md:text-lg text-center">
          Vyplňte formulář a my se vám co nejdříve ozveme zpět
        </p>
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg md:text-justify">
            Jméno *
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-white border border-green-700/50 text-gray-600 text-sm md:text-lg md:text-justify md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2 placeholder-gray-400 dark:focus:ring-green-700/90 dark:focus:border-green-700/90"
            placeholder="Jaromír"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm md:text-lg md:text-justify font-semibold text-gray-600">
            Příjmení *
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-white border border-green-700/50 text-gray-600 text-sm md:text-lg md:text-justify md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2 placeholder-gray-400 dark:focus:ring-green-700/90 dark:focus:border-green-700/90"
            placeholder="Novák"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg md:text-justify">
            Telefonní číslo
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-white border border-green-700/50 text-gray-600 text-sm rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2   placeholder-gray-400  dark:focus:ring-green-700/90 dark:focus:border-green-700/90 md:text-lg md:text-justify md:p-4"
            placeholder="+420 123 456 789"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg md:text-justify">
            Emailová adresa
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-green-700/50 text-gray-600 text-sm rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2   placeholder-gray-400  dark:focus:ring-green-700/90 dark:focus:border-green-700/90 md:text-lg md:text-justify md:p-4"
            placeholder="jaromir.novak@gmail.com"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg md:text-justify">
            Lokalita projektu *
          </label>
          <input
            type="text"
            id="company"
            className="bg-white border border-green-700/50 text-gray-600 text-sm rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2 placeholder-gray-400  dark:focus:ring-green-700/90 dark:focus:border-green-700/90 md:text-lg md:text-justify md:p-4"
            placeholder="Turnov"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg md:text-justify">
            Typ služby *
          </label>
          <div className="relative">
            <select
              id="service"
              className="bg-white border border-green-700/50 text-gray-600 text-sm rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2 pr-8 appearance-none placeholder-gray-400 dark:focus:ring-green-700/90 dark:focus:border-green-700/90 md:text-lg md:text-justify md:p-4"
              required
            >
              <option value="" disabled selected>
                Vyberte typ služby
              </option>
              <option value="udrzba">Údržba zahradní zeleně</option>
              <option value="zakladani">Zakládání zahrad</option>
              <option value="jezirka">Tvorba přírodních jezírek</option>
              <option value="tereni">Terénní úpravy</option>
              <option value="oploceni">Oplocení</option>
              <option value="automatizovane">Automatizované sekání</option>
              <option value="uklid">Úklid a vyklízení</option>
              <option value="realitni">
                Spolupráce s realitními kancelářemi
              </option>
              <option value="prevoz">Převoz materiálu</option>
              <option value="kovovyroba">Zakázková kovovýroba</option>
              <option value="stavebni">Stavební práce</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg md:text-justify">
            Zpráva *
          </label>
          <textarea
            id="company"
            className="bg-white border h-36 border-green-700/50 text-gray-600 text-sm rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2 placeholder-gray-400  dark:focus:ring-green-700/90 dark:focus:border-green-700/90 md:text-lg md:text-justify md:p-4"
            placeholder="Pišete nám zde vaši zprávu..."
          />
        </div>

        <button
          type="submit"
          className="text-white bg-green-700/90 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-700/90 font-semibold rounded-xl text-lg w-full sm:w-auto px-6 py-4 md:py-4 md:text-xl text-center dark:bg-green-700/90 dark:hover:bg-green-700/90 dark:focus:ring-green-700/90"
        >
          Odeslat
        </button>
      </div>
    </form>
  );
};
