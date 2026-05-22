"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal as TermIcon, Shield, Layers, Users, Cpu, FileText, ArrowRight, Github, Linkedin, Calendar } from "lucide-react";
import Link from "next/link";
import { useRecruiterMode } from "@/context/recruiter-context";
import { useChat } from "@/context/chat-context";
import { HeroBackground } from "@/components/ui/background-visuals";

// Inline dynamic Canvas Particle Network
function CanvasNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Node definition
    const nodeCount = 28;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; pulse: number; type: "core" | "agent" | "db" | "eval" }[] = [];
    
    const types: ("core" | "agent" | "db" | "eval")[] = ["core", "agent", "db", "eval"];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        pulse: Math.random() * Math.PI,
        type: types[i % 4],
      });
    }

    const colors = {
      core: "rgba(6, 182, 212, ", // Cyan
      agent: "rgba(168, 85, 247, ", // Purple
      db: "rgba(16, 185, 129, ", // Emerald
      eval: "rgba(239, 68, 68, ", // Red
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid paths
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw links
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, colors[nodes[i].type] + alpha + ")");
            grad.addColorStop(1, colors[nodes[j].type] + alpha + ")");
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;
        const glowOpacity = 0.25 + Math.sin(node.pulse) * 0.15;

        // Radial glow
        const radGlow = ctx.createRadialGradient(node.x, node.y, 1, node.x, node.y, currentRadius * 4);
        radGlow.addColorStop(0, colors[node.type] + glowOpacity + ")");
        radGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radGlow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = colors[node.type] + "0.85)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

const mockLogs = [
  { text: "[AEGIS SHIELD] Active risk scoring engine initialized.", color: "text-cyan-400" },
  { text: "[AUDIT-AI] Cosine similarity: 0.9412 - Verified Grounded.", color: "text-emerald-400" },
  { text: "[CYBERGUARD] Multi-agentLangGraph Swarm active (7 nodes).", color: "text-purple-400" },
  { text: "[DATAPILOT] Core loop execution: STATE_PLANNING -> OK.", color: "text-yellow-400" },
  { text: "[RAG-OPS] isolated workspace FAISS indices synced successfully.", color: "text-cyan-400" },
  { text: "[EVAL-ENGINE] Adversarial suite compiled: 0 anomalies.", color: "text-pink-400" },
  { text: "[DRDO-TELEMETRY] C++ Win32 Telemetry Loop synced. Lag: 0ms.", color: "text-emerald-400" },
  { text: "[SYSTEM] Production metrics output: 99.8% Safety Index.", color: "text-cyan-300" }
];

