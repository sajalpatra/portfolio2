"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold text-amber-600">
          Sajal
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6 text-slate-700 font-medium">
          <Link href="#home" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-amber-600 transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-amber-600 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-amber-600 transition-colors">
            Projects
          </Link>
          <Link href="#achievements" className="hover:text-amber-600 transition-colors">
            Achievements
          </Link>
          <Link href="#feedback" className="hover:text-amber-600 transition-colors">
            Feedback
          </Link>
          <Link href="#contact" className="hover:text-amber-600 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
