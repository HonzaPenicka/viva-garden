export const ContactForm = () => {
  return (
    <form>
      <div className="grid gap-4 mb-4 shadow-md border border-green-100 hover:shadow-lg p-4 rounded-xl md:w-1/3 md:gap-8 text-left">
        <h3 className="text-2xl font-semibold  md:w-2/3 md:text-3xl text-green-700/90">
          Napište nám
        </h3>
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600 md:text-lg md:text-justify">
            Jméno
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
            Příjmení
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
            Společnost
          </label>
          <input
            type="text"
            id="company"
            className="bg-white border border-green-700/50 text-gray-600 text-sm rounded-lg focus:ring-green-700/90 focus:border-green-700/90 block w-full p-2 placeholder-gray-400  dark:focus:ring-green-700/90 dark:focus:border-green-700/90 md:text-lg md:text-justify md:p-4"
            placeholder="Lesy s.r.o."
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

        <div className="mb-6">
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

        <button
          type="submit"
          className="text-white bg-green-700/90 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-700/90 font-semibold rounded-xl text-sm w-full sm:w-auto px-6 py-2 md:py-4 md:text-lg text-center dark:bg-green-700/90 dark:hover:bg-green-700/90 dark:focus:ring-green-700/90"
        >
          Odeslat
        </button>
      </div>
    </form>
  );
};
