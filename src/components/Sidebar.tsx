"use client";

import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiDownload, FiPhone } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { href: "https://linkedin.com/in/preetam-pujari", icon: FiLinkedin, label: "LinkedIn" },
    { href: "https://github.com/preetam-pujari", icon: FiGithub, label: "GitHub" },
    { href: "mailto:preetam.naik3@gmail.com", icon: FiMail, label: "Email" },
];

export function Sidebar() {
    return (
        <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[35%] xl:w-[30%] flex flex-col justify-between p-8 lg:p-12 bg-card border-b lg:border-b-0 lg:border-r border-border">
            {/* Header */}
            <div>
                {/* Top bar with theme toggle */}
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                        Portfolio
                    </span>
                    <ThemeToggle />
                </div>

                {/* Name & Title */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl lg:text-4xl font-semibold text-foreground mb-2">
                        Preetam Pujari
                    </h1>
                    <p className="text-lg text-accent font-medium mb-3">
                        GenAI Engineer
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        your avg daily genai enthusiast who ships RAG systems, agents & LLM apps
                    </p>
                </motion.div>

                {/* Navigation */}
                <nav className="mt-10 hidden lg:block">
                    <ul className="space-y-3">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                            >
                                <a
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors text-sm link-underline"
                                >
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Footer */}
            <div className="mt-8 lg:mt-0">
                {/* Social Links */}
                <div className="flex items-center gap-4 mb-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                            aria-label={link.label}
                        >
                            <link.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Resume Download */}
                <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                    <FiDownload className="w-4 h-4" />
                    Download Resume
                </a>

                {/* Now Building Widget */}
                <div className="mt-6 p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Currently building</p>
                    <p className="text-sm text-foreground font-medium">PathPilot AI Agent 🚀</p>
                </div>
            </div>
        </aside>
    );
}
