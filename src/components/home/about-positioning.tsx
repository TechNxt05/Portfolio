"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Shield, Layers, Users, Terminal } from "lucide-react";

const mockLogs = [
  { text: "How do we give an AI system the right context?", color: "text-muted-foreground" },
  { text: "How do we know whether an LLM answer is actually correct?", color: "text-muted-foreground" },
  { text: "How do we detect hallucination and prompt injection?", color: "text-muted-foreground" },
  { text: "How should an agent decide which tool or model to use?", color: "text-muted-foreground" },
  { text: "How can multiple models be orchestrated efficiently?", color: "text-muted-foreground" },
  { text: "How do we observe every step of an AI execution?", color: "text-muted-foreground" },
  { text: "How do we benchmark AI systems reproducibly?", color: "text-muted-foreground" },
  { text: "How do we make AI applications reliable enough for production?", color: "text-primary" }
];

export function AboutPositioning() {
  const [activeLogs, setActiveLogs] = useState<typeof mockLogs>([]);

  useEffect(() => {
    setActiveLogs(mockLogs.slice(0, 4));
    const interval = setInterval(() => {
      setActiveLogs((logs) => {
        const nextIdx = (mockLogs.indexOf(logs[logs.length - 1]) + 1) % mockLogs.length;
        return [...logs.slice(1), mockLogs[nextIdx]];
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const pillars = [
    {
      title: "Agent Orchestration",
      description: "Building production-grade state graphs and self-healing multi-agent workflows for reliable execution.",
      icon: <Users className="text-primary w-5 h-5" />,
      tag: "LangGraph / Swarms"
    },
    {
      title: "System Reliability",
      description: "Implementing deterministic evaluation algorithms and robust security filters for LLM pipelines.",
      icon: <Shield className="text-primary w-5 h-5" />,
      tag: "Safety / Eval"
    },
    {
      title: "High-Performance Core",
      description: "Developing robust, low-latency concurrent systems, including native telemetry monitoring streams.",
      icon: <Cpu className="text-primary w-5 h-5" />,
      tag: "C++ / SRE"
    },
    {
      title: "Isolated Infrastructure",
      description: "Engineering secure, multi-tenant retrieval systems with strict database-level workspace isolation.",
      icon: <Layers className="text-primary w-5 h-5" />,
      tag: "PostgreSQL / Vector DB"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header positioning */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Positioning Statement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            I Build Serious <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">AI Infrastructure</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            My work sits at the intersection of LLM applications, RAG, agentic workflows, and evaluation infrastructure. Rather than treating an LLM as a standalone chatbot, I am interested in the systems surrounding it.
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
              className="group relative rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 p-6 flex flex-col justify-between transition-all shadow-2xl"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-gray-500 bg-black/40 border border-white/10 py-1 px-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {pillar.tag}
              </div>

              <div>
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 text-cyan-400">
                  {pillar.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
