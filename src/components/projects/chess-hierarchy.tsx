import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    Code,
    Eye,
    Layout,
    MessageSquare,
    Activity,
    Video,
    ShoppingCart,
    Database,
    Sparkles,
    Terminal,
    Globe,
    Brain,
    Film,
    BookOpen,
    Github
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Project Data
type ProjectType = "King" | "Queen" | "Rook";

interface ProjectLink {
    type: "github" | "live";
    url: string;
    label?: string;
}

interface Project {
    id: string;
    title: string;
    type: ProjectType;
    role: string;
    tech: string[];
    description: string;
    details: {
        problem: string;
        solution: string;
        outcome: string;
    };
    icon: any;
    color: string;
    links: ProjectLink[];
}

const projects: Project[] = [
    // --- Tier 1: Flagship (Kings) ---
    {
        id: "cyberguardai",
        title: "CyberGuardAI",
        type: "King",
        role: "Cybercrime Resolution Platform",
        tech: ["LangGraph", "LLMs", "Multi-Agent Systems"],
        description: "Agentic cybersecurity platform assisting victims of UPI fraud, identity theft, and ransomware.",
        details: {
            problem: "Complex forensics and recovery for cybercrime victims.",
            solution: "Multi-agent workflow orchestrating web search and reasoning tools for investigation.",
            outcome: "Source-grounded responses with citation validation to reduce hallucination risk."
        },
        icon: Shield,
        color: "text-red-500",
        links: [
            { type: "github", url: "https://github.com/TechNxt05/CyberGuard" },
            { type: "live", url: "https://cyber-guard-liard.vercel.app/" }
        ]
    },
    {
        id: "ragops",
        title: "RAGOps",
        type: "King",
        role: "Enterprise-Grade RAG Platform",
        tech: ["Next.js", "FastAPI", "LangChain", "PostgreSQL"],
        description: "Secure document ingestion platform preventing cross-domain data leakage.",
        details: {
            problem: "Data leakage across Legal, HR, and Engineering knowledge bases.",
            solution: "Project-level knowledge isolation and RBAC with explainable AI chat.",
            outcome: "Chunk-level citations and multi-model orchestration matching latency & quality."
        },
        icon: Database,
        color: "text-blue-500",
        links: [
            { type: "github", url: "https://github.com/TechNxt05/RAGOps" }
        ]
    },
    {
        id: "cvision",
        title: "Cvision",
        type: "King",
        role: "AI Cataract Detection",
        tech: ["Flutter", "TFLite", "MobileNetV2", "IEEE Published"],
        description: "Flagship offline-first medical AI. Real-world impact with clinically validated deployment.",
        details: {
            problem: "Lack of accessible eye-care in remote areas.",
            solution: "Quantized CNN pipeline running locally on Android.",
            outcome: "95%+ Accuracy, low-latency edge inference."
        },
        icon: Eye,
        color: "text-amber-500",
        links: [
            { type: "github", url: "https://github.com/TechNxt05/Cvision" }
        ]
    },

    // --- Tier 2: Strong Production (Queens) ---
    {
        id: "tribebharat",
        title: "TribeBharat",
        type: "Queen",
        role: "Production E-commerce Platform",
        tech: ["Django", "React", "PostgreSQL", "Razorpay"],
        description: "Contributed to a live Django + React e-commerce platform handling payments and admin workflows.",
        details: {
            problem: "Need for scalable specialized marketplace with complex admin flows.",
            solution: "Feature integration, OTP/JWT authentication, and AWS EC2 deployment with Nginx.",
            outcome: "Secure, reliable, and scalable production hosting."
        },
        icon: ShoppingCart,
        color: "text-orange-400",
        links: [
            { type: "live", url: "https://www.tribebharat.com" }
        ]
    },
    {
        id: "amazon-intel",
        title: "Amazon Intelligence",
        type: "Queen",
        role: "Applied GenAI & Data",
        tech: ["FAISS", "Gemini API", "NLP", "React"],
        description: "Vector-search powered recommendation engine with 100M+ review analysis.",
        details: {
            problem: "Standard recs lack explainability.",
            solution: "Hybrid RAG (Vector + LLM) for transparent suggestions.",
            outcome: "High-precision, explainable product discovery."
        },
        icon: Globe,
        color: "text-purple-400",
        links: [
            { type: "github", url: "https://github.com/TechNxt05/Amazon-Recommendation-System", label: "RecSys" },
            { type: "github", url: "https://github.com/TechNxt05/Amazon-Review-Analysis-2018", label: "Analysis" }
        ]
    },
    {
        id: "visaire",
        title: "Visaire",
        type: "Queen",
        role: "GenAI Pipeline",
        tech: ["LangGraph", "Manim", "LLM Agents"],
        description: "Innovative text-to-animation generator using multi-agent workflows.",
        details: {
            problem: "Video creation is manual & slow.",
            solution: "Agentic code generation pipeline.",
            outcome: "Automated educational video production."
        },
        icon: Video,
        color: "text-cyan-400",
        links: [
            { type: "github", url: "https://github.com/TechNxt05/Visiare" }
        ]
    },

    // --- Tier 3: Supporting (Rooks) ---
    {
        id: "healthai",
        title: "HealthAI",
        type: "Rook",
        role: "Multimodal Health Platform",
        tech: ["Gemini Vision", "RAG", "Next.js", "WebSockets"],
        description: "End-to-end GenAI healthcare system. Real-time consults & document intelligence.",
        details: {
            problem: "Fragmented medical data & slow retrieval.",
            solution: "Unified dashboard with VLM & Chat agents.",
            outcome: "Seamless doctor-patient communication."
        },
        icon: Activity,
        color: "text-emerald-400",
        links: [
            { type: "github", url: "https://github.com/TechNxt05/HealthAI" }
        ]
    }
];

