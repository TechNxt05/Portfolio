"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Shield, Layers, Users, Terminal } from "lucide-react";

const mockLogs = [
  { text: "Initializing safety middleware...", color: "text-muted-foreground" },
  { text: "Verifying semantic similarity thresholds...", color: "text-muted-foreground" },
  { text: "Optimizing state graphs for agent execution...", color: "text-muted-foreground" },
  { text: "Validating workspace isolation policies...", color: "text-muted-foreground" },
  { text: "Syncing concurrent telemetry loops...", color: "text-muted-foreground" },
  { text: "All core systems verified and online.", color: "text-primary" }
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
    <section id="about" className="relative py-24 px-6 md:px-12 bg-background overflow-hidden border-b border-border">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header positioning */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
            Positioning Statement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
            I Build Serious <span className="text-primary/70">AI Infrastructure</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            I avoid brittle wrappers. I construct production-ready agent platforms, reliable evaluation pipelines, and secure vector architectures built to scale.
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
              className="group relative rounded-2xl border border-border bg-card hover:bg-muted p-6 flex flex-col justify-between transition-all"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-muted-foreground bg-muted border border-border py-1 px-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {pillar.tag}
              </div>

              <div>
                <div className="p-2.5 rounded-lg bg-muted w-fit mb-4 text-primary">
                  {pillar.icon}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Dual-Console: System specs + Interactive OS Frame */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch overflow-visible">
          
          {/* LEFT: System neofetch terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-xl bg-card border border-border p-6 font-mono text-xs text-muted-foreground overflow-hidden relative shadow-sm flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 py-1 px-2 border-b border-l border-border bg-muted text-[9px] tracking-widest text-primary">
              SYSTEM_SPECS
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-foreground font-bold">Amritanshu@Lab:~$</span>
                <span className="text-muted-foreground">sysinfo --profile</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 leading-relaxed pl-4 border-l border-border">
                <div className="space-y-1">
                  <div><span className="text-primary font-semibold">Background:</span> Final-Year B.Tech</div>
                  <div><span className="text-primary font-semibold">Focus:</span> AI Systems Engineering</div>
                  <div><span className="text-primary font-semibold">Security:</span> Aegis Middleware</div>
                  <div><span className="text-primary font-semibold">Evaluation:</span> Deterministic Pipelines</div>
                </div>
                <div className="space-y-1">
                  <div><span className="text-primary font-semibold">Architecture:</span> Scalable & Resilient</div>
                  <div><span className="text-primary font-semibold">Performance:</span> Low-latency Systems</div>
                  <div><span className="text-primary font-semibold">Academics:</span> 7.72 CGPA</div>
                  <div><span className="text-primary font-semibold">Strategy:</span> Data-driven Execution</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Live OS Logs Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-xl bg-card border border-border p-6 relative overflow-hidden flex flex-col justify-between font-mono text-xs text-muted-foreground min-h-[250px] shadow-sm"
          >
            <div className="absolute top-0 right-0 py-1 px-2 border-b border-l border-border bg-muted text-[9px] tracking-widest text-primary">
              SYSTEM_LOGS
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-border pb-2 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-destructive/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <span className="w-2 h-2 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-foreground font-bold">Amritanshu@Logs:~$</span>
                </div>
              </div>

              {/* Scrolling Log stream block */}
              <div className="flex flex-col space-y-2.5 pl-4 border-l border-border max-h-[170px] overflow-y-auto scrollbar-cyber pr-1 select-none text-[11px] leading-relaxed text-left">
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
                      <span className="text-muted-foreground font-bold">&gt;</span>
                      <span>{log.text}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 font-mono text-[9px] text-muted-foreground">
              <Terminal size={12} className="text-primary" />
              <span>LOG STREAM ACTIVE</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
