"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Responsive Brand */}
        <p className="text-xl font-semibold sm:text-lg">
          <span className="hidden sm:inline">Largiemore Chalet Owners Association</span>
          <span className="sm:hidden">LCOA</span>
        </p>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`absolute top-full left-0 w-full sm:static sm:flex sm:space-x-6 sm:w-auto bg-white z-40 shadow-lg sm:shadow-none transition-all duration-300 ${
            menuOpen ? "flex flex-col items-center space-y-4 py-4" : "hidden sm:flex"
          }`}
        >
          {/* Standard Links */}
          <li className="flex items-center">
            <a
              href="#hero"
              className="block px-4 py-2 text-center sm:px-0 sm:py-0 sm:text-left text-black hover:text-blue-500 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#about"
              className="block px-4 py-2 text-center sm:px-0 sm:py-0 sm:text-left text-black hover:text-blue-500 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#files"
              className="block px-4 py-2 text-center sm:px-0 sm:py-0 sm:text-left text-black hover:text-blue-500 transition-colors duration-200"
            >
              Files
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#contact"
              className="block px-4 py-2 text-center sm:px-0 sm:py-0 sm:text-left text-black hover:text-blue-500 transition-colors duration-200"
            >
              Contact
            </a>
          </li>

          {/* Portal Button */}
          <li className="flex items-center">
            <a
              href="/auth"
              className="block bg-blue-600 text-white py-2 px-4 text-center rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Portal
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}