"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Shield, Layers, Users, Zap, Terminal } from "lucide-react";
import { useRecruiterMode } from "@/context/recruiter-context";

const mockLogs = [
  { text: "[AEGIS-AGENT] Open-source middleware security filters active.", color: "text-cyan-400" },
  { text: "[AUDIT-AI] Cosine similarity: sentence-level validation synced.", color: "text-emerald-400" },
  { text: "[CHESS-STRATEGY] Chess ELO: 1450+ tree search optimization active.", color: "text-purple-400" },
  { text: "[DHONI-PHILOSOPHY] Concurrency finisher loops calibrated.", color: "text-yellow-400" },
  { text: "[RAG-OPS] Workspace isolated FAISS vector indices synced.", color: "text-cyan-400" },
  { text: "[AYUSH-PORTAL] SIH aggregate forms verification calibrated.", color: "text-pink-400" },
  { text: "[DRDO-TELEMETRY] C++ Win32 Telemetry Loop synced. Lag: 0ms.", color: "text-emerald-400" },
  { text: "[SYSTEM] All production pipelines verified and online.", color: "text-cyan-300" }
];

export function AboutPositioning() {
  const { isRecruiterMode } = useRecruiterMode();
  const [logIndex, setLogIndex] = useState(0);
  const [activeLogs, setActiveLogs] = useState<typeof mockLogs>([]);

  useEffect(() => {
    setActiveLogs(mockLogs.slice(0, 4));
    const interval = setInterval(() => {
      setLogIndex((prev) => {
        const next = (prev + 1) % mockLogs.length;
        setActiveLogs((logs) => {
          const updated = [...logs.slice(1), mockLogs[next]];
          return updated;
        });
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

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

          {/* RIGHT: Live OS Logs Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-xl bg-black border border-white/5 p-6 relative overflow-hidden flex flex-col justify-between font-mono text-xs text-gray-500 min-h-[250px] shadow-inner"
          >
            {/* Corner header tag */}
            <div className="absolute top-0 right-0 py-1 px-2 border-b border-l border-white/5 bg-white/2 text-[9px] tracking-widest text-cyan-400">
              SYSTEM_LOGS
            </div>

            {/* Terminal header */}
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-gray-400 font-bold">Amritanshu@IIITNR_Logs:~$</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 text-[9px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>STREAMING</span>
                </div>
              </div>

              {/* Laser sweep animation for logs terminal */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes scan-beam-logs {
                  0% { top: 0%; opacity: 0; }
                  15% { opacity: 0.8; }
                  85% { opacity: 0.8; }
                  100% { top: 100%; opacity: 0; }
                }
              `}} />
              <div 
                className="absolute top-0 inset-x-0 h-[1.5px] bg-cyan-400/20 shadow-[0_0_6px_rgba(6,182,212,0.3)] z-20 pointer-events-none" 
                style={{ animation: "scan-beam-logs 5s linear infinite" }} 
              />

              {/* Scrolling Log stream block */}
              <div className="flex flex-col space-y-2.5 pl-4 border-l border-purple-500/20 max-h-[170px] overflow-y-auto scrollbar-cyber pr-1 select-none text-[11px] leading-relaxed text-left">
                <AnimatePresence initial={false}>
                  {activeLogs.map((log, idx) => (
                    <motion.div
                      key={log.text + idx}
                      initial={{ opacity: 0, x: -10, y: 5 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-2 ${log.color}`}
                    >
                      <span className="text-gray-600 select-none font-bold">&gt;</span>
                      <span>{log.text}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Embedded Active Sub-Telemetry Status line */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-[9px] text-gray-600">
              <Terminal size={12} className="text-purple-400" />
              <span>LIVE INTEGRITY MONITOR: AEGIS-AGENT LAYER ACTIVE &bull; NO VIOLATIONS</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
