// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      period: "Sep 2025 - Present",
      description: "My personal portfolio website. Built with React, Tailwind CSS, and Framer Motion for smooth animations. Showcases Full Stack Development and AI/ML projects with interactive UI.",
      skills: ["React.js", "TailwindCSS", "Framer Motion", "EmailJS", "Netlify"],
      github: "https://github.com/RohithReddyGK/Portfolio",
      live: "https://rohith-portfolio-gk.netlify.app/",
      image: "/projects/Portfolio.png"
    },
    {
      title: "Cost of Living Analyzer",
      org: "AMC Engineering College",
      period: "Oct – Dec 2024",
      description:
        "Compares global cost of living using BeautifulSoup scraping and Chart.js visualization. Built with React + Django backend.",
      skills: ["React.js", "Django", "Python", "REST APIs", "Chart.js", "TailwindCSS"],
      github:
        "https://github.com/RohithReddyGK/Cost-of-Living-Analyzer-Global-Insights-With-Interactive-Data-Visualization",
      live: "#",
      image: "/projects/Cost of Living Analyzer.png"
    },
    {
      title: "AI-Based Learning Style Predictor",
      org: "Edunet Foundation",
      period: "Jun 2025",
      description:
        "An AI-powered system that personalizes learning by predicting whether users are Visual, Auditory, or Kinesthetic learners. Includes tailored study tips and resources.",
      skills: ["Python", "Machine Learning", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/RohithReddyGK/AI-Based-Learning-Style-Predictor",
      live: "https://ai-based-learning-style-predictor-kgqy7zfx4dmnpcwxdyqddy.streamlit.app/",
      image: "/projects/AI-Based Learning Style Predictor.png"
    },
    {
      title: "Project Portfolio Grid",
      org: "AMC Engineering College",
      period: "May 2025",
      description:
        "A responsive 3×3 project grid showcasing 9 JavaScript-based mini-projects. Built with HTML, CSS, and JS for an interactive and clean UI.",
      skills: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/RohithReddyGK/Project-Portfolio-Grid",
      live: "https://js-playground-hub.netlify.app/",
      image: "/projects/Project Portfolio Grid.png"
    },
    {
      title: "Job Exam Syllabus Website",
      org: "FreeJobLink",
      period: "Feb – Mar 2025",
      description:
        "Responsive web app that provides structured syllabi for SSC, UPSC, Banking, and PSC exams with collapsible sidebar and dynamic rendering.",
      skills: ["HTML", "CSS", "JavaScript", "JSON"],
      github: "https://github.com/RohithReddyGK/Job-Exam-Syllabus",
      live: "https://job-exam-syllabus.netlify.app/",
      image: "/projects/Job Exam Syllabus.png"
    },
    {
      title: "Interactive Java Applications",
      org: "AMC Engineering College",
      period: "May – Jul 2024",
      description:
        "Java Swing + Servlets projects including login systems, application forms, student details, and creative UI simulations.",
      skills: ["Java Swing", "Servlets", "JSP", "HTML", "CSS"],
      github:
        "https://github.com/RohithReddyGK/Interactive-Java-Applications-Using-Swing-and-Servlets",
      live: "#",
      image: "/projects/Interactive Java Applications.png"
    },
    {
      title: "AI-Powered Health Assistant",
      org: "Edunet Foundation",
      period: "Jan – Feb 2025",
      description:
        "Chatbot powered by Falcon-7B-Instruct for medical assistance. Identifies symptoms, suggests solutions, and provides precautionary measures.",
      skills: ["Python", "Streamlit", "Transformers", "NLP", "Requests"],
      github: "https://github.com/RohithReddyGK/AI-Powered-Health-Assistant",
      live: "https://rohithreddygk-ai-powered-health-assistant-aichatbot-wd5ka5.streamlit.app/",
      image: "/projects/AI-Powered Health Assistant.png"
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
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const cardLink = project.live !== "#" ? project.live : project.github;
            return (
              <motion.a
                key={idx}
                href={cardLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col overflow-hidden group"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {/* Project Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {project.org} • {project.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-700 text-blue-800 dark:text-blue-200 text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-4">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-md hover:scale-105 transform transition"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium shadow-md hover:scale-105 transform transition"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
