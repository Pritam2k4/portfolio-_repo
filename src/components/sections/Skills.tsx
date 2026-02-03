"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        name: "Programming Languages",
        skills: [
            { name: "Python", level: "expert" },
            { name: "SQL", level: "strong" },
            { name: "Java", level: "familiar" },
        ],
    },
    {
        name: "ML & AI Frameworks",
        skills: [
            { name: "PyTorch", level: "strong" },
            { name: "TensorFlow", level: "strong" },
            { name: "OpenCV", level: "familiar" },
            { name: "LangChain", level: "expert" },
        ],
    },
    {
        name: "Data Science",
        skills: [
            { name: "Pandas", level: "expert" },
            { name: "NumPy", level: "expert" },
            { name: "Matplotlib", level: "strong" },
            { name: "Seaborn", level: "strong" },
        ],
    },
    {
        name: "DevOps & Tools",
        skills: [
            { name: "Docker", level: "familiar" },
            { name: "Git/GitHub", level: "expert" },
            { name: "Streamlit", level: "expert" },
            { name: "AWS", level: "familiar" },
            { name: "FastAPI", level: "strong" },
        ],
    },
    {
        name: "AI Specializations",
        skills: [
            { name: "RAG Systems", level: "expert" },
            { name: "LLM Apps", level: "expert" },
            { name: "AI Agents", level: "expert" },
            { name: "Prompt Engineering", level: "expert" },
            { name: "NLP/Transformers", level: "strong" },
            { name: "Computer Vision", level: "familiar" },
        ],
    },
];

const levelStyles: Record<string, string> = {
    expert: "badge-expert",
    strong: "badge-strong",
    familiar: "",
};

export function Skills() {
    return (
        <section id="skills" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-foreground mb-6">Skills</h2>

                <div className="space-y-6">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: catIndex * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-sm font-medium text-muted-foreground mb-3">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`badge ${levelStyles[skill.level]}`}
                                        title={skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legend */}
                <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                        <span className="inline-block w-2 h-2 rounded-full bg-accent mr-1.5"></span> Expert
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 ml-4 mr-1.5"></span> Strong
                        <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground/30 ml-4 mr-1.5"></span> Familiar
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
