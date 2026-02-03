"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const featuredProjects = [
    {
        title: "LLM Document Processing System",
        subtitle: "HackRx 6.0",
        description: "Built a RAG-powered document processing system for clause retrieval and structured Q&A. Returns structured JSON with decisions, amounts, justifications, and clause mappings.",
        tech: ["FastAPI", "Ollama LLM", "FAISS", "MiniLM", "Python"],
        github: "https://github.com/preetam-pujari",
        demo: null,
        period: "Nov 2025 — Present",
        highlights: [
            "Designed REST endpoints; validated responses using Postman",
            "Implemented MiniLM embeddings with FAISS for semantic search",
            "Tuned prompts for accuracy on legal clause extraction",
        ],
    },
    {
        title: "PathPilot",
        subtitle: "Personalized Learning Roadmap AI Agent",
        description: "An LLM-powered assistant that generates personalized learning roadmaps based on user goals, interests, and career path. Uses RAG with web scraping to fetch and rank courses from Udemy and Coursera.",
        tech: ["Python", "LangChain", "Google Gemini API", "Streamlit", "RAG"],
        github: "https://github.com/preetam-pujari",
        demo: null,
        period: "Jul 2025 — Present",
        highlights: [
            "Integrated RAG with web scraping for real-time course recommendations",
            "Built LangChain agents with memory for ongoing conversations",
            "Context-aware suggestions for career domains and tech stacks",
        ],
    },
];

export function Projects() {
    return (
        <section id="projects" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-foreground mb-6">Projects</h2>

                <div className="space-y-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-card border border-border rounded-lg card-hover"
                        >
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                <div>
                                    <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                                    <p className="text-accent text-sm">{project.subtitle}</p>
                                </div>
                                <span className="text-xs text-muted-foreground">{project.period}</span>
                            </div>

                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            {/* Highlights */}
                            <ul className="space-y-1.5 mb-4">
                                {project.highlights.map((highlight, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-accent mt-1.5">•</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
                                >
                                    <FiGithub className="w-4 h-4" />
                                    View Code
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
                                    >
                                        <FiExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
