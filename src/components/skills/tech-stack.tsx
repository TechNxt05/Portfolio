"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Database, Layout, Code, HardDrive, Cpu as SystemsIcon, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  colorClass: string;
  glowColor: string;
  shadowClass: string;
}

export function TechStack() {
  const categories: TechCategory[] = [
    {
      name: "AI / Multi-Agent & RAG",
      icon: <Layers className="text-cyan-400 w-4 h-4" />,
      skills: ["LangGraph", "LangChain", "FAISS", "pgvector", "Gemini Pro/Flash SDK", "GPT-4o API", "SentenceTransformers", "Groq", "Vector Ingestions", "Hallucination Checks"],
      colorClass: "border-cyan-500/10 text-cyan-400 bg-cyan-500/5",
      glowColor: "rgba(6, 182, 212, 0.2)",
      shadowClass: "shadow-[0_0_30px_rgba(6,182,212,0.12)] border-cyan-500/30"
    },
    {
      name: "Core Backend Systems",
      icon: <Code className="text-purple-400 w-4 h-4" />,
      skills: ["Python", "FastAPI", "C++ (Win32 Concurrency)", "Node.js", "Django", "Express.js", "WebSockets", "REST APIs", "SQLAlchemy"],
      colorClass: "border-purple-500/10 text-purple-400 bg-purple-500/5",
      glowColor: "rgba(168, 85, 247, 0.2)",
      shadowClass: "shadow-[0_0_30px_rgba(168,85,247,0.12)] border-purple-500/30"
    },
    {
      name: "Modern Frontend UI",
      icon: <Layout className="text-emerald-400 w-4 h-4" />,
      skills: ["Next.js 15 (App Router)", "React 19", "TypeScript", "TailwindCSS", "Framer Motion", "React Flow", "Recharts", "Plotly", "shadcn/ui"],
      colorClass: "border-emerald-500/10 text-emerald-400 bg-emerald-500/5",
      glowColor: "rgba(16, 185, 129, 0.2)",
      shadowClass: "shadow-[0_0_30px_rgba(16,185,129,0.12)] border-emerald-500/30"
    },
    {
      name: "Databases & ORMs",
      icon: <Database className="text-pink-400 w-4 h-4" />,
      skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "SQLite", "NoSQL Schema Design"],
      colorClass: "border-pink-500/10 text-pink-400 bg-pink-500/5",
      glowColor: "rgba(236, 72, 153, 0.2)",
      shadowClass: "shadow-[0_0_30px_rgba(236,72,153,0.12)] border-pink-500/30"
    },
    {
      name: "Infrastructure & DevOps",
      icon: <HardDrive className="text-yellow-400 w-4 h-4" />,
      skills: ["Docker", "Docker Compose", "Nginx (Reverse Proxy)", "AWS EC2", "CI/CD (GitHub Actions)", "Changesets", "Render", "Vercel", "Neon Serverless"],
      colorClass: "border-yellow-500/10 text-yellow-400 bg-yellow-500/5",
      glowColor: "rgba(234, 179, 8, 0.2)",
      shadowClass: "shadow-[0_0_30px_rgba(234,179,8,0.12)] border-yellow-500/30"
    },
    {
      name: "Low-Level / Real-time",
      icon: <SystemsIcon className="text-orange-400 w-4 h-4" />,
      skills: ["Win32 API Telemetry", "Multithread Concurrencies", "Real-time Signal Ingestion", "Deterministic Replay Loops", "Avionics Bus Protocols"],
      colorClass: "border-orange-500/10 text-orange-400 bg-orange-500/5",
      glowColor: "rgba(249, 115, 22, 0.2)",
      shadowClass: "shadow-[0_0_30px_rgba(249,115,22,0.12)] border-orange-500/30"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5 dot-matrix-fine">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Operational Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">Expertise Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            A specialized stack focused on deterministic pipelines, high-density vector retrieval, real-time low-level telemetries, and secure middleware.
          </p>
        </div>

        {/* Categories Grid - Perspective Container */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch overflow-visible"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative overflow-visible flex"
              style={{ perspective: "1200px" }}
            >
              <motion.div
                initial={{ 
                  opacity: 0, 
                  y: 30, 
                  rotateX: 12, 
                  rotateY: -15, 
                  skewY: -3, 
                  z: -20 
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0 
                }}
                whileHover={{ 
                  rotateX: 0, 
                  rotateY: 0, 
                  skewY: 0, 
                  scale: 1.05, 
                  z: 40,
                  transition: { type: "spring", stiffness: 220, damping: 18 }
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                style={{ transformStyle: "preserve-3d" }}
                className={`relative w-full rounded-2xl border ${cat.colorClass} p-6 flex flex-col justify-between bg-black/40 border-white/5 transition-all group hover:bg-white/2 cursor-default select-none`}
              >
                {/* Real-time neon shadow and radial halo glow under layovers */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 ${cat.shadowClass}`}
                  style={{ background: `radial-gradient(circle 200px at center, ${cat.glowColor}, transparent 80%)` }}
                />

                {/* Card Interior elements with volumetric 3D elevations */}
                <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                    <div 
                      style={{ transform: "translateZ(10px)" }}
                      className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-white/20 transition-colors"
                    >
                      {cat.icon}
                    </div>
                    <h4 className="text-sm font-mono font-black text-white tracking-wider uppercase">
                      {cat.name}
                    </h4>
                  </div>

                  {/* Skills wrap with sub-level depth */}
                  <div 
                    style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }} 
                    className="flex flex-wrap gap-2"
                  >
                    {cat.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-white/5 bg-black/40 text-gray-400 font-mono text-[11px] px-2.5 py-1 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all cursor-default shadow-sm hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom minor decorative matrix indicator */}
                <div 
                  style={{ transform: "translateZ(10px)" }}
                  className="mt-6 pt-4 border-t border-white/5 flex justify-end font-mono text-[8px] text-gray-600 tracking-widest leading-none select-none"
                >
                  ENV_{cat.name.split(" ")[0].toUpperCase()}
                </div>

              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
