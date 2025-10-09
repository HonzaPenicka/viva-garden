export const ContactForm = () => {
  return (
    <form>
      <div className="grid gap-4 mb-4 md:grid-cols-2 border-green-700 border-2 p-4 rounded-xl">
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Jméno
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-green-50 border border-green-700/50 text-black text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2 placeholder-yellow-700/50  dark:focus:ring-green-600 dark:focus:border-green-600"
            placeholder="Jaromír"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Příjmení
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-green-50 border border-green-700/50 text-black text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2   placeholder-yellow-700/50  dark:focus:ring-green-600 dark:focus:border-green-600"
            placeholder="Novák"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Společnost
          </label>
          <input
            type="text"
            id="company"
            className="bg-green-50 border border-green-700/50 text-black text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2   placeholder-yellow-700/50  dark:focus:ring-green-600 dark:focus:border-green-600"
            placeholder="Lesy s.r.o."
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Telefonní číslo
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-green-50 border border-green-700/50 text-black text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2   placeholder-yellow-700/50  dark:focus:ring-green-600 dark:focus:border-green-600"
            placeholder="+420 123 456 789"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-black">
            Emailová adresa
          </label>
          <input
            type="email"
            id="email"
            className="bg-green-50 border border-green-700/50 text-black text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2   placeholder-yellow-700/50  dark:focus:ring-green-600 dark:focus:border-green-600"
            placeholder="jaromir.novak@gmail.com"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-600 font-semibold rounded-xl text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-600"
        >
          Odeslat
        </button>
      </div>
    </form>
  );
};
