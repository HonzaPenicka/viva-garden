import { useState, FormEvent } from "react";

export const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Web3Forms API klíč
    formData.append("access_key", "6fe77c2a-f5e6-45e0-ba70-defe55555030");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setResult(data.success ? "Zpráva byla odeslána!" : "Chyba při odesílání");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid bg-white gap-8 mb-4 shadow-md border border-green-100 hover:shadow-lg p-4 -mx-4 md:p-16 md:mx-4 xl:mx-64 rounded-xl md:gap-8 text-left">
        <h3 className="text-4xl font-semibold md:text-3xl text-green-700/90 text-center">
          Nezávazná konzultace
        </h3>

        <p className="text-gray-600 md:text-lg text-center">
          Vyplňte formulář a my se vám co nejdříve ozveme zpět
        </p>

        {/* Jméno */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg">
            Jméno *
          </label>
          <input
            type="text"
            name="first_name"
            required
            className="bg-white border border-green-700/50 text-gray-600 text-sm md:text-lg md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2"
            placeholder="Jaromír"
          />
        </div>

        {/* Příjmení */}
        <div>
          <label className="block mb-2 text-sm md:text-lg font-semibold text-gray-600">
            Příjmení *
          </label>
          <input
            type="text"
            name="last_name"
            required
            className="bg-white border border-green-700/50 text-gray-600 text-sm md:text-lg md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2"
            placeholder="Novák"
          />
        </div>

        {/* Telefon */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg">
            Telefonní číslo *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="bg-white border border-green-700/50 text-gray-600 text-sm md:text-lg md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2"
            placeholder="+420 123 456 789"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg">
            Emailová adresa *
          </label>
          <input
            type="email"
            name="email"
            required
            className="bg-white border border-green-700/50 text-gray-600 text-sm md:text-lg md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2"
            placeholder="jaromir.novak@gmail.com"
          />
        </div>

        {/* Lokalita */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg">
            Lokalita projektu *
          </label>
          <input
            type="text"
            name="location"
            required
            className="bg-white border border-green-700/50 text-gray-600 text-sm md:text-lg md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2"
            placeholder="Turnov"
          />
        </div>

        {/* Typ služby */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg">
            Typ služby *
          </label>
          <div className="relative">
            <select
              name="service"
              required
              className="bg-white border border-green-700/50 text-gray-600 text-sm md:text-lg md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2 pr-8 appearance-none"
            >
              <option value="" disabled>
                Vyberte typ služby
              </option>
              <option value="zakladani">Zakládání zahrad</option>
              <option value="udrzba">Údržba zahradní zeleně</option>
              <option value="jezirka">Tvorba přírodních jezírek</option>
              <option value="tereni">Terénní úpravy</option>
              <option value="oploceni">Oplocení</option>
              <option value="terasy">Terasy a dlažby</option>
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

        {/* Zpráva */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg">
            Zpráva *
          </label>
          <textarea
            name="message"
            required
            className="bg-white border h-36 border-green-700/50 text-gray-600 text-sm md:text-lg md:p-4 rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2"
            placeholder="Pišete nám zde vaši zprávu..."
          ></textarea>
        </div>

        {/* Výsledek */}
        {result && (
          <p className="text-center font-semibold text-green-700/90">
            {result}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="text-white bg-green-700/90 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-700/90 font-semibold rounded-xl text-lg w-full sm:w-auto px-6 py-4 md:text-xl"
        >
          Odeslat
        </button>
      </div>
    </form>
  );
};
