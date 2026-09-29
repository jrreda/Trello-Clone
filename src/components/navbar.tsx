import Image from "next/image";

export default function Navbar() {
  return (
    <header className="top-0 z-50 sticky bg-white/80 backdrop-blur-sm border-b">
      <div className="flex justify-between items-center mx-auto px-4 py-3 sm:py-4 container">
        <div className="flex items-center space-x-2">
          <Image
            src="/trello-icon.svg"
            alt="Trello Icon"
            width={24}
            height={24}
            className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600"
          />
          <span className="font-bold text-gray-900 text-xl sm:text-2xl">
            Trello Clone
          </span>
        </div>
      </div>
    </header>
  );
}
