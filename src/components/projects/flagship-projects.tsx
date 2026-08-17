"use client";

import { useState } from "react";
import { Shield, Github, ExternalLink, Bot, Terminal, Code, Cpu, Layers, BarChart2, Folder, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useChat } from "@/context/chat-context";
import Link from "next/link";
import { ThreeDTiltCard } from "@/components/ui/three-d-card";

type Category = "All" | "Software Engg" | "AI" | "ML" | "Data Science";

interface Project {
  name: string;
  title: string;
  description: string;
  techStack: string[];
  links: { github?: string; live?: string; npm?: string };
  icon: React.ReactNode;
  category: Category[];
}

export function FlagshipProjects() {
  const { openWithContext } = useChat();
  const [activeTab, setActiveTab] = useState<Category>("All");

  const allProjects: Project[] = [
    {
      name: "RAGOps",
      title: "Enterprise RAG Platform",
      description: "An enterprise-grade document intelligence platform featuring RBAC, multi-model support, and advanced Corrective RAG architectures.",
      techStack: ["LangChain", "FastAPI", "PostgreSQL", "FAISS", "BGE Reranker"],
      links: {
        github: "https://github.com/TechNxt05/RAGOps",
        live: "https://ragops.vercel.app/"
      },
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "Software Engg"],
    },
    {
      name: "AuditAI",
      title: "AI Reliability & Observability Platform",
      description: "A production-grade SaaS platform providing comprehensive observability, automated evaluation, and adversarial stress-testing for LLM workflows.",
      techStack: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "React Flow", "DeBERTa"],
      links: {
        github: "https://github.com/TechNxt05/AuditAI",
        live: "https://audit-ai-eosin.vercel.app/"
      },
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "Software Engg"],
    },
    {
      name: "CyberGuardAI",
      title: "AI-Native Cyber Investigation Platform",
      description: "An agentic investigation platform orchestrating multimodal analysis and React Flow graphs to assist victims of digital fraud.",
      techStack: ["LangGraph", "Gemini Vision", "FastAPI", "MongoDB", "PostgreSQL", "React Flow"],
      links: {
        github: "https://github.com/TechNxt05/CyberGuard",
        live: "https://cyber-guard-liard.vercel.app/"
      },
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      category: ["AI"],
    },
    {
      name: "TribeBharat",
      title: "Community Platform",
      description: "A scalable platform for community engagement and management.",
      techStack: ["React", "Node.js", "MongoDB"],
      links: {},
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg"],
    },
    {
      name: "CallLens",
      title: "Call Analytics Platform",
      description: "AI-powered call analysis, transcription, and sentiment evaluation system.",
      techStack: ["Python", "FastAPI", "Next.js"],
      links: {},
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "ML"],
    },
    {
      name: "DataPilot AI",
      title: "Autonomous Data Science Control",
      description: "An autonomous agent workspace utilizing a self-healing loop to explore datasets and execute Python scripts.",
      techStack: ["FastAPI", "Pandas", "Scikit-Learn", "LangGraph"],
      links: {
        live: "https://data-pilot-one.vercel.app/"
      },
      icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "Data Science"],
    },
    {
      name: "TemporalAI",
      title: "Time-series Forecasting Platform",
      description: "An end-to-end agentic time-series platform with forecasting nodes (ARIMA, Prophet, XGBoost, LSTM) generating automated insights.",
      techStack: ["FastAPI", "Next.js", "Recharts", "SQLAlchemy", "PyTorch"],
      links: {
        github: "https://github.com/TechNxt05/TemporalAI",
        live: "https://temporal-ai-six.vercel.app/"
      },
      icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
      category: ["ML", "Data Science"],
    },
    {
      name: "Aegis-Agent",
      title: "Safety Middleware for Agents",
      description: "An open-source npm library acting as a security and evaluation middleware firewall, intercepting LLM agent inputs.",
      techStack: ["TypeScript", "npm", "CI/CD (Actions)"],
      links: {
        github: "https://github.com/TechNxt05/Aegis-Agent",
        npm: "https://www.npmjs.com/package/aegis-agent"
      },
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg", "AI"],
    },
    {
      name: "Mumzworld AI",
      title: "Bilingual Shopping Assistant",
      description: "AI comparison and shopping assistant in English and Arabic. Includes structured specifications.",
      techStack: ["Next.js 15", "FastAPI", "Gemini Pro"],
      links: {
        live: "https://mumz-world-ai.vercel.app/"
      },
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      category: ["AI"],
    },
    {
      name: "LeadFlow",
      title: "Enterprise CRM MVP",
      description: "Sleek CRM featuring search debouncing, chronological timelines, and optimistic query states.",
      techStack: ["Next.js", "Prisma", "PostgreSQL"],
      links: {
        github: "https://github.com/TechNxt05/Lead-Flow",
        live: "https://lead-flow1.vercel.app/"
      },
      icon: <Folder className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg"],
    },
    {
      name: "SecureBlog",
      title: "Secure Content Platform",
      description: "A secure content management system with modern authentication and publishing features.",
      techStack: ["Next.js", "PostgreSQL", "Tailwind"],
      links: {},
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg"],
    },
    {
      name: "ScrapeAll",
      title: "Universal Web Scraper",
      description: "A Python-based scraping utility to efficiently extract data from complex dom structures.",
      techStack: ["Python", "BeautifulSoup", "Selenium"],
      links: {},
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg", "Data Science"],
    },
    {
      name: "SplitMint",
      title: "Expense Splitting App",
      description: "A cross-platform mobile application for splitting bills seamlessly among friends.",
      techStack: ["Flutter", "Firebase"],
      links: {},
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg"],
    },
    {
      name: "GlobbleCube ETA",
      title: "Hierarchical ETA Predictor",
      description: "Hierarchical taxi duration lookup algorithm resolving data sparsity, outperforming baseline models.",
      techStack: ["Python", "Pandas", "Scikit-Learn"],
      links: {
        github: "https://github.com/TechNxt05/GlobbleCube-ETA-Submission"
      },
      icon: <Folder className="w-5 h-5 text-emerald-400" />,
      category: ["ML", "Data Science"],
    }
  ];

  const triggerChatbotQuery = (projectName: string) => {
    openWithContext(`Tell me about your project '${projectName}' in detail. Focus on the architecture and engineering decisions.`);
  };

  const tabs: Category[] = ["All", "Software Engg", "AI", "ML", "Data Science"];
  
  const filteredProjects = activeTab === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category.includes(activeTab));

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Systems / Experiments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Research & <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">Engineering Projects</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                activeTab === tab
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold shadow-sm"
                  : "bg-black text-gray-400 hover:bg-white/5 hover:text-white border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <ThreeDTiltCard key={project.name + idx} maxTilt={2} glowColor="rgba(16,185,129,0.15)" className="w-full">
              <div className="bg-white/2 border border-white/5 hover:border-emerald-500/30 rounded-xl p-6 flex flex-col h-full transition-all shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
                    {project.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white leading-tight">{project.name}</h4>
                    <p className="text-xs font-mono text-gray-500">{project.title}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 font-sans mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-400 border border-white/5 font-mono text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  {project.links.github && (
                    <Link href={project.links.github} target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors">
                      <Github size={16} />
                    </Link>
                  )}
                  {project.links.live && (
                    <Link href={project.links.live} target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors">
                      <ExternalLink size={16} />
                    </Link>
                  )}
                  {project.links.npm && (
                    <Link href={project.links.npm} target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors">
                      <ExternalLink size={16} />
                    </Link>
                  )}
                  <Button
                    onClick={() => triggerChatbotQuery(project.name)}
                    variant="ghost"
                    size="sm"
                    className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 ml-auto text-xs"
                  >
                    <Bot size={14} className="mr-1.5" /> Ask AI
                  </Button>
                </div>
              </div>
            </ThreeDTiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
