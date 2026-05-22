"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Shield, Github, ExternalLink, Bot, Terminal, Code, Cpu, Layers, BarChart2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useChat } from "@/context/chat-context";
import { useRecruiterMode } from "@/context/recruiter-context";
import Link from "next/link";
import { ThreeDTiltCard } from "@/components/ui/three-d-card";

interface Project {
  name: string;
  title: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  techStack: string[];
  links: { github?: string; live?: string; npm?: string };
  icon: React.ReactNode;
  accentClass: string;
  shadowClass: string;
  glowColor: string;
}

export function FlagshipProjects() {
  const { openWithContext } = useChat();
  const { isRecruiterMode } = useRecruiterMode();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const flagshipProjects: Project[] = [
    {
      name: "AuditAI",
      title: "AI Reliability & Observability Platform",
      tagline: "Datadog for LLM Agents",
      description: "A production-grade SaaS platform offering comprehensive observability, automated deterministic evaluations, and adversarial stress-testing for RAG systems and autonomous agent swarms.",
      metrics: [
        { label: "Evaluation", value: "5-Point Deterministic Engine" },
        { label: "Grounding Check", value: "TF-IDF Cosine Match" },
        { label: "Security Profile", value: "30+ Injection Vectors" }
      ],
      highlights: [
        "Replaced randomized LLM evaluations with fast, 100% reproducible deterministic algorithms.",
        "Engineered adversarial simulation suits executing context poisoning and PII leaks.",
        "Built FastAPI ingestion routes and clean Next.js observability dashboards."
      ],
      techStack: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "Docker", "SentenceTransformers"],
      links: {
        github: "https://github.com/TechNxt05/AuditAI",
        live: "https://audit-ai-eosin.vercel.app/"
      },
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      accentClass: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
      shadowClass: "shadow-cyan-glow/10",
      glowColor: "rgba(6, 182, 212, 0.12)"
    },
    {
      name: "Aegis-Agent",
      title: "Runtime Safety Middleware for AI Agents",
      tagline: "The Zero-Trust Firewall for LLM Workflows",
      description: "An open-source npm library acting as a security and evaluation middleware firewall, intercepting LLM agent inputs and outputs to enforce safety policies.",
      metrics: [
        { label: "Policy Modes", value: "Warn / Block / Rewrite" },
        { label: "Security Risk", value: "Weighted Risk Scoring" },
        { label: "Overhead", value: "Zero-Latency Grounding Filters" }
      ],
      highlights: [
        "Jailbreak regex pattern engine matching instruction overrides and system extraction.",
        "Robust automated test utility printing safetyPassRate and precisionLikeScore.",
        "Full CI/CD GitHub Actions build integrations with changesets release grids."
      ],
      techStack: ["TypeScript", "npm", "CI/CD (Actions)", "Changesets"],
      links: {
        github: "https://github.com/TechNxt05/Aegis-Agent",
        npm: "https://www.npmjs.com/package/aegis-agent"
      },
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      accentClass: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      shadowClass: "shadow-emerald-glow/10",
      glowColor: "rgba(16, 185, 129, 0.12)"
    },
    {
      name: "CyberGuardAI",
      title: "AI-Native Cyber Investigation Platform",
      tagline: "7-Agent LangGraph Swarm",
      description: "An agentic cyber incident forensics platform executing multimodal file scraping, threat mapping, and incident mitigation pathways.",
      metrics: [
        { label: "Orchestration", value: "7 LangGraph Agents" },
        { label: "Attack Path", value: "Dynamic React Flow Graph" },
        { label: "Ingest", value: "Gemini Vision Multimodal OCR" }
      ],
      highlights: [
        "Architected multi-agent graph with planning, evidence verification, and reporting modules.",
        "Built responsive attack tree rendering nodes detailing threat classifications.",
        "Integrated high-speed WebSocket channels synced to MongoDB schemas."
      ],
      techStack: ["LangGraph", "Gemini Vision", "FastAPI", "MongoDB", "WebSockets", "React Flow"],
      links: {
        github: "https://github.com/TechNxt05/CyberGuard",
        live: "https://cyber-guard-liard.vercel.app/"
      },
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      accentClass: "text-purple-400 border-purple-500/20 bg-purple-500/5",
      shadowClass: "shadow-purple-glow/10",
      glowColor: "rgba(168, 85, 247, 0.12)"
    },
    {
      name: "RAGOps",
      title: "Enterprise RAG Platform",
      tagline: "Project-Scoped Isolated Retrieval Engine",
      description: "An enterprise document intelligence platform featuring project workspace Isolation, retrieval debugging consoles, and citation mappings.",
      metrics: [
        { label: "Isolation", value: "FAISS Tenant Boundaries" },
        { label: "Verification", value: "Sentence-Level Citation Audit" },
        { label: "Orchestration", value: "Multi-Model Gateway Routing" }
      ],
      highlights: [
        "Enforced pgvector and FAISS isolation to guarantee zero tenant document leaking.",
        "Constructed explainable retrieval debugger tracking proximity distances.",
        "Enforced strict citation mappings, refusing answers if ungrounded."
      ],
      techStack: ["LangChain", "FastAPI", "PostgreSQL", "FAISS", "Next.js"],
      links: {
        github: "https://github.com/TechNxt05/RAGOps",
        live: "https://ragops.vercel.app/"
      },
      icon: <Layers className="w-5 h-5 text-pink-400" />,
      accentClass: "text-pink-400 border-pink-500/20 bg-pink-500/5",
      shadowClass: "shadow-pink-glow/10",
      glowColor: "rgba(236, 72, 153, 0.12)"
    },
    {
      name: "DataPilot",
      title: "Autonomous Data Science Mission Control",
      tagline: "Self-Healing Data Exploration Loop",
      description: "An autonomous agent workspace utilizing an advanced self-healing Planner/Executor/Critic loop to explore datasets and execute Python scripts.",
      metrics: [
        { label: "Loops", value: "Self-Healing Reflection" },
        { label: "Visualization", value: "Holographic Plotly Charts" },
        { label: "Thought Stream", value: "Real-time CoT Reasoning View" }
      ],
      highlights: [
        "Engineered autonomous core monitoring Planning, Executing, Success, and Failure states.",
        "Reflector Agent parses shell traceback errors, generating dynamic corrective code patches.",
        "One-click 'Magic Wand' deep-scan module auditing correlations and anomalies."
      ],
      techStack: ["FastAPI", "Pandas", "Scikit-Learn", "Plotly", "LangGraph", "Next.js"],
      links: {
        live: "https://data-pilot-one.vercel.app/"
      },
      icon: <BarChart2 className="w-5 h-5 text-yellow-400" />,
      accentClass: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
      shadowClass: "shadow-yellow-glow/10",
      glowColor: "rgba(234, 179, 8, 0.12)"
    }
  ];

  const secondaryProjects = [
    {
      name: "TemporalAI",
      title: "Autonomous Forecasting & Intelligence Platform",
      description: "An end-to-end agentic time-series platform with forecasting nodes (ARIMA, Prophet, XGBoost, LSTM) generating automated insights.",
      techStack: ["FastAPI", "Next.js", "Recharts", "SQLAlchemy", "PyTorch"],
      links: {
        github: "https://github.com/TechNxt05/TemporalAI",
        live: "https://temporal-ai-six.vercel.app/"
      }
    },
    {
      name: "LeadFlow",
      title: "Single-Screen Enterprise CRM MVP",
      description: "Sleek CRM featuring search debouncing, chronological timelines, and optimistic query states. Built for containerized postgres environments.",
      techStack: ["Next.js", "React 19", "Prisma ORM", "PostgreSQL", "Docker"],
      links: {
        github: "https://github.com/TechNxt05/Lead-Flow",
        live: "https://lead-flow1.vercel.app/"
      }
    },
    {
      name: "Mumzworld AI",
      title: "Bilingual E-commerce Stroller Advisor",
      description: "AI comparison and shopping assistant in English and Arabic. Includes structured specifications and an LLM-as-judge evaluation dashboard.",
      techStack: ["Next.js 15", "FastAPI", "Gemini Pro", "OpenRouter"],
      links: {
        live: "https://mumz-world-ai.vercel.app/"
      }
    },
    {
      name: "GlobbleCube ETA Predictor",
      title: "Smoothed Hierarchical ETA Predictor",
      description: "Hierarchical taxi duration lookup algorithm resolving data sparsity, outperforming GBT models in deterministic CPU execution speeds.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "Docker"],
      links: {
        github: "https://github.com/TechNxt05/GlobbleCube-ETA-Submission"
      }
    }
  ];

  const triggerChatbotQuery = (projectName: string) => {
    openWithContext(`Tell me about your project '${projectName}' in detail. Focus on the architecture, technical tradeoffs, and performance metrics.`);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black overflow-hidden relative dot-matrix">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Systems Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Flagship <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">AI Platforms</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Every platform is a functional startup product with full API services, multi-tenant databases, robust security middleware, and real-world evaluation metrics.
          </p>
        </div>

        {/* FLAGSHIPS GRID */}
        <div className="space-y-16">
          {flagshipProjects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <ThreeDTiltCard
                key={idx}
                maxTilt={5}
                glowColor={project.glowColor}
                className="w-full"
              >
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative rounded-3xl border border-white/5 bg-white/2 hover:border-white/10 transition-all duration-500 p-6 sm:p-8 lg:p-10 ${
                    isHovered ? project.shadowClass : ""
                  }`}
                >
                {/* Visual Glow Layer */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-transparent to-transparent group-hover:from-white/2 pointer-events-none transition-all duration-500`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* LEFT: Text & Highlights */}
                  <div className="lg:col-span-8 space-y-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 ${project.accentClass}`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white leading-none">
                          {project.name}
                        </h3>
                        <p className="text-sm font-mono text-cyan-400 font-bold mt-1">
                          {project.title} &middot; <span className="text-gray-500 font-sans font-medium">{project.tagline}</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-base leading-relaxed font-sans">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <span className="block font-mono text-xs text-gray-500 uppercase tracking-widest">Key Implementation Objectives</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 border border-white/5 text-gray-400 font-mono text-xs hover:bg-white/10 hover:text-white transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      {project.links.github && (
                        <Button asChild variant="outline" size="sm" className="border-white/10 hover:bg-white/5 bg-transparent rounded-lg text-xs font-mono">
                          <Link href={project.links.github} target="_blank" className="flex items-center gap-1.5">
                            <Github size={14} /> GitHub Code
                          </Link>
                        </Button>
                      )}
                      {project.links.live && (
                        <Button asChild size="sm" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg text-xs font-mono">
                          <Link href={project.links.live} target="_blank" className="flex items-center gap-1.5">
                            <ExternalLink size={14} /> Live Platform
                          </Link>
                        </Button>
                      )}
                      {project.links.npm && (
                        <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg text-xs font-mono">
                          <Link href={project.links.npm} target="_blank" className="flex items-center gap-1.5">
                            <ExternalLink size={14} /> NPM Registry
                          </Link>
                        </Button>
                      )}
                      <Button
                        onClick={() => triggerChatbotQuery(project.name)}
                        variant="ghost"
                        size="sm"
                        className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
                      >
                        <Bot size={14} /> Ask AI about Architecture
                      </Button>
                    </div>

                  </div>

                  {/* RIGHT: Metric Cards */}
                  <div className="lg:col-span-4 flex flex-col gap-4 w-full">
                    <span className="block text-left font-mono text-xs text-gray-500 uppercase tracking-widest lg:text-center">Telemetry Metrics</span>
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center text-center hover:border-white/10 transition-colors shadow-inner"
                      >
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">{metric.label}</span>
                        <span className="text-base sm:text-lg font-black text-white tracking-tight">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
              </ThreeDTiltCard>
            );
          })}
        </div>

        {/* SECONDARY PROJECTS */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="text-left space-y-2 mb-12">
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">Secondary Implementations</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">More Deployed Platforms</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((sec, idx) => (
              <ThreeDTiltCard
                key={idx}
                maxTilt={6}
                glowColor="rgba(99, 102, 241, 0.08)"
                className="w-full h-full"
              >
                <div className="bg-white/2 border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-glow transition-all h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300">
                      {sec.name}
                    </h4>
                    <span className="font-mono text-[9px] text-cyan-400 bg-cyan-500/10 py-0.5 px-2 rounded-full border border-cyan-500/20">
                      Production MVP
                    </span>
                  </div>
                  
                  <p className="text-xs font-mono text-gray-500 leading-none">
                    {sec.title}
                  </p>
                  
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {sec.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1">
                    {sec.techStack.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono text-gray-500 border border-white/5 py-0.5 px-1.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {sec.links.github && (
                      <Link href={sec.links.github} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                        <Github size={15} />
                      </Link>
                    )}
                    {sec.links.live && (
                      <Link href={sec.links.live} target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <ExternalLink size={15} />
                      </Link>
                    )}
                  </div>
                </div>

              </div>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
