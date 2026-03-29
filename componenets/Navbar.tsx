"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#feedback", label: "Feedback" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2.5 text-amber-600"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/image/profile.jpeg"
            alt="Sajal"
            width={36}
            height={36}
            className="h-8 w-8 rounded-full object-cover md:h-9 md:w-9"
            priority
          />
          <span className="text-lg font-bold md:text-2xl">Sajal</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-slate-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-amber-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {isOpen ? (
          <div className="md:hidden absolute right-4 top-full mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-amber-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
