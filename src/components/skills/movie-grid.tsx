"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Clapperboard, Database, Globe, Server, Code, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
    {
        domain: "Computer Vision",
        icon: <EyeIcon className="w-12 h-12 text-blue-400" />,
        tools: ["CNNs", "TensorFlow", "PyTorch", "OpenCV", "TFLite"],
        desc: "Image classification, medical imaging, edge deployment.",
        color: "blue",
    },
    {
        domain: "Generative AI",
        icon: <BrainCircuitIcon className="w-12 h-12 text-purple-400" />,
        tools: ["LLMs", "LangChain", "Gemini API", "RAG", "Agents"],
        desc: "Multimodal reasoning, agentic workflows, inference pipelines.",
        color: "purple",
    },
    {
        domain: "Backend Engineering",
        icon: <ServerIcon className="w-12 h-12 text-emerald-400" />,
        tools: ["Django", "FastAPI", "Flask", "REST APIs", "Python"],
        desc: "Secure, scalable backend systems and API design.",
        color: "emerald",
    },
    {
        domain: "Databases & Systems",
        icon: <DatabaseIcon className="w-12 h-12 text-orange-400" />,
        tools: ["PostgreSQL", "MongoDB", "Firebase", "Linux", "Git"],
        desc: "Production-grade data handling and system design.",
        color: "orange",
    },
    {
        domain: "Data & Analytics",
        icon: <ChartBarIcon className="w-12 h-12 text-pink-400" />,
        tools: ["SQL", "Pandas", "Excel", "Visualization", "Python"],
        desc: "Structured insights and reporting.",
        color: "pink",
    },
];

// Custom Icons helper
function EyeIcon(props: any) { return <span {...props}>👁️</span> }
function BrainCircuitIcon(props: any) { return <span {...props}>🧠</span> }
function ServerIcon(props: any) { return <span {...props}>⚙️</span> }
function DatabaseIcon(props: any) { return <span {...props}>🗄️</span> }
function ChartBarIcon(props: any) { return <span {...props}>📊</span> }


import { SkillsBackground } from "@/components/ui/background-visuals";

export function MovieSkills() {
    return (
        <section id="skills" className="py-24 bg-black/40 relative overflow-hidden">
            <SkillsBackground />
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
                        <Clapperboard size={40} className="text-primary" /> Skills
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <FlipCard key={skill.domain} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FlipCard({ skill, index }: { skill: any; index: number }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="h-[300px] perspective-1000 cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="relative w-full h-full preserve-3d transition-all duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-card/10 border border-white/10 rounded-xl backdrop-blur-sm p-6 shadow-xl">
                    <div className="mb-6 p-4 rounded-full bg-white/5 shadow-inner">
                        {skill.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-center tracking-tight">{skill.domain}</h3>
                    <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">Hover to reveal</p>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-card border border-primary/20 rounded-xl p-6 shadow-2xl bg-gradient-to-br from-background to-black"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="text-center space-y-4">
                        <h3 className={`text-xl font-bold text-${skill.color}-400`}>{skill.domain}</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {skill.tools.map((t: string) => (
                                <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-300 font-mono">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-white/10">
                            {skill.desc}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
