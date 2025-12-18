"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
            {/* Neural Network / Circuit Lines */}
            <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-primary" />
                <path d="M10,30 Q40,60 60,30 T90,70" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-blue-500" />
                <path d="M20,80 Q50,40 80,80" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-purple-500" />
            </svg>

            <motion.div
                animate={{ opacity: [0.03, 0.05, 0.03], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ opacity: [0.03, 0.05, 0.03], scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
            />
        </div>
    );
}

export function ProjectsBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
            {/* Chessboard Grid */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Chess Piece Silhouettes */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 opacity-[0.03] text-9xl font-black text-primary rotate-12 blur-sm"
            >
                ♟
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 opacity-[0.02] text-[12rem] font-black text-white -rotate-12 blur-sm"
            >
                ♜
            </motion.div>
        </div>
    );
}

export function AchievementsBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03)_0%,transparent_70%)]" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-500/5 rounded-full opacity-20 dashed-border"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-20"
            />
        </div>
    );
}

export function SkillsBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
            {/* Tech Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Binary / Matrix effect elements */}
            <div className="absolute top-20 left-20 opacity-[0.04] text-xs font-mono text-primary">
                010010101<br />101001010<br />001010101
            </div>
        </div>
    );
}

export function EducationBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl opacity-20" />
        </div>
    );
}
