"use client";

import { motion } from "framer-motion";
import { HoverPreview } from "../HoverPreview";

const experiences = [
    {
        title: "HR Head",
        company: "Street Cause",
        type: "National NGO",
        period: "Jan 2024 — Dec 2024",
        location: "Hyderabad, India",
        description: "Led recruitment initiatives, managed team coordination, and improved organizational workflows through process automation.",
    },
    {
        title: "AR Head",
        company: "Student Force",
        type: "Technical Club",
        period: "Aug 2023 — Dec 2023",
        location: "Hyderabad, India",
        description: "Coordinated technical activities and mentored junior members in programming concepts.",
    },
];

export function Experience() {
    return (
        <section id="experience" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-foreground mb-6">Experience</h2>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <HoverPreview key={exp.company} mediaSrc="/assets/images/experience-placeholder.svg">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-5 bg-card border border-border rounded-lg card-hover"
                            >
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                    <div>
                                        <h3 className="text-lg font-medium text-foreground">{exp.title}</h3>
                                        <p className="text-accent">
                                            {exp.company} <span className="text-muted-foreground">· {exp.type}</span>
                                        </p>
                                    </div>
                                    <div className="text-right text-sm text-muted-foreground">
                                        <p>{exp.period}</p>
                                        <p>{exp.location}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                            </motion.div>
                        </HoverPreview>
                    ))
                    }
                </div>
            </motion.div>
        </section>
    );
}
