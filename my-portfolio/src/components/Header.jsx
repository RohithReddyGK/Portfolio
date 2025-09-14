import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hover:text-blue-500 dark:hover:text-blue-400 ${
                activeSection === link.id
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "dark:text-gray-200 text-gray-800"
              } transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center space-x-3">
          {/* Theme toggle always visible with enhanced dark mode visibility */}
          <ThemeToggle inline />

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-4 space-y-4 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block px-3 py-2 rounded-md ${
                activeSection === link.id
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "dark:text-gray-200 text-gray-800"
              } hover:text-blue-500 dark:hover:text-blue-400 transition`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
