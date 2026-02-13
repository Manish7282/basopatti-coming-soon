"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-700">
            Basopatti Portal
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/news" className="nav-link">News</Link>
            <Link href="/tourism" className="nav-link">Tourism</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 space-y-3">
          <Link href="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/news" className="mobile-link" onClick={() => setMenuOpen(false)}>News</Link>
          <Link href="/tourism" className="mobile-link" onClick={() => setMenuOpen(false)}>Tourism</Link>
          <Link href="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
