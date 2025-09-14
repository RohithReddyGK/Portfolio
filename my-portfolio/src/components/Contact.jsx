// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_pxlrxum",   
        "template_3fbu1ud",  
        formRef.current,
        "bBCmodAIQK9hH3r1Q"    
      )
      .then(
        () => {
          setLoading(false);
          setMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessage("❌ Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors font-sans"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Have a question, project idea, or just want to say hello? Feel free to
          reach out. I’ll get back to you as soon as possible!
        </motion.p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Mail className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              gkrohithreddy@gmail.com
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <MapPin className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bengaluru, Karnataka
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none mb-6"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:from-blue-500 hover:to-purple-500 transition disabled:opacity-70"
          >
            <Send size={18} /> {loading ? "Sending..." : "Send Message"}
          </button>
          {message && (
            <p className="text-center mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              {message}
            </p>
          )}
        </motion.form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com/rohithreddygk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:shadow-lg transition"
          >
            <Github className="h-6 w-6 text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohithreddygk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:shadow-lg transition"
          >
            <Linkedin className="h-6 w-6 text-blue-700" />
          </a>
        </div>
      </div>
    </section>
  );
}
