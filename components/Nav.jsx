"use client";

import { useState } from "react";

const navLinks = [
  { name: "Hero", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-end md:justify-center relative py-4 px-6 shadow-sm sticky top-0 z-index-50 bg-light">
      {/* Desktop links */}
      <ul className="hidden md:flex gap-25 text-primary font-semibold text-xl">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger button (mobile only, hidden once menu is open) */}
      {!isOpen && (
        <button
          className="md:hidden text-primary text-2xl z-10"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      )}

      {/* Mobile dropdown box */}
      <div
        className={`absolute top-4 right-6 w-48 bg-light rounded-xl shadow-md md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 " : "max-h-0 "
        }`}
      >
        {/* Close button inside the box */}
        <div className="flex justify-end px-2 pt-2">
          <button
            className="text-primary text-2xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 pb-2 pt-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-primary font-semibold text-lg hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
