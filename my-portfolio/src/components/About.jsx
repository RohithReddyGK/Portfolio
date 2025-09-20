// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
    const skillCategories = [
        {
            title: "Languages & Frameworks",
            skills: ["Java", "Python", "DSA", "SQL", "JavaScript", "HTML5", "ReactJS", "CSS3", "Tailwind CSS", "Streamlit", "Chart.js"]
        },
        {
            title: "AI/ML & Data Science",
            skills: ["Transformers", "NLTK", "scikit-learn", "TensorFlow", "BeautifulSoup"]
        },
        {
            title: "Databases",
            skills: ["SQL", "MongoDB"]
        },
        {
            title: "Visualization Tools",
            skills: ["Tableau", "Power BI"]
        },
        {
            title: "Cloud & Deployment",
            skills: ["Git/GitHub", "Netlify", "Streamlit Cloud"]
        }
    ];

    const education = [
        { title: "B.E. – ISE", institute: "AMC Engineering College", year: "Dec 2022 – Present", cgpa: "9.13" },
        { title: "12th Standard", institute: "BGS PU College", year: "2022", percentage: "96.16%" },
        { title: "10th Standard", institute: "BGS Public School", year: "2020", percentage: "95.83%" },
    ];

    const experience = [
        {
            role: "AI Azure Intern", company: "Edunet Foundation", period: "May 2025 – June 2025",
            description: [
                "Built an AI-Based Learning Style Predictor using Random Forest Classifier and Streamlit for multi-class classification.",
                "Completed Microsoft AI Azure courses and gained knowledge in Azure ML and cloud AI deployments."
            ]
        },
        {
            role: "AI Intern", company: "Edunet Foundation", period: "Jan 2025 – Feb 2025",
            description: [
                "Developed an AI-driven medical query Chatbot using Python, Streamlit, Transformers, and NLTK.",
                "Applied NLP techniques and gained hands-on AI/ML development experience."
            ]
        },
        {
            role: "Full Stack Intern", company: "Prinston Smart Engineers", period: "July 2024 – Aug 2024",
            description: [
                "Designed and built web applications using HTML, CSS, JavaScript, React.js, and MongoDB.",
                "Strengthened full-stack development skills throughout the software lifecycle."
            ]
        },
    ];

    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 },
        }),
    };

    return (
        <section
            id="about"
            className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors font-sans"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Profile image */}
                <motion.div
                    className="flex justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl hover:shadow-2xl transition">
                        <img
                            src="/Profile Picture.jpg"
                            alt="profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Right: Text content */}
                <div className="space-y-6">
                    <motion.h2
                        className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-wide"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        className="text-gray-800 dark:text-gray-300 text-base md:text-lg leading-relaxed"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        Full Stack Developer with intermediate expertise in AI/ML, skilled in building scalable web applications,
                        intelligent chatbots, and cloud-based AI solutions.
                    </motion.p>

                    {/* Skills */}
                    <div>
                        <motion.h3
                            className="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-wide"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            Skills
                        </motion.h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {skillCategories.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    className="space-y-1"
                                    custom={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                >
                                    <p className="font-medium text-gray-900 dark:text-white mb-1">{category.title}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-700 text-blue-800 dark:text-blue-200 font-medium text-sm hover:scale-105 transition-transform cursor-default shadow-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience & Education */}
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {/* Experience */}
                        <div>
                            <motion.h4
                                className="font-semibold text-gray-900 dark:text-white mb-3 text-lg tracking-wide"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                Experience
                            </motion.h4>
                            <div className="space-y-4">
                                {experience.map((exp, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                                        custom={idx + 1}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                    >
                                        <p className="font-semibold text-gray-900 dark:text-white">{exp.role}</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.company}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs">{exp.period}</p>
                                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 text-sm space-y-1">
                                            {exp.description.map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <motion.h4
                                className="font-semibold text-gray-900 dark:text-white mb-3 text-lg tracking-wide"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                Education
                            </motion.h4>
                            <div className="space-y-4">
                                {education.map((edu, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                                        custom={idx + 1}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                    >
                                        <p className="font-semibold text-gray-900 dark:text-white">{edu.title}</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.institute}</p>
                                        {edu.cgpa && <p className="text-gray-500 dark:text-gray-400 text-xs">CGPA: {edu.cgpa}</p>}
                                        {edu.percentage && <p className="text-gray-500 dark:text-gray-400 text-xs">Percentage: {edu.percentage}</p>}
                                        <p className="text-gray-500 dark:text-gray-400 text-xs">{edu.year}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        className="mt-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <a
                            href="#projects"
                            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition transform hover:scale-105 shadow-md"
                        >
                            View Projects
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
