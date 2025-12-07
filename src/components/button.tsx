import Link from "next/link";

interface ButtonProps {
  className?: string;
}

export const Button = ({ className = "" }: ButtonProps) => {
  return (
    <div className="flex justify-center">
      <Link
        href="/contact"
        className={`p-4 md:px-8 text-lg text-white rounded-xl uppercase font-bold 
        hover:bg-yellow-700/50 hover:border-yellow-700/20 
        bg-green-700/85 
        action:border-yellow-700 action:bg-green-600 action:text-white 
        transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
      >
        Kontaktujte nás
      </Link>
    </div>
  );
};
