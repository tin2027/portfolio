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
    <nav className="sticky top-0 z-50 flex w-full items-center justify-end bg-light/95 px-6 py-3 shadow-sm backdrop-blur md:justify-center">
      {/* Desktop links */}
      <ul className="hidden gap-10 text-primary font-semibold text-base md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:text-pink"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger button (mobile only, hidden once menu is open) */}
      {!isOpen && (
        <button
          className="z-10 text-primary text-xl md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      )}

      {/* Mobile dropdown box */}
      <div
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`absolute right-4 top-full w-48 overflow-hidden rounded-xl bg-light shadow-md transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 " : "max-h-0 "
        }`}
      >
        {/* Close button inside the box */}
        <div className="flex justify-end px-2 pt-2">
          <button
            className="text-primary text-xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center gap-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-primary font-semibold text-sm transition-colors hover:text-pink"
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
