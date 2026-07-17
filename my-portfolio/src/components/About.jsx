// src/components/About.jsx
import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {

    const [openDoc, setOpenDoc] = useState(null);

    /* SKILLS */
    const skills = [
        {
            title: "Languages",
            items: ["Java", "Python", "JavaScript", "SQL", "NoSQL"]
        },
        {
            title: "Frameworks & Libraries",
            items: ["React.js", "Tailwind CSS", "Chart.js", "Recharts", "Flask", "Django"]
        },
        {
            title: "Databases",
            items: ["Oracle", "MongoDB"]
        },
        {
            title: "Tools & Platforms",
            items: ["Git", "GitHub", "Power BI", "Tableau", "Docker", "Version Control (Git/GitHub)"]
        },
        {
            title: "Core Competencies",
            items: ["DSA", "OOPS", "REST APIs", "ML Model Training & Deployment", "CI/CD", "Cloud Deployment"]
        }
    ];

    /* EDUCATION */
    const education = [
        { title: "B.E. – ISE", institute: "AMC Engineering College", year: "Dec 2022 – Jul 2026", cgpa: "9.22" },
        { title: "12th Standard", institute: "BGS PU College", year: "2022", percentage: "96.16%" },
        { title: "10th Standard", institute: "BGS Public School", year: "2020", percentage: "95.83%" },
    ];

    /* EXPERIENCE */
    const experience = [
        {
            role: "Project Associate",
            company: "HTIC, IIT Madras",
            logo: "/Company Logos/HTIC IITM Logo.png",
            period: "Jun 2026 – Present",
            description: [
                "Developing deep learning models for 3D reconstruction of anatomical structures from medical imaging data to support surgical navigation.",
                "Designing, training, and optimizing AI/ML deep learning models to solve real-time clinical problems in image-guided robotic surgery and diagnostic imaging."
            ]
        },
        {
            role: "Project Intern",
            company: "HTIC, IIT Madras",
            logo: "/Company Logos/HTIC IITM Logo.png",
            period: "Feb 2026 – May 2026",
            offerLetter: "/docs/project-intern-offer-letter.pdf",
            certificate: "/docs/project-intern-certificate.pdf",
            description: [
                "Worked with the IGRS (Image-Guided Robotic Surgery) team on research-oriented medical technology systems, gaining hands-on exposure to clinical-grade medical robotics and imaging systems."
            ]
        },
        {
            role: "AI Internship",
            company: "Infosys Springboard",
            logo: "/Company Logos/InfosysSpringboard Logo.png",
            period: "Feb 2026 – Apr 2026",
            offerLetter: "/docs/ai-internship-offer-letter.pdf",
            certificate: "/docs/Infosys_Springboard_Certificate.pdf",
            description: [
                "Designed and developed an intelligent \"AI-Driven Code Reviewer\" system as part of the Infosys Springboard AI Virtual Internship, analyzing source code and generating automated review suggestions using AI-based techniques.",
                "Progressed through 4 structured milestones covering project architecture, AI concepts, and implementation strategies; independently carried out complete project design, development, and integration."
            ]
        },
        {
            role: "AI Azure Intern",
            company: "Edunet Foundation",
            logo: "/Company Logos/EdunetFoundation Logo.png",
            period: "May 2025 – June 2025",
            offerLetter: "/docs/ai-azure-offer-letter.pdf",
            certificate: "/docs/ai-azure-certificate.pdf",
            description: [
                "Built an AI-Based Learning Style Predictor using Random Forest Classifier and Streamlit for multi-class classification.",
                "Completed Microsoft AI Azure courses and gained knowledge in Azure ML and cloud AI deployments."
            ]
        },
        {
            role: "AI Intern",
            company: "Edunet Foundation",
            logo: "/Company Logos/EdunetFoundation Logo.png",
            period: "Jan 2025 – Feb 2025",
            offerLetter: "/docs/ai-intern-offer-letter.pdf",
            certificate: "/docs/ai-intern-certificate.pdf",
            description: [
                "Developed an AI-driven medical query Chatbot using Python, Streamlit, Transformers, and NLTK.",
                "Applied NLP techniques and gained hands-on AI/ML development experience."
            ]
        },
        {
            role: "Full Stack Intern",
            company: "Prinston Smart Engineers",
            logo: "/Company Logos/PrinstonSmartEngineers Logo.jpg",
            period: "July 2024 – Aug 2024",
            offerLetter: "/docs/full-stack-web-development-offer-letter.pdf",
            certificate: "/docs/full-stack-web-development-certificate.pdf",
            description: [
                "Designed and built web applications using HTML, CSS, JavaScript, React.js, and MongoDB.",
                "Strengthened full-stack development skills throughout the software lifecycle."
            ]
        }
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };

    return (
        <section
            id="about"
            className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors font-sans"
        >
            <div className="max-w-6xl mx-auto space-y-16">

                <div className="flex flex-col items-center text-center space-y-6">

                    <motion.h2
                        className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-wide"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <img
                            src="/Profile_Picture.png"
                            alt="profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </motion.div>

                    <motion.p
                        className="max-w-3xl text-gray-800 dark:text-gray-300 text-base md:text-lg leading-relaxed"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        I work at the intersection of <strong>Artificial Intelligence</strong>, <strong>Medical Imaging</strong>, and <strong>Software Engineering</strong> at <strong>HTIC, IIT Madras</strong>. My focus is on developing deep learning solutions for healthcare while building scalable software that bridges research and real-world applications.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 items-start">

                    <div className="space-y-6">
                        <motion.h3
                            className="text-2xl font-semibold text-gray-900 dark:text-white tracking-wide"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Skills
                        </motion.h3>

                        {skills.map((group, idx) => (
                            <motion.div
                                key={idx}
                                className="space-y-2"
                                custom={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <p className="font-medium text-gray-900 dark:text-white">
                                    {group.title}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map(item => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-700 text-blue-800 dark:text-blue-200 text-sm font-medium shadow-sm hover:scale-150 hover:shadow-md transition"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden md:flex justify-center">
                        <div className="relative min-h-[600px] w-[3px]">

                            {/* Main line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent dark:via-purple-500 opacity-80" />

                            {/* Glow */}
                            <div className="absolute inset-0 blur-md bg-gradient-to-b from-transparent via-blue-400 to-transparent dark:via-purple-400 opacity-50" />

                            {/* Center accent dot */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-blue-800 to-purple-800 shadow-lg shadow-blue-400/50 dark:shadow-purple-800/40 animate-pulse" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <motion.h3
                            className="text-2xl font-semibold text-gray-900 dark:text-white tracking-wide"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Education
                        </motion.h3>

                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                className="p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-xl transition"
                                custom={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <p className="font-semibold text-gray-900 dark:text-white">{edu.title}</p>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.institute}</p>
                                {edu.cgpa && <p className="text-xs text-gray-500">CGPA: {edu.cgpa}</p>}
                                {edu.percentage && <p className="text-xs text-gray-500">Percentage: {edu.percentage}</p>}
                                <p className="text-xs text-gray-500">{edu.year}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <motion.h3
                        className="text-2xl font-semibold text-gray-900 dark:text-white tracking-wide mb-6"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Experience
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                className="relative p-6 pl-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                                custom={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >

                                {exp.logo && (
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="absolute top-4 right-4 w-10 h-10 md:w-20 md:h-20 object-contain opacity-100 transition" />
                                )}

                                <p className="font-semibold text-gray-900 dark:text-white">{exp.role}</p>
                                <span className="inline-block mt-1 mb-2 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">{exp.company}</span>
                                <p className="text-xs text-gray-500 mb-2">{exp.period}</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                    {exp.description.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>

                                {/* Buttons */}
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {exp.offerLetter && (
                                        <button
                                            onClick={() => setOpenDoc(exp.offerLetter)}
                                            className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:scale-105 transition"
                                        >
                                            Offer Letter
                                        </button>
                                    )}

                                    {exp.certificate && (
                                        <button
                                            onClick={() => setOpenDoc(exp.certificate)}
                                            className="px-4 py-1.5 text-sm font-medium rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-500/40 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                                        >
                                            Certificate
                                        </button>
                                    )}
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {openDoc && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Modal Container */}
                        <motion.div
                            className="relative w-[90%] max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setOpenDoc(null)}
                                className="absolute top-4 right-1 z-10 text-gray-100 dark:text-gray-100 hover:text-red-900 dark:hover:text-red-900 text-2xl"
                            >
                                ✕
                            </button>

                            {/* Document Viewer */}
                            {openDoc.endsWith(".pdf") ? (
                                <iframe
                                    src={openDoc}
                                    title="Document Viewer"
                                    className="w-full h-full"
                                />
                            ) : (
                                <img
                                    src={openDoc}
                                    alt="Document"
                                    className="w-full h-full object-contain bg-black"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
