import { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { GiGolfFlag } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold flex items-center gap-1"> <IoMdSunny/>Forge</div>

        <div className="hidden md:flex text-sm lg:flex items-center gap-1"><GiGolfFlag/>caneda/montrel</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-gray-700 text-sm">
        <a href="#"  className="relative group">Manufacture<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-700 transition-all group-hover:w-full"></span></a>
        <a href="#"  className="relative group">Tool Library<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-700 transition-all group-hover:w-full"></span></a>
        <a href="#" className="relative group" >Get in touch  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-700 transition-all group-hover:w-full"></span></a>
      </div>

      {/* Language toggle */}
      <div className="hidden md:block text-sm">Eng / Fra</div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden">
          <a href="#">Manufacture</a>
          <a href="#">Tool Library</a>
          <a href="#">Get in touch</a>
          
        </div>
      )}
    </nav>
  );
}
