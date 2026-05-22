"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Shield, Layers, Calendar, ChevronRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  outcome: string;
  skills: string[];
  colorClass: string;
}

export function ProjectTimeline() {
  const trajectory: TimelineEvent[] = [
    {
      year: "2023",
      title: "Edge Computer Vision & Parametric ML",
      subtitle: "Focus on Offline Deep Learning & Silicon Parametric Optimizations",
      description: "Began by designing lightweight smartphone cataract diagnostics frameworks (IEEE Cvision) utilizing MobileNet and VGG neural classifiers. Extended ML applications to silicon level optimization for sense amplifier performance parametric tuning and microfluidic SIW antennas.",
      outcome: "2 IEEE publications (Dubai, Japan), 95%+ ROC accuracy medical image classifications offline.",
      skills: ["CNNs", "MobileNet", "Parametric Regression", "Deep Learning", "Circuit Optimization"],
      icon: <Cpu size={18} className="text-orange-400" />,
      colorClass: "border-orange-500/20 text-orange-400 bg-orange-500/5 shadow-orange-glow/5"
    },
    {
      year: "2024",
      title: "Data Pipelines & Autonomous Portals",
      subtitle: "Smart India Hackathon Team Lead & High-Density Core Pipelines",
      description: "Steered teams as lead builder to deliver comprehensive healthcare platforms, dramatically cutting manual administrative paperwork. Constructed autonomous analysis pipelines (DataPilot) using Scikit-Learn and interactive holographic graphs.",
      outcome: "Smart India Hackathon national finalist, reduced onboarding paperwork bottlenecks by 50% via automated pipelines.",
      skills: ["Data Pipelines", "System Design", "Python", "Data Mining", "API Architectures"],
      icon: <Terminal size={18} className="text-yellow-400" />,
      colorClass: "border-yellow-500/20 text-yellow-400 bg-yellow-500/5 shadow-yellow-glow/5"
    },
    {
      year: "2025",
      title: "Enterprise Retrieval & Isolated RAG",
      subtitle: "Secure Workspace Isolation & Vector Databases",
      description: "Engineered secure enterprise document retrieval spaces (RAGOps). Solved severe cross-tenant data leakage vulnerabilities by designing project-scoped metadata and FAISS boundary controls. Built explainable proximity lookup tools and strict citation verifiers.",
      outcome: "Engineered secure RAG architectures with zero context overlap and verified compliance ratings.",
      skills: ["pgvector", "FAISS", "LangChain", "Vector Embeddings", "Tenant Isolation"],
      icon: <Layers size={18} className="text-pink-400" />,
      colorClass: "border-pink-500/20 text-pink-400 bg-pink-500/5 shadow-pink-glow/5"
    },
    {
      year: "2026",
      title: "Multi-Agent Networks & Safety Middleware",
      subtitle: "Zero-Trust Firewalls & Reliability Telemetry",
      description: "Currently engineering multi-agent threat intelligence platforms (CyberGuardAI) utilizing LangGraph swarms. Created and published the open-source npm library `aegis-agent` to intercept and filter hallucinated or malicious responses. Architected AuditAI, a 5-point deterministic reliability suite.",
      outcome: "Authored npm safety middleware with 100% provenance build, securing live agent swarms.",
      skills: ["LangGraph", "aegis-agent NPM", "AuditAI", "Deterministic Evals", "FastAPI"],
      icon: <Shield size={18} className="text-cyan-400" />,
      colorClass: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5 shadow-cyan-glow/5"
    }
  ];

  return (
    <section id="trajectory" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5 dot-matrix-fine">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Chronological Map
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">Trajectory Timeline</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            How I evolved from local computer vision and circuit parametric optimization models to secure multi-agent systems and zero-trust safety firewalls.
          </p>
        </div>

        {/* Vertical timeline line */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 lg:ml-12 space-y-12">
          {trajectory.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-12 lg:pl-16 text-left"
            >
              {/* Year indicator left bubble */}
              <div className="absolute -left-[14px] top-1 bg-black border-2 border-white/10 h-7 w-7 rounded-full flex items-center justify-center font-mono text-[9px] font-bold text-gray-400 shadow-xl z-20">
                {item.year.slice(2)}
              </div>

              {/* Box Content */}
              <div className={`rounded-2xl border p-6 hover:border-white/15 transition-all duration-300 relative bg-white/2 backdrop-blur-xl hover:${item.colorClass}`}>
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium font-sans mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="w-fit font-mono text-[10px] text-gray-500 border-white/10 shrink-0">
                    <Calendar size={10} className="mr-1" /> {item.year}
                  </Badge>
                </div>

                {/* Main description */}
                <p className="text-sm text-gray-400 leading-relaxed font-sans mb-4">
                  {item.description}
                </p>

                {/* Key Outcome metrics box */}
                <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 font-mono text-xs text-gray-400 flex items-start gap-2.5 mb-5 shadow-inner">
                  <Zap size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[10px] uppercase text-white block mb-0.5">Telemetry Outcome Log</span>
                    {item.outcome}
                  </div>
                </div>

                {/* Trajectory skills */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-white/5 bg-black/20 text-gray-500 font-mono text-[10px] px-2 py-0.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
