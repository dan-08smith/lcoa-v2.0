"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold sm:text-lg cursor-pointer">
          <p>
            <span className="hidden sm:inline">Largiemore Chalet Owners Association</span>
            <span className="sm:hidden">Largiemore COA</span>
          </p>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul
          className={`absolute top-full left-0 w-full sm:static sm:flex sm:space-x-6 sm:w-auto bg-white z-40 shadow-lg sm:shadow-none transition-all duration-300 ${
            menuOpen ? "flex flex-col items-center space-y-4 py-4" : "hidden sm:flex"
          }`}
        >
          <li className="flex items-center">
            <Link href="/#hero"
              className="block px-4 py-2 text-center sm:px-0 sm:py-0 sm:text-left text-black hover:text-blue-500 transition-colors duration-200" 
            >Home</Link>
          </li>
          <li className="flex items-center">
            <Link href="/#about"
              className="block px-4 py-2 text-center sm:px-0 sm:py-0 sm:text-left text-black hover:text-blue-500 transition-colors duration-200"
            >About</Link>
          </li>
          <li className="flex items-center">
            <Link href="/#things-to-do"
              className="block px-4 py-2 text-center sm:px-0 sm:py-0 sm:text-left text-black hover:text-blue-500 transition-colors duration-200"
            >Things To Do</Link>
          </li>
          <li className="flex items-center">
            <Link href="/#contact"
              className="block px-4 py-2 text-center sm:px-0 sm:py-0 sm:text-left text-black hover:text-blue-500 transition-colors duration-200"
            >Contact</Link>
          </li>

          <li className="flex items-center">
            <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}`}
              className="block bg-blue-600 text-white py-2 px-4 text-center rounded hover:bg-blue-700 transition-colors duration-200"
            >Portal</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}