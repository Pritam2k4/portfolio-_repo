"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const education = [
    {
        degree: "B.Tech in Computer Science & Engineering (AI/ML)",
        institution: "VNR VJIET",
        location: "Hyderabad, India",
        period: "Aug 2022 — Apr 2026",
        gpa: "7.5",
    },
    {
        degree: "Intermediate (Physics, Chemistry, Mathematics)",
        institution: "Sri Chaitanya Junior College",
        location: "Hyderabad, India",
        period: "Jan 2020 — Jan 2022",
        gpa: "8.0",
    },
    {
        degree: "Class 10th (ICSE)",
        institution: "Johnson Grammar School",
        location: "Hyderabad, India",
        period: "Jan 2019 — Jan 2020",
        gpa: "7.5",
    },
];

const certifications = [
    {
        name: "AI Engineer Core Track",
        issuer: "LLM Engineering, RAG, QLoRA, Agents",
        highlight: true,
    },
    {
        name: "100 Days of Python",
        issuer: "Udemy",
        highlight: false,
    },
    {
        name: "Complete Data Science, ML, DL, NLP Bootcamp",
        issuer: "Udemy",
        highlight: false,
    },
    {
        name: "Social Media and Privacy",
        issuer: "NPTEL",
        highlight: false,
    },
];

export function Education() {
    return (
        <section id="education" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-foreground mb-6">Education</h2>

                <div className="space-y-4 mb-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4 bg-card border border-border rounded-lg"
                        >
                            <div className="flex flex-wrap justify-between items-start gap-2">
                                <div>
                                    <h3 className="font-medium text-foreground">{edu.degree}</h3>
                                    <p className="text-sm text-accent">{edu.institution}</p>
                                    <p className="text-xs text-muted-foreground">{edu.location}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                                    <p className="text-sm font-medium text-foreground">GPA: {edu.gpa}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                    <FiAward className="w-5 h-5 text-accent" />
                    Certifications
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={`p-3 rounded-lg border ${cert.highlight
                                    ? "bg-accent/5 border-accent/20"
                                    : "bg-card border-border"
                                }`}
                        >
                            <p className={`text-sm font-medium ${cert.highlight ? "text-accent" : "text-foreground"}`}>
                                {cert.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
