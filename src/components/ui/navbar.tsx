"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-white/10">
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
                    <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                        <Link href="https://drive.google.com/file/d/13VDMnp0VIXsz1seBq1XAzNJNQo_NTnrs/view?usp=sharing" target="_blank">Resume</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl md:hidden flex flex-col items-center py-8 gap-6"
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
