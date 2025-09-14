// src/components/Footer.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-6 text-center text-gray-900 dark:text-gray-300 font-sans">
      {/* Tech Stack Showcase */}
      <p className="mb-3 text-sm">Built with ❤️ using</p>
      <div className="flex justify-center gap-6 mb-4 text-3xl">
        <FaReact className="text-blue-500 hover:scale-110 transition-transform" title="React" />
        <SiTailwindcss className="text-cyan-500 hover:scale-110 transition-transform" title="TailwindCSS" />
        <SiVite className="text-purple-500 hover:scale-110 transition-transform" title="Vite" />
        <FaNodeJs className="text-gray-700 dark:text-white hover:scale-110 transition-transform" title="Node.js" />
      </div>

      {/* Copyright */}
      <p className="text-sm">
        © {new Date().getFullYear()} Rohith Reddy GK. All Rights Reserved.
      </p>

      {/* Scroll-to-Top */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 
          text-white shadow-lg hover:from-blue-500 hover:to-purple-500 transition"
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </footer>
  );
}
