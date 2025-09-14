// src/components/Certifications.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "IoT Based Automatic Medicine Reminder",
      org: "IJCRT - INTERNATIONAL JOURNAL OF CREATIVE RESEARCH THOUGHTS",
      date: "Mar 3, 2023",
      image: "/certificates/IJCRT.jpg",
    },
    {
      title: "Data Structures and Algorithms using JAVA",
      org: "NPTEL",
      date: "Nov 2024",
      image: "/certificates/DSA-NPTEL.jpg",
    },
    {
      title: "Programming in JAVA",
      org: "NPTEL",
      date: "Nov 2024",
      image: "/certificates/JAVA-NPTEL.jpg",
    },
    {
      title: "Career Essentials in Generative AI",
      org: "Microsoft + LinkedIn",
      date: "Dec 2024",
      image: "/certificates/Career Essentials in GenAI.jpg",
    },
    {
      title: "Microsoft Azure AI Essentials",
      org: "Microsoft",
      date: "May 2025",
      image: "/certificates/Azure.jpg",
    },
    {
      title: "All India Naukari Campus Aptitude Test",
      org: "AINCAT",
      date: "May 2025, Rank: 46721 / 3.6L+",
      image: "/certificates/AINCAT.jpg",
    },
    {
      title: "Java (Basics)",
      org: "HackerRank",
      date: "May 2024",
      image: "/certificates/HackerRank-JAVA.jpg",
    },
    {
      title: "Full Stack Development Intern",
      org: "Prinston Smart Engineers",
      date: "Nov 2024",
      image: "/certificates/FSD-Prinston.jpg",
    },
    {
      title: "AI Intern",
      org: "Edunet Foundation",
      date: "March 2025",
      image: "/certificates/AI Intern.jpg",
    },
    {
      title: "Front-End Development Intern",
      org: "FreeJobLink",
      date: "March 2025",
      image: "/certificates/Front-End Intern.jpg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Certifications
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              onClick={() => setSelectedCert(cert)}
              className="p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer flex flex-col"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.org}
              </p>
              {cert.date && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {cert.date}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/rohithreddygk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:from-blue-500 hover:to-purple-500 transition"
          >
            <ExternalLink size={18} /> Explore All Certificates
          </a>
        </div>
      </div>

      {/* Modal for Zoom Image */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.img
            src={selectedCert.image}
            alt={selectedCert.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
