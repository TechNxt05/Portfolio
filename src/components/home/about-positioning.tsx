"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Shield, Layers, Users, Zap, Terminal, RotateCw, Target } from "lucide-react";
import { useRecruiterMode } from "@/context/recruiter-context";

export function AboutPositioning() {
  const { isRecruiterMode } = useRecruiterMode();
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const photos = [
    {
      src: "/ME.jpeg",
      label: "TARGET_NODE_01",
      role: "Strategic Chess Planner",
      desc: "Rapid ELO 1450+ (Top 10%). Translating strategic chess foresight, defensive threat analysis, and branches-pruning logic directly into multi-agent swarms.",
      tag: "CHESS_TACTICS"
    },
    {
      src: "/Me1.jpeg",
      label: "TARGET_NODE_02",
      role: "Dhoni-Execution Mindset",
      desc: "Inspired by MS Dhoni's cool-headed leadership under intense pressure. Designing high-availability systems with deterministic, calm execution loops.",
      tag: "DHONI_FLOW"
    },
    {
      src: "/Me2.jpeg",
      label: "TARGET_NODE_03",
      role: "Core Systems Engineer",
      desc: "Bridging Win32 telemetry loops, concurrent database design, and real-time processing streams with low latency.",
      tag: "SYSTEMS_CORE"
    }
  ];

  const cyclePhoto = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setCurrentPhotoIdx((prev) => (prev + 1) % photos.length);
      setIsGlitching(false);
    }, 150);
  };

  const pillars = [
    {
      title: "Autonomous Agent Orchestration",
      description: "Building production-grade LangGraph state graphs and self-healing agent loops. Designing complex multi-agent swarms with specialized planner, executor, and critic feedback gates that self-correct execution errors in real-time.",
      icon: <Users className="text-cyan-400 w-5 h-5" />,
      tag: "LangGraph / Swarms"
    },
    {
      title: "Deterministic AI Evaluation",
      description: "Replacing unreliable 'LLM-as-judge' evaluations with fast, 100% reproducible deterministic algorithms. Implementing sentence-level TF-IDF similarity, regex prompt injection classifiers, and PII verification filters.",
      icon: <Shield className="text-purple-400 w-5 h-5" />,
      tag: "AuditAI / Safety"
    },
    {
      title: "High-Performance Concurrency",
      description: "Developing robust, multithreaded systems at the machine level. Experience designing native Win32 C++ avionics telemetry monitoring systems at DRDO with deterministic performance and strict concurrency controls.",
      icon: <Cpu className="text-emerald-400 w-5 h-5" />,
      tag: "C++ / Win32 / SRE"
    },
    {
      title: "Tenant-Isolated RAG Systems",
      description: "Engineering secure, scalable enterprise RAG systems featuring pgvector and FAISS. Enforcing strict database-level project workspace isolation, search validation, and precise paragraph-level citation mapping.",
      icon: <Layers className="text-pink-400 w-5 h-5" />,
      tag: "FAISS / pgvector"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-black overflow-hidden dot-matrix-fine">
      
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header positioning */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Positioning Statement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            I Build Serious <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">AI Infrastructure</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            {isRecruiterMode ? (
              "I specialize in bridging the gap between raw ML modeling and bulletproof backend engineering. I architect secure runtime firewalls for LLMs, write native low-level avionics streams, and build multi-tenant document retrieval networks that pass enterprise security audits."
            ) : (
              "I avoid brittle AI wrappers. Instead, I construct production-ready agent platforms, deterministic evaluation telemetry, and localized vector query scopes built to run securely at scale."
            )}
          </p>
        </div>

        {/* Technical pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 p-6 flex flex-col justify-between transition-all hover:shadow-cyan-glow/5"
            >
              {/* Telemetry glowing dot */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-gray-500 bg-black/40 border border-white/5 py-1 px-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {pillar.tag}
              </div>

              <div>
                <div className="p-2.5 rounded-lg bg-white/5 w-fit mb-4 text-cyan-400 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom active telemetry stats for recruiters */}
              {isRecruiterMode && (
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-[10px] text-cyan-400">
                  <Terminal size={12} />
                  <span>Production Impact: High Reliability Score</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Dynamic scan keyframes */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scan-beam {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}} />

        {/* Dynamic Dual-Console: System specs + Interactive 3D Persona Frame */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch overflow-visible">
          
          {/* LEFT: System neofetch terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-xl bg-black border border-white/5 p-6 font-mono text-xs text-gray-500 overflow-hidden relative shadow-inner flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 py-1 px-2 border-b border-l border-white/5 bg-white/2 text-[9px] tracking-widest text-cyan-400">
              SYSTEM_SPECS
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-ping" />
                <span className="text-gray-400 font-bold">Amritanshu@IIITNR_Core:~$</span>
                <span className="text-white">neofetch --ai-architect</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 leading-relaxed pl-4 border-l border-cyan-500/20">
                <div className="space-y-1">
                  <div><span className="text-cyan-400">Host:</span> Final-Year B.Tech (ECE/Systems)</div>
                  <div><span className="text-cyan-400">OS:</span> Unix / Windows Systems Engineering</div>
                  <div><span className="text-cyan-400">LLM Shield:</span> Aegis Safety Middleware</div>
                  <div><span className="text-cyan-400">Eval:</span> Deterministic TF-IDF Cosine Ingestion</div>
                  <div><span className="text-cyan-400">Tactics:</span> Chess ELO 1450+ Rapid (Strategic planning)</div>
                </div>
                <div className="space-y-1">
                  <div><span className="text-purple-400">Philosophy:</span> Applied AI &gt; Theoretical Wrappers</div>
                  <div><span className="text-purple-400">Detections:</span> Injection Patterns / PII Filters</div>
                  <div><span className="text-purple-400">Concurrencies:</span> Win32 telemetries (C++)</div>
                  <div><span className="text-purple-400">CGPA:</span> 7.72 / 10.0 (IIIT Naya Raipur)</div>
                  <div><span className="text-purple-400">Execution:</span> Dhoni Cool-headed model (Cricket)</div>
                </div>
              </div>
            </div>
            
            {/* Embedded Active Sub-Telemetry Status line */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-[9px] text-gray-600">
              <Terminal size={12} className="text-cyan-500" />
              <span>ACTIVE PIPELINES: CORE_SYS_CALIBRATED &bull; MATCH_ENGINE_READY</span>
            </div>
          </motion.div>

          {/* RIGHT: 3D Holographic Persona Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-xl bg-black border border-white/5 p-6 relative overflow-hidden flex flex-col items-center justify-between select-none cursor-pointer group shadow-inner min-h-[350px]"
            onClick={cyclePhoto}
          >
            {/* L-shaped glowing HUD corners */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-500/40 pointer-events-none group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan-500/40 pointer-events-none group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-cyan-500/40 pointer-events-none group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-500/40 pointer-events-none group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300" />

            {/* Tactical Scanner Beam */}
            <div 
              className="absolute top-0 inset-x-0 h-[1.5px] bg-cyan-400/40 shadow-[0_0_8px_rgba(6,182,212,0.6)] z-20 pointer-events-none" 
              style={{ animation: "scan-beam 4s linear infinite" }} 
            />

            {/* Title / Node Readout */}
            <div className="w-full flex items-center justify-between font-mono text-[9px] text-gray-500 border-b border-white/5 pb-2 mb-3">
              <div className="flex items-center gap-1">
                <Target size={10} className="text-cyan-400 animate-pulse" />
                <span>{photos[currentPhotoIdx].label}</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
                <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                <span>{photos[currentPhotoIdx].tag}</span>
              </div>
            </div>

            {/* Image Container frame */}
            <div className="relative w-full h-[280px] rounded-lg overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center shadow-inner group-hover:border-cyan-500/30 transition-all duration-300">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhotoIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    filter: isGlitching ? "blur(3px) brightness(1.8)" : "blur(0px) brightness(1)"
                  }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={photos[currentPhotoIdx].src}
                    alt={photos[currentPhotoIdx].role}
                    className="object-cover w-full h-full transition-all duration-500"
                  />
                  {/* Neon screen grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_50%,rgba(255,255,255,0.05)_50%)] bg-[size:100%_4px] pointer-events-none mix-blend-overlay" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Telemetry captions */}
            <div className="w-full text-left font-mono mt-3 space-y-1 bg-black/40 border border-white/5 rounded-lg p-2.5">
              <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider flex items-center justify-between">
                <span>{photos[currentPhotoIdx].role}</span>
                <span className="text-[8px] text-gray-500 font-normal">DECRYPTED_NODE</span>
              </div>
              <p className="text-[9px] text-gray-400 leading-normal font-sans">
                {photos[currentPhotoIdx].desc}
              </p>
            </div>

            {/* Blinking Interaction hint */}
            <div className="w-full flex items-center justify-center gap-1.5 font-mono text-[8px] text-gray-600 tracking-widest leading-none pt-2 uppercase mt-2 animate-pulse">
              <RotateCw size={8} className="animate-spin-slow" />
              <span>Click card to cycle target streams</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
