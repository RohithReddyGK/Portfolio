import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ThemeToggle props:
 * - inline (boolean) -> render as an inline element (no fixed positioning)
 *   default: false (renders fixed at top-right)
 */
export default function ThemeToggle({ inline = false }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      if (saved === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const wrapperClass = inline ? "inline-block" : "fixed top-5 right-5 z-50";
  const btnBase =
    "p-2 rounded-full transition-transform transform hover:scale-110 focus:outline-none flex items-center justify-center";

  return (
    <div className={wrapperClass}>
      <button
        aria-label="Toggle theme"
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        className={`${btnBase} bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 shadow-sm dark:shadow-md hover:shadow-lg dark:hover:shadow-blue-400 transition`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.28 }}
            >
              <Moon className="w-5 h-5 text-gray-800" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.28 }}
            >
              <Sun className="w-5 h-5 text-yellow-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
