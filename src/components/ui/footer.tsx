import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const emailAddress = "amritanshuy0503@gmail.com";

  return (
    <footer className="py-8 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-muted-foreground text-sm font-sans font-medium">
            &copy; {new Date().getFullYear()} Amritanshu Yadav &bull; <span className="text-gray-500 font-mono text-xs">Built for production-grade AI systems.</span>
          </p>
        </div>

        {/* System Status Indicators */}
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground bg-black/25 px-4 py-2 rounded-full border border-white/5 shadow-inner">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-white/90">All Systems Operational</span>
          </div>
          <span className="text-white/10">|</span>
          <span>v3.0.0</span>
        </div>

        {/* Action Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/TechNxt05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyan-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/amritanshu-yadav-6480662a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="text-muted-foreground hover:text-pink-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
