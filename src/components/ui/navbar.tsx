"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial state from HTML class
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (root.classList.contains("dark")) {
            root.classList.remove("dark");
            setIsDark(false);
        } else {
            root.classList.add("dark");
            setIsDark(true);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors">
                    Amritanshu <span className="text-primary">Yadav</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    <button 
                        onClick={toggleTheme} 
                        className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
                        <Link href="https://drive.google.com/file/d/13VDMnp0VIXsz1seBq1XAzNJNQo_NTnrs/view?usp=sharing" target="_blank">Resume</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <button 
                        onClick={toggleTheme} 
                        className="text-muted-foreground p-2"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className="text-foreground p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-sm md:hidden flex flex-col items-center py-8 gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="https://drive.google.com/file/d/13VDMnp0VIXsz1seBq1XAzNJNQo_NTnrs/view?usp=sharing" target="_blank">Resume</Link>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
