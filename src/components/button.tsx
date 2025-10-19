import Link from "next/link";

interface ButtonProps {
  className?: string;
}

export const Button = ({ className = "" }: ButtonProps) => {
  return (
    <div className="flex justify-center">
      <Link
        href="/contact"
        className={`p-4 md:px-8 text-lg text-white rounded-xl uppercase font-bold bg-yellow-800/80 hover:border-yellow-700/50 hover:bg-green-600/50 hover:text-white/100 action:border-yellow-700 action:bg-green-600 action:text-white transition delay-50 duration-300 ${className}`}
      >
        Kontaktujte nás
      </Link>
    </div>
  );
};
