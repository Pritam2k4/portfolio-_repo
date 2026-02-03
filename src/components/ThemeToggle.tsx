"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-lg bg-muted" aria-label="Toggle theme">
                <div className="w-4 h-4" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-muted hover:bg-border transition-colors"
            aria-label="Toggle theme"
        >
            {resolvedTheme === "dark" ? (
                <FiSun className="w-4 h-4 text-foreground" />
            ) : (
                <FiMoon className="w-4 h-4 text-foreground" />
            )}
        </button>
    );
}