import { useChat } from "@/context/chat-context";
import { ProjectsBackground } from "@/components/ui/background-visuals";

export function ChessHierarchy() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 bg-black/20 relative overflow-hidden">
            <ProjectsBackground />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center gap-4">
                        <span className="text-primary text-6xl">♟️</span> Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Engineering complexity disguised as simplicity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-3xl bg-[#0a0a0a] border-white/10 text-foreground">
                    {selectedProject && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-3 text-2xl">
                                    <selectedProject.icon className={`h-8 w-8 ${selectedProject.color}`} />
                                    {selectedProject.title}
                                </DialogTitle>
                                <DialogDescription className="text-muted-foreground text-base">
                                    {selectedProject.role}
                                </DialogDescription>
                            </DialogHeader>

                            <ScrollArea className="max-h-[60vh] pr-4">
                                <div className="space-y-6 pt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(tech => (
                                            <Badge key={tech} variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                                                <MessageSquare size={16} /> Problem
                                            </h4>
                                            <p className="text-muted-foreground">{selectedProject.details.problem}</p>
                                        </div>

                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h4 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                                                <Code size={16} /> Solution
                                            </h4>
                                            <p className="text-muted-foreground">{selectedProject.details.solution}</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                                                <Shield size={16} /> Outcome
                                            </h4>
                                            <p className="text-muted-foreground">{selectedProject.details.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
    const { openWithContext } = useChat();
    const isKing = project.type === "King";

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-2xl border bg-card/40 backdrop-blur-xl p-6 transition-all duration-300 ${isKing ? "border-amber-500/20 hover:border-amber-500/50" : "border-white/10 hover:border-primary/40"
                }`}
        >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isKing ? "from-amber-500 to-transparent" : "from-blue-500 to-transparent"
                }`} />

            <div className="relative flex flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <project.icon className={`h-6 w-6 ${project.color}`} />
                    </div>

                    <div className="flex gap-2">
                        {project.links.map((link, i) => (
                            <Button key={i} size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white" asChild>
                                <Link href={link.url} target="_blank">
                                    {link.type === 'github' ? <Github size={16} /> : <Globe size={16} />}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                        {project.title}
                        {isKing && <Badge variant="outline" className="border-amber-500/30 text-amber-400 bg-amber-500/5 text-[10px] tracking-widest uppercase">Flagship</Badge>}
                    </h3>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">{project.role}</p>
                    <p className="mt-3 text-sm text-gray-400 line-clamp-2">{project.description}</p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 font-mono">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 mt-2 border-t border-white/5">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-xs text-muted-foreground hover:text-white hover:bg-white/5"
                        onClick={onClick}
                    >
                        Deep Dive
                    </Button>
                    <Button
                        size="sm"
                        className="flex-1 text-xs bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                        onClick={() => openWithContext(`Tell me about the ${project.title} project. What is the architecture and ML logic?`)}
                    >
                        <Sparkles size={12} className="mr-2" />
                        Ask AI
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}

