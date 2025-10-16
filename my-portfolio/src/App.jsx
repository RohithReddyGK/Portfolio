import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const sections = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    certificates: useRef(null),
    contact: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans relative min-h-screen">
      {/* SEO Tags */}
      <Helmet>
        <title>Rohith Reddy GK | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Rohith Reddy GK showcasing AI/ML, Web Development, and innovative projects."
        />
        <meta
          name="keywords"
          content="Rohith Reddy, AI, Machine Learning, React, Portfolio, Developer"
        />
        <meta name="author" content="Rohith Reddy GK" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://rohith-portfolio-gk.netlify.app/" />

        <meta property="og:title" content="Rohith Reddy GK | Portfolio" />
        <meta
          property="og:description"
          content="Showcasing my AI/ML and Web Development work."
        />
        <meta property="og:url" content="https://rohith-portfolio-gk.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Structured Data / Schema */}
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rohith Reddy G K",
          "url": "https://rohith-portfolio-gk.netlify.app/",
          "sameAs": [
            "https://www.linkedin.com/in/rohithreddygk/",
            "https://github.com/rohithreddygk"
          ],
          "jobTitle": "AI & Full Stack Developer",
          "image": "https://rohith-portfolio-gk.netlify.app/favicon.png",
          "description": "Portfolio of Rohith Reddy GK showcasing AI/ML and Web Development projects."
        }
      `}
        </script>
      </Helmet>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient bg-[length:400%_400%] -z-10" />

      <Header activeSection={activeSection} />

      <main className="pt-20 space-y-12">
        {/* Hero Section */}
        <section
          ref={sections.hero}
          id="hero"
          className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors"
        >
          <Hero />
        </section>

        {/* About Section */}
        <section
          ref={sections.about}
          id="about"
          className="py-16 mx-4 md:mx-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg"
        >
          <About />
        </section>

        {/* Projects Section */}
        <section
          ref={sections.projects}
          id="projects"
          className="py-16 mx-4 md:mx-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg"
        >
          <Projects />
        </section>

        {/* Certificates Section */}
        <section
          ref={sections.certificates}
          id="certificates"
          className="py-16 mx-4 md:mx-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg"
        >
          <Certificates />
        </section>

        {/* Contact Section */}
        <section
          ref={sections.contact}
          id="contact"
          className="py-16 mx-4 md:mx-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div >
  );
}

export default App;
