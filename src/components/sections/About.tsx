"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-foreground mb-6">About</h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Hey! I'm a final-year B.Tech student in Computer Science (AI/ML) at VNR VJIET, Hyderabad.
                        I spend most of my time building things that actually work — RAG systems, LLM-powered apps,
                        and AI agents that solve real problems.
                    </p>

                    <p>
                        I'm not here for the buzzwords. I care about shipping production-ready code,
                        understanding how things break, and making AI that's actually useful (not just demo-able).
                    </p>

                    <p>
                        Right now, I'm looking for internships or entry-level roles at AI startups where
                        I can own projects end-to-end, learn from people smarter than me, and build stuff
                        that matters.
                    </p>

                    <p className="text-foreground font-medium pt-2">
                        If you're building something cool in AI, let's talk.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
