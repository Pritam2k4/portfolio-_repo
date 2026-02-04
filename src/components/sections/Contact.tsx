"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiSend } from "react-icons/fi";

export function Contact() {
    return (
        <section id="contact" className="section border-b-0 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm always open to chatting about AI, RAG systems, interesting projects,
                    or potential opportunities. Drop me a line!
                </p>

                <div className="space-y-3 mb-8">
                    <a
                        href="mailto:preetam.naik3@gmail.com"
                        className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                    >
                        <FiMail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        <span className="text-foreground">preetam.naik3@gmail.com</span>
                    </a>

                    <a
                        href="tel:+919676290504"
                        className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                    >
                        <FiPhone className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        <span className="text-foreground">+91 9676290504</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/preetam-naik2k4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                    >
                        <FiLinkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        <span className="text-foreground">linkedin.com/in/preetam-naik2k4</span>
                    </a>
                </div>

                <a
                    href="mailto:preetam.naik3@gmail.com?subject=Let's%20talk%20AI"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                    <FiSend className="w-4 h-4" />
                    Let's Talk AI
                </a>

                <p className="text-xs text-muted-foreground mt-8">
                    Built with Next.js, Tailwind CSS, and lots of ☕
                </p>
            </motion.div>
        </section>
    );
}
