import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} Amritanshu Yadav. Built with Next.js & Tailwind.
                    </p>
                </div>

                {/* System Status Indicators */}
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground bg-black/20 px-4 py-2 rounded-full border border-white/5">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>All Systems Operational</span>
                    </div>
                    <span className="text-white/10">|</span>
                    <span>v2.0.0</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
