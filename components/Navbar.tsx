"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold tracking-tight text-white"
        >
          Shivanshu<span className="text-indigo-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          href="#contact"
          className="hidden border border-white/15 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-indigo-400/40 hover:text-white md:block"
        >
          Let's Connect
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="border border-white/15 p-2 text-zinc-300 transition-colors duration-200 hover:border-indigo-400/40 hover:text-white md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050505] md:hidden">
          <div className="section-container flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-indigo-500 px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}