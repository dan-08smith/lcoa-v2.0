"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface PortalNavbarProps {
  leftTitle: React.ReactNode;
}

export default function PortalNavbar({ leftTitle }: PortalNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow relative">
      <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
        <h1 className="text-xl font-bold truncate sm:whitespace-nowrap">{leftTitle}</h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-600 z-50 shadow-md">
          <div className="p-4 space-y-4">
            <Link href="/"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >Home</Link>

            <hr className="border-gray-400" />

            <Link href="/portal"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >Portal Home</Link>
            <Link href="/portal/account"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >Your Account</Link>
            <Link href="/portal/files"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >Your Files</Link>
            <Link href="/portal/announcements"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >LCOA Announcements</Link>
            <Link href="/portal/committee"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >LCOA Committee</Link>

            <hr className="border-gray-400" />

            <Link href="/portal/admin"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >Admin Portal</Link>
            <Link href="/portal/admin/announcements"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >Announcements Manager</Link>
            <Link href="/portal/admin/users"
              className="block px-4 py-2 text-white font-semibold rounded hover:bg-white hover:text-black"
            >Users Manager</Link>

            <hr className="border-gray-400" />

            <Link href="/auth/logout"
              className="block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
            >Log Out</Link>
          </div>
        </div>
      )}
    </nav>
  );
}