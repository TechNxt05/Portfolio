"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Users, Layers, Play, CheckCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlowStep {
  name: string;
  role: string;
  status: "idle" | "active" | "success" | "warning";
  x: number;
  y: number;
  details: string;
}

interface FlowSystem {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  steps: FlowStep[];
  connections: { from: number; to: number }[];
  consoleLogs: string[];
}

export function SystemsArchitecture() {
  const [activeSystemId, setActiveSystemId] = useState<string>("swarm");
  const [activeStepIdx, setActiveStepIdx] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simLogIdx, setSimLogIdx] = useState<number>(3);

  const systems: FlowSystem[] = [
    {
      id: "swarm",
      name: "LangGraph Cyber Swarm",
      icon: <Users size={16} />,
      tagline: "7-Agent Collaborative Graph (CyberGuardAI)",
      description: "How the LangGraph multi-agent swarm operates dynamically: parsing user evidence, orchestrating autonomous web search, constructing attack nodes, and streaming findings.",
      steps: [
        { name: "User Evidence", role: "OCR Ingestion", status: "success", x: 10, y: 50, details: "Accepts documents, screenshots, and system dumps. Runs Gemini Vision to extract OCR text." },
        { name: "Swarm Planner", role: "LangGraph Router", status: "active", x: 30, y: 25, details: "Parses intent and splits forensic requests into concurrent tasks across specialized agent nodes." },
        { name: "Threat Researcher", role: "Tavily Search Agent", status: "idle", x: 55, y: 15, details: "Queries active cyber security databases and search APIs to match IOCs and attack signatures." },
        { name: "Evidence Parser", role: "Verification Agent", status: "idle", x: 55, y: 50, details: "Cross-checks facts against local threat dictionaries to prune false telemetry." },
        { name: "WebSocket Stream", role: "FastAPI Gateway", status: "idle", x: 80, y: 50, details: "Pushes real-time execution states and parsed telemetry back to the user frontend." },
        { name: "Attack Tree", role: "React Flow Rendering", status: "idle", x: 80, y: 85, details: "Generates an interactive canvas showing attack vectors, risks, and recommended actions." }
      ],
      connections: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 3, to: 4 },
        { from: 4, to: 5 }
      ],
      consoleLogs: [
        "Initializing LangGraph swarm state...",
        "Executing Gemini Vision parser on evidence_ocr.png",
        " planner: Spawning threat-researcher and evidence-parser concurrently.",
        " threat-researcher: querying Tavily API for 'UPI fraud signature'",
        " evidence-parser: validating source-grounding index. Cosine: 0.96",
        "Stream connection established via WebSockets. Rendering attack nodes."
      ]
    },
    {
      id: "rag",
      name: "Isolated Enterprise RAG",
      icon: <Layers size={16} />,
      tagline: "Workspace Isolation & Citations (RAGOps)",
      description: "Enterprise knowledge base querying with zero database leakage. Embeddings, isolated vector queries, retrieval inspector audits, and strict source checks.",
      steps: [
        { name: "User Query", role: "Query Entry", status: "success", x: 10, y: 50, details: "Accepts natural language user input. Applies prompt sanitization filters." },
        { name: "Aegis Shield", role: "Safety Middleware", status: "active", x: 30, y: 50, details: "Runs regex and embeddings checks to detect prompt injections and SQL vector triggers." },
        { name: "Workspace Router", role: "Metadata Filter", status: "idle", x: 55, y: 25, details: "Restricts vector retrieval strictly to user's project ID, bypassing global indexes." },
        { name: "FAISS Vector", role: "pgvector Storage", status: "idle", x: 55, y: 75, details: "Queries nearest-neighbor indexes. Performs high-speed cosine similarity lookup." },
        { name: "Citation Audit", role: "Deterministic Ingestion", status: "idle", x: 80, y: 50, details: "Cross-checks LLM response tokens against source documents, citing paragraph offsets." }
      ],
      connections: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 3, to: 4 }
      ],
      consoleLogs: [
        "Query parsed: 'Summarize compliance rules for project A'",
        "Applying aegis-agent middleware... Max risk score: 0.05 (SAFE)",
        "Applying pgvector filters: workspace_id = 'prj_99af2'",
        "FAISS: Cosine distance calculation completed. K=4 chunks.",
        "Response generated. Citation checker matched 94% of tokens to context."
      ]
    },
    {
      id: "safety",
      name: "Zero-Trust Agent Safety",
      icon: <Shield size={16} />,
      tagline: "Runtime Safety & Policy Firewall (Aegis-Agent)",
      description: "A pluggable firewall middleware intercepting raw agent model output. Evaluates hallucinations and injections, computing a weighted risk factor.",
      steps: [
        { name: "Model Output", role: "Raw LLM Response", status: "success", x: 10, y: 50, details: "Intercepts the raw output string from models (GPT-4, Claude, Gemini)." },
        { name: "Aegis-Agent", role: "Middleware Core", status: "active", x: 30, y: 50, details: "Initiates parallel risk scoring detectors on raw response tokens." },
        { name: "Hallucination Det.", role: "Semantic Checker", status: "idle", x: 55, y: 20, details: "Checks cosine similarity distance against document embeddings to flag hallucinations." },
        { name: "Injection Det.", role: "Jailbreak Classifier", status: "idle", x: 55, y: 50, details: "Checks against 30+ regex jailbreak templates and instruction override prompts." },
        { name: "PII & PII Checker", role: "Compliance Auditor", status: "idle", x: 55, y: 80, details: "Detects passwords, private API keys, credit cards, SSN, and database seeds." },
        { name: "Policy Gate", role: "Warn / Block / Rewrite", status: "idle", x: 80, y: 50, details: "Applies action policies. High-risk vectors are instantly rewritten or blocked." }
      ],
      connections: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 5 },
        { from: 4, to: 5 }
      ],
      consoleLogs: [
        "Aegis-Agent intercepted raw string (480 chars).",
        "Running hallucination check... Cosine similarity is 0.89 - Grounded.",
        "Running prompt injection parser... Danger pattern: 'ignore previous' NOT found.",
        "Running PII scanner... Danger pattern: 'API_KEY' NOT found.",
        "Weighted risk calculated: 0.12 (LOW). Safe to propagate."
      ]
    }
  ];

  const activeSystem = systems.find((s) => s.id === activeSystemId) || systems[0];

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimLogIdx(1);
    
    let step = 0;
    const interval = setInterval(() => {
      if (step < activeSystem.steps.length) {
        setActiveStepIdx(step);
        setSimLogIdx((prev) => Math.min(prev + 1, activeSystem.consoleLogs.length));
        step++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setActiveStepIdx(null);
      }
    }, 1200);
  };

  return (
    <section id="architecture" className="py-24 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
            Interactive Engineering Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
            Systems <span className="text-primary/70">Architecture Canvas</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            Toggle between core architectures. Click nodes to trace telemetry pathways, verify safety middleware pipelines, and review execution outputs.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {systems.map((sys) => (
            <button
              key={sys.id}
              onClick={() => {
                setActiveSystemId(sys.id);
                setActiveStepIdx(null);
                setSimLogIdx(sys.consoleLogs.length);
              }}
              className={`flex items-center gap-2 py-2.5 px-5 rounded-xl border text-sm font-mono transition-all cursor-pointer ${
                activeSystemId === sys.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {sys.icon}
              {sys.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 relative flex flex-col justify-center min-h-[400px] shadow-sm overflow-hidden">
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {activeSystem.connections.map((conn, cIdx) => {
                const fromNode = activeSystem.steps[conn.from];
                const toNode = activeSystem.steps[conn.to];
                const isPathActive = activeStepIdx === conn.from || activeStepIdx === conn.to;
                
                return (
                  <g key={cIdx}>
                    <line
                      x1={`${fromNode.x}%`}
                      y1={`${fromNode.y}%`}
                      x2={`${toNode.x}%`}
                      y2={`${toNode.y}%`}
                      stroke={isPathActive ? "currentColor" : "currentColor"}
                      strokeOpacity={isPathActive ? 0.4 : 0.1}
                      strokeWidth={isPathActive ? 1.5 : 1}
                      className="text-primary transition-all duration-300"
                    />
                    
                    {isPathActive && (
                      <line
                         x1={`${fromNode.x}%`}
                         y1={`${fromNode.y}%`}
                         x2={`${toNode.x}%`}
                         y2={`${toNode.y}%`}
                         stroke="currentColor"
                         strokeWidth={1.5}
                         strokeDasharray="4 16"
                         className="text-primary animate-[scan_3s_linear_infinite]"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            <div className="absolute inset-0 pointer-events-none">
              {activeSystem.steps.map((step, sIdx) => {
                const isActive = activeStepIdx === sIdx;
                
                let statusClass = "bg-muted border-border text-muted-foreground";
                if (step.status === "success") statusClass = "bg-green-100/50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400";
                if (step.status === "active") statusClass = "bg-blue-100/50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400";
                if (isActive) statusClass = "bg-primary border-primary text-primary-foreground shadow-md ring-2 ring-primary/20 scale-105";

                return (
                  <button
                    key={sIdx}
                    onClick={() => setActiveStepIdx(sIdx)}
                    style={{ left: `${step.x}%`, top: `${step.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border p-3 flex flex-col items-center justify-center font-mono text-[10px] w-[130px] shadow-sm transition-all duration-300 pointer-events-auto cursor-pointer ${statusClass}`}
                  >
                    <span className="font-bold tracking-tight text-center leading-none block mb-1">{step.name}</span>
                    <span className="text-[8px] opacity-80 text-center font-medium leading-none block">{step.role}</span>
                  </button>
                );
              })}
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-3 pointer-events-auto z-20">
              <Button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs font-mono rounded-lg h-8 px-4 flex items-center gap-1.5"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw size={12} className="animate-spin" /> RUNNING...
                  </>
                ) : (
                  <>
                    <Play size={12} fill="currentColor" /> INITIATE SIMULATION
                  </>
                )}
              </Button>
            </div>

            <div className="absolute top-4 right-4 font-mono text-[9px] text-muted-foreground">
              ACTIVE_SYSTEM: {activeSystem.id.toUpperCase()}_ENV
            </div>

          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 justify-between items-stretch">
            
            <div className="bg-card border border-border rounded-3xl p-6 text-left flex-1 flex flex-col justify-between shadow-sm">
              <div>
                <span className="inline-block py-0.5 px-2 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold font-mono uppercase tracking-wider mb-3">
                  System Context
                </span>
                <h4 className="text-lg font-bold text-foreground tracking-tight leading-none mb-1">
                  {activeSystem.name}
                </h4>
                <p className="text-xs font-mono text-primary mb-3 font-semibold">
                  {activeSystem.tagline}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans mb-4">
                  {activeSystem.description}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {activeStepIdx !== null ? (
                  <motion.div
                    key={activeStepIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-3 bg-muted rounded-2xl border border-border font-mono text-xs space-y-1.5"
                  >
                    <div className="text-[10px] text-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle size={10} className="text-primary animate-pulse" />
                      Node Audit: {activeSystem.steps[activeStepIdx].name}
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed font-sans font-medium">
                      {activeSystem.steps[activeStepIdx].details}
                    </p>
                  </motion.div>
                ) : (
                  <div className="p-3 bg-muted rounded-2xl border border-border border-dashed font-mono text-[10px] text-muted-foreground text-center py-6 leading-relaxed">
                    Hover or click on any system node to inspect execution details and parameters.
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-muted border border-border rounded-3xl p-5 font-mono text-[11px] text-muted-foreground min-h-[160px] flex flex-col justify-between text-left shadow-sm relative">
              <div className="flex items-center justify-between border-b border-border pb-2 mb-2 text-[9px] text-muted-foreground">
                <span>SIMULATED_FEED.LOG</span>
                <span className="text-primary animate-pulse">● LIVE</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-end space-y-1.5">
                {activeSystem.consoleLogs.slice(0, simLogIdx).map((log, lIdx) => (
                  <div key={lIdx} className="leading-tight flex items-start gap-1">
                    <span className="text-primary font-bold select-none">&gt;</span>
                    <span className="text-foreground opacity-80">
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
