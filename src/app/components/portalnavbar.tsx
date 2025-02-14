"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface PortalNavbarProps {
  leftTitle: React.ReactNode;
  returnHref: string;
  returnLabel: string;
}

export default function PortalNavbar({
  leftTitle,
  returnHref,
  returnLabel,
}: PortalNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow">
      <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
        {/* Left Title */}
        <h1 className="text-xl font-bold truncate sm:whitespace-nowrap">{leftTitle}</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Right Links */}
        <div
          className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-blue-600 z-50 sm:flex ${
            menuOpen ? "flex flex-col items-center space-y-4 p-4 sm:space-y-0 sm:p-0" : "hidden"
          }`}
        >
          <Link
            href={returnHref}
            className="px-4 py-2 text-white font-semibold rounded hover:underline"
          >
            {returnLabel}
          </Link>

          <Link
            href="/auth/logout"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
          >
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
}