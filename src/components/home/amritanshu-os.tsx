"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, X, Minus, Square, Terminal, FileText, Briefcase, GraduationCap, Code } from "lucide-react";

type AppType = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

type FolderType = {
  id: string;
  title: string;
  icon: React.ElementType;
  apps: AppType[];
};

const folders: FolderType[] = [
  {
    id: "experience",
    title: "Experience",
    icon: Briefcase,
    apps: [
      { id: "exp-1", title: "AI Systems Engineer", description: "Currently building reliable, observable, and production-oriented AI systems.", icon: Terminal },
      { id: "exp-2", title: "ML Researcher", description: "Applied ML methodologies targeting parametric optimization and edge deployment.", icon: FileText }
    ]
  },
  {
    id: "research",
    title: "Research",
    icon: FileText,
    apps: [
      { id: "res-1", title: "IEEE ICAIIC 2026", description: "ML-Assisted Design and Performance Modeling of a Tunable Microfluidic SIW Self-Diplexing Antenna.", icon: FileText },
      { id: "res-2", title: "IEEE CCNCPS 2025", description: "Cvision: Deep Learning Framework for Cataract Detection via Smartphone.", icon: FileText }
    ]
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    apps: [
      { id: "edu-1", title: "B.Tech in ECE", description: "Vellore Institute of Technology, Bhopal.", icon: GraduationCap }
    ]
  },
  {
    id: "projects",
    title: "Projects",
    icon: Code,
    apps: [
      { id: "proj-1", title: "RAGOps", description: "Enterprise RAG and AI runtime platform.", icon: Terminal },
      { id: "proj-2", title: "AuditAI", description: "LLM reliability, evaluation, and observability platform.", icon: Terminal },
      { id: "proj-3", title: "CyberGuardAI", description: "Multimodal multi-agent cybercrime investigation platform.", icon: Terminal }
    ]
  },
  {
    id: "skills",
    title: "Skills",
    icon: Terminal,
    apps: [
      { id: "skill-1", title: "GenAI & LLMs", description: "RAG, Agentic AI, LangChain, Tool Calling, LLM Evaluation.", icon: Code },
      { id: "skill-2", title: "Vector Systems", description: "FAISS, pgvector, Qdrant, ChromaDB, Embeddings.", icon: Code }
    ]
  }
];

export function AmritanshuOS() {
  const [openFolder, setOpenFolder] = useState<FolderType | null>(null);
  const [openApp, setOpenApp] = useState<AppType | null>(null);

  const handleOpenFolder = (folder: FolderType) => {
    setOpenFolder(folder);
    setOpenApp(null);
  };

  const handleOpenApp = (app: AppType) => {
    setOpenApp(app);
  };

  const handleCloseFolder = () => {
    setOpenFolder(null);
    setOpenApp(null);
  };

  const handleCloseApp = () => {
    setOpenApp(null);
  };

  return (
    <section id="os" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Interactive Environment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Amritanshu<span className="text-cyan-400">OS</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Explore my workspace through an interactive desktop environment.
          </p>
        </div>

        <div className="relative w-full h-[600px] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
          {/* OS Header / Top Bar */}
          <div className="h-8 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 text-xs font-mono text-gray-400 select-none">
            <div className="flex items-center gap-4">
              <span className="font-bold text-white">AmritanshuOS</span>
              <span className="hidden sm:inline">File</span>
              <span className="hidden sm:inline">Edit</span>
              <span className="hidden sm:inline">View</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          {/* Desktop Area */}
          <div className="flex-1 p-6 relative">
            {/* Desktop Icons */}
            <div className="flex flex-col gap-6 items-start">
              {folders.map((folder) => (
                <div
                  key={folder.id}
                  className="flex flex-col items-center gap-2 cursor-pointer group w-24"
                  onDoubleClick={() => handleOpenFolder(folder)}
                  onClick={() => handleOpenFolder(folder)}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                    <Folder className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-xs font-mono text-gray-300 text-center group-hover:text-white bg-black/50 px-2 py-0.5 rounded">
                    {folder.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Folder Window */}
            <AnimatePresence>
              {openFolder && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] bg-black/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-2xl z-20"
                  drag
                  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                  dragMomentum={false}
                >
                  <div className="h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-3 select-none cursor-grab active:cursor-grabbing">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                      <openFolder.icon className="w-4 h-4 text-cyan-400" />
                      {openFolder.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 flex items-center justify-center group" onClick={handleCloseFolder}>
                        <Minus className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                      </button>
                      <button className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 flex items-center justify-center group">
                        <Square className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                      </button>
                      <button className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 flex items-center justify-center group" onClick={handleCloseFolder}>
                        <X className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-4 min-h-[200px] content-start">
                    {openFolder.apps.map((app) => (
                      <div
                        key={app.id}
                        className="flex flex-col items-center gap-2 cursor-pointer group"
                        onDoubleClick={() => handleOpenApp(app)}
                        onClick={() => handleOpenApp(app)}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                          <app.icon className="w-6 h-6 text-gray-300 group-hover:text-cyan-400" />
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 text-center group-hover:text-white line-clamp-2 leading-tight">
                          {app.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* App Window */}
            <AnimatePresence>
              {openApp && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[40%] w-full max-w-[400px] bg-black border border-cyan-500/30 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden backdrop-blur-2xl z-30"
                  drag
                  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                  dragMomentum={false}
                >
                  <div className="h-10 bg-cyan-500/10 border-b border-cyan-500/20 flex items-center justify-between px-3 select-none cursor-grab active:cursor-grabbing">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <openApp.icon className="w-4 h-4" />
                      {openApp.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 flex items-center justify-center group" onClick={handleCloseApp}>
                        <X className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 min-h-[150px] flex items-center justify-center text-center">
                    <p className="text-sm font-sans text-gray-300 leading-relaxed">
                      {openApp.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
