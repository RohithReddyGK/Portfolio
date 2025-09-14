// src/components/Hero.jsx
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/heroAnimation.json"; 

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const letter = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const iconHover = { whileHover: { scale: 1.2, y: -4 }, whileTap: { scale: 0.9 } };

export default function Hero() {
  const name = "Rohith Reddy GK".split("");

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center
        bg-gradient-to-br from-gray-50 via-white to-gray-100
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden px-6"
    >
      {/* Lottie animation */}
      <motion.div
        initial={{ top: "0.2%", left: "50%", translateX: "-50%", translateY: "-50%", scale: 1 }}
        animate={{ top: "0.2%", left: "50%", translateX: "-50%", translateY: "-30%", scale: 1 }}
        transition={{ duration: 2, delay: 0, type: "tween" }}
        className="absolute w-full max-w-[1200px] h-auto z-10 pointer-events-none"
      >
        <Lottie animationData={heroAnimation} loop={true} autoplay={true} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-20 flex flex-col items-center justify-center
          backdrop-blur-md bg-white/40 dark:bg-gray-800/40 rounded-2xl
          shadow-xl px-8 py-10 md:px-12 md:py-14 max-w-3xl"
      >
        {/* "I am" */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2"
        >
          I am
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 flex justify-center flex-wrap tracking-wide"
        >
          {name.map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto"
        >
          Full Stack Developer & AI/ML Enthusiast building modern web apps and smart AI solutions.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex space-x-6 mb-8 justify-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/rohithreddygk/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition"
            {...iconHover}
          >
            <FaLinkedin size={26} className="text-blue-600" />
          </motion.a>
          <motion.a
            href="https://github.com/RohithReddyGK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition"
            {...iconHover}
          >
            <FaGithub size={26} className="text-gray-800 dark:text-white" />
          </motion.a>
          <motion.a
            href="/Rohith Reddy G K - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition"
            {...iconHover}
          >
            <FaFileAlt size={26} className="text-purple-600" />
          </motion.a>
        </motion.div>

        {/* Call to Action */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600
          text-white font-semibold shadow-md hover:from-blue-500 hover:to-purple-500 transition"
        >
          See My Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