export function Hero() {
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();
  const { openWithContext } = useChat();
  const [logIndex, setLogIndex] = useState(0);
  const [activeLogs, setActiveLogs] = useState<typeof mockLogs>([]);

  // Mouse coordinate tracking for 3D parallax dashboard
  const dashRef = useRef<HTMLDivElement>(null);
  const dashX = useMotionValue(0);
  const dashY = useMotionValue(0);
  
  const dashSpringConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const dashRotateX = useSpring(useTransform(dashY, [-0.5, 0.5], [12, -12]), dashSpringConfig);
  const dashRotateY = useSpring(useTransform(dashX, [-0.5, 0.5], [-12, 12]), dashSpringConfig);

  const handleDashMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const dash = dashRef.current;
    if (!dash) return;
    const rect = dash.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    dashX.set((mouseX / width) - 0.5);
    dashY.set((mouseY / height) - 0.5);
  };

  const handleDashMouseLeave = () => {
    dashX.set(0);
    dashY.set(0);
  };

  // Telemetry log stream effect
  useEffect(() => {
    setActiveLogs(mockLogs.slice(0, 3));
    const interval = setInterval(() => {
      setLogIndex((prev) => {
        const next = (prev + 1) % mockLogs.length;
        setActiveLogs((logs) => {
          const updated = [...logs.slice(1), mockLogs[next]];
          return updated;
          return updated;
        });
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const openAgentInquiry = (topic: string) => {
    openWithContext(`Tell me about your ${topic} project in detail.`);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 px-6 md:px-12 bg-black circuit-grid">
      
      {/* scrolling 3D grid and particle visuals */}
      <HeroBackground />
      
      {/* Decorative gradient floating orbs */}
      <div className="absolute top-1/4 left-1/12 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[150px] animate-pulse pointer-events-none" />
      
      {/* Grid Fine Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />

      {/* Main Grid Wrapper */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* LEFT COLUMN: Premium Copy */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Badge Switcher */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Cpu size={12} className="animate-spin-slow" /> Deployed AI Infra
            </span>
            <button
              onClick={toggleRecruiterMode}
              className={`inline-flex items-center gap-2 py-1 px-3 rounded-full border transition-all text-xs font-bold cursor-pointer ${
                isRecruiterMode
                  ? "bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                  : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isRecruiterMode ? "bg-amber-400 animate-ping" : "bg-white/30"}`} />
              {isRecruiterMode ? "Recruiter Mode Active" : "Enable Recruiter Mode"}
            </button>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
            {isRecruiterMode ? (
              <>
                Production-Grade <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 text-cyan-glow">
                  AI Systems Engineer
                </span>
              </>
            ) : (
              <>
                Amritanshu <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Yadav</span>
              </>
            )}
          </h1>

          {/* Specialization list */}
          <p className="text-lg font-mono text-cyan-400/90 tracking-wide font-semibold">
            AI Engineer · LLM Systems · RAG · Multi-Agent · Backend Infrastructure
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl font-sans">
            {isRecruiterMode ? (
              "Final-year B.Tech specialist. Engineered real-time Win32 C++ avionics telemetry loops at DRDO and containerized parallel LLM evaluation platforms at XelronAI. Published 3 peer-reviewed IEEE papers. Focused on enterprise-grade LLM security, FAISS workspace isolation, and self-healing systems."
            ) : (
              "I build production-grade AI systems focused on LLM pipelines, AI reliability, RAG architectures, and multi-agent workflows. Currently working on deployed AI infrastructure, evaluation systems, and autonomous agent platforms."
            )}
          </p>

          {/* Telemetry quick stats */}
          <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-4 max-w-xl font-mono text-xs text-gray-500">
            <div>
              <span className="block text-white text-base font-bold">15+</span>
              AI Platforms Built
            </div>
            <div>
              <span className="block text-white text-base font-bold">3</span>
              IEEE Publications
            </div>
            <div>
              <span className="block text-white text-base font-bold">npm package</span>
              aegis-agent Safety
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.25)] border-0 h-12 px-6">
              <Link href="#projects" className="flex items-center gap-2">
                Explore Architectures <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 bg-transparent hover:text-white rounded-xl h-12 px-6">
              <Link href="https://drive.google.com/file/d/13VDMnp0VIXsz1seBq1XAzNJNQo_NTnrs/view?usp=sharing" target="_blank" className="flex items-center gap-2">
                <FileText size={16} /> Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 bg-transparent hover:text-white rounded-xl h-12 px-6">
              <Link href="#contact" className="flex items-center gap-2">
                Connect
              </Link>
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive 3D Parallax Telemetry Stack */}
        <div 
          ref={dashRef}
          onMouseMove={handleDashMouseMove}
          onMouseLeave={handleDashMouseLeave}
          style={{ perspective: "1000px" }}
          className="lg:col-span-5 relative w-full aspect-square max-w-[480px] lg:max-w-none mx-auto cursor-default pointer-events-auto"
        >
          {/* Main 3D Card Stack Container */}
          <motion.div
            style={{
              rotateX: dashRotateX,
              rotateY: dashRotateY,
              transformStyle: "preserve-3d",
            }}
            className="w-full h-full relative z-10"
          >
            {/* LAYER 1: The Back Visualizer Panel (z-index background, deepest layer) */}
            <div 
              style={{ transform: "translateZ(-30px)" }}
              className="absolute inset-0 rounded-2xl bg-black/40 border border-white/5 overflow-hidden pointer-events-none"
            >
              <CanvasNetwork />
            </div>

            {/* LAYER 2: The Core Console Terminal Panel (middle layer, rich glassmorphism) */}
            <div 
              style={{ transform: "translateZ(10px)" }}
              className="absolute inset-4 rounded-2xl bg-black/75 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col p-5 overflow-hidden shadow-cyan-glow/5"
            >
              {/* Terminal bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 font-mono text-[10px] text-gray-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <span className="w-2 h-2 rounded-full bg-green-500/70" />
                  <span className="ml-2 font-semibold text-gray-400">AMRITANSHU_3D_OS</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>3D_ACTIVE</span>
                </div>
              </div>

              {/* Simulated Live Console logs */}
              <div className="flex-1 flex flex-col justify-end font-mono text-xs space-y-2.5 text-left select-none scrollbar-cyber overflow-y-auto pr-1">
                <div className="text-gray-600 mb-1 border-b border-white/5 pb-1 text-[10px]">
                  * SYSTEM PIPELINE TELEMETRY FEED v3.12 *
                </div>
                
                <AnimatePresence initial={false}>
                  {activeLogs.map((log, idx) => (
                    <motion.div
                      key={log.text + idx}
                      initial={{ opacity: 0, x: -10, y: 5 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-2 leading-relaxed ${log.color}`}
                    >
                      <span className="text-gray-600 select-none">&gt;</span>
                      <span>{log.text}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* LAYER 3: The Front Stats Panel (highest layer, overlapping at bottom right) */}
            <div 
              style={{ transform: "translateZ(45px)" }}
              className="absolute -right-4 -bottom-4 w-72 rounded-xl bg-gradient-to-br from-zinc-950 to-black border border-cyan-500/30 p-4 shadow-[0_15px_35px_rgba(6,182,212,0.25)]"
            >
              <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-gray-400 text-center">
                <div className="bg-white/2 py-2 rounded border border-white/5">
                  <span className="block text-cyan-400 font-bold text-xs">28ms</span>
                  LATENCY
                </div>
                <div className="bg-white/2 py-2 rounded border border-white/5">
                  <span className="block text-purple-400 font-bold text-xs">1450+</span>
                  CHESS ELO
                </div>
                <div className="bg-white/2 py-2 rounded border border-white/5">
                  <span className="block text-emerald-400 font-bold text-xs">99.4%</span>
                  ACCURACY
                </div>
              </div>
            </div>

          </motion.div>

          {/* Holographic underglow rings */}
          <div className="absolute inset-[-20px] rounded-3xl bg-gradient-to-tr from-cyan-500/15 to-purple-500/15 blur-2xl opacity-40 animate-pulse pointer-events-none" />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 z-10">
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Scroll Down</span>
        <ArrowDown className="text-cyan-400 animate-bounce" size={16} />
      </div>

    </section>
  );
}
