"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HoverPreviewProps {
    children: React.ReactNode;
    mediaSrc?: string;
    type?: "image" | "video";
    alt?: string;
}

export function HoverPreview({ children, mediaSrc, type = "image", alt = "Preview" }: HoverPreviewProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    if (!mediaSrc) return <>{children}</>;

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="relative inline-block w-full cursor-help group"
        >
            {children}

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 pointer-events-none"
                        style={{
                            left: "50%",
                            bottom: "100%",
                            transform: "translateX(-50%)",
                            marginBottom: "12px",
                        }}
                    >
                        <div className="p-2 bg-popover/80 backdrop-blur-md border border-border rounded-xl shadow-xl w-64 h-40 overflow-hidden">
                            {type === "image" ? (
                                <div className="relative w-full h-full rounded-lg overflow-hidden">
                                    <Image
                                        src={mediaSrc}
                                        alt={alt}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            ) : (
                                <video
                                    src={mediaSrc}
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            )}
                        </div>
                        {/* Arrow */}
                        <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-3 h-3 bg-popover/80 backdrop-blur-md border-r border-b border-border rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
