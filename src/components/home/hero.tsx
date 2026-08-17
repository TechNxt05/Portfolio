"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal as TermIcon, Shield, Layers, Users, Cpu, FileText, ArrowRight, Github, Linkedin, Calendar, Target, RotateCw } from "lucide-react";
import Link from "next/link";
import { useChat } from "@/context/chat-context";
import { HeroBackground } from "@/components/ui/background-visuals";


const photos = [
  {
    src: "/Me1.jpeg",
    label: "TARGET_NODE_02",
    role: "Dhoni-Execution Mindset",
    desc: "Inspired by MS Dhoni's cool-headed leadership under intense pressure. Designing high-availability systems with deterministic, calm execution loops.",
    tag: "DHONI_FLOW"
  },
  {
    src: "/ME.jpeg",
    label: "TARGET_NODE_01",
    role: "Strategic Chess Planner",
    desc: "Rapid ELO 1450+ (Top 10%). Translating strategic chess foresight, defensive threat analysis, and branches-pruning logic directly into multi-agent swarms.",
    tag: "CHESS_TACTICS"
  },
  {
    src: "/Me2.jpeg",
    label: "TARGET_NODE_03",
    role: "Core Systems Engineer",
    desc: "Bridging Win32 telemetry loops, concurrent database design, and real-time processing streams with low latency.",
    tag: "SYSTEMS_CORE"
  }
];

export function Hero() {
  const { openWithContext } = useChat();
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

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

  const cyclePhoto = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setCurrentPhotoIdx((prev) => (prev + 1) % photos.length);
      setIsGlitching(false);
    }, 150);
  };

  // Automatic photo slideshow cycle effect (every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      cyclePhoto();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openAgentInquiry = (topic: string) => {
    openWithContext(`Tell me about your ${topic} project in detail.`);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 px-6 md:px-12 bg-background">
      
      {/* Main Grid Wrapper */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* LEFT COLUMN: Premium Copy */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              <Cpu size={12} className="animate-spin-slow" /> AI Systems Lab
            </span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-none">
            Amritanshu Yadav
          </h1>

          {/* Specialization list */}
          <p className="text-lg font-mono text-muted-foreground tracking-wide font-semibold">
            AI Engineer · LLM Systems · Backend Infrastructure
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl font-sans">
            I build production-grade AI systems, focusing on LLM pipelines, reliability, RAG architectures, and multi-agent workflows.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 border-y border-border py-4 max-w-xl font-mono text-xs text-muted-foreground">
            <div>
              <span className="block text-foreground text-base font-bold">15+</span>
              AI Platforms Built
            </div>
            <div>
              <span className="block text-foreground text-base font-bold">3</span>
              IEEE Publications
            </div>
            <div>
              <span className="block text-foreground text-base font-bold">npm package</span>
              aegis-agent
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-xl h-12 px-6">
              <Link href="#projects" className="flex items-center gap-2">
                Explore Systems <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted bg-transparent hover:text-foreground rounded-xl h-12 px-6">
              <Link href="https://drive.google.com/file/d/13VDMnp0VIXsz1seBq1XAzNJNQo_NTnrs/view?usp=sharing" target="_blank" className="flex items-center gap-2">
                <FileText size={16} /> Resume
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
          className="lg:col-span-5 relative w-full h-[540px] max-w-[480px] lg:max-w-none mx-auto cursor-default pointer-events-auto"
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
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
            </div>

            {/* LAYER 2: The Core Console Terminal Panel (middle layer, rich glassmorphism) */}
            <div 
              style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
              className="absolute inset-4 rounded-2xl bg-card border border-border flex flex-col p-5 overflow-hidden shadow-sm select-none cursor-pointer group"
              onClick={cyclePhoto}
            >
              {/* Terminal bar */}
              <div className="flex items-center justify-between border-b border-border pb-2 mb-2.5 font-mono text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-destructive/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <span className="w-2 h-2 rounded-full bg-green-500/70" />
                  <span className="ml-2 font-semibold">VIEWER_MODULE</span>
                </div>
              </div>

              {/* Title / Node Readout */}
              <div className="w-full flex items-center justify-between font-mono text-[10px] text-foreground border-b border-border pb-2 mb-2.5 shrink-0">
                <div className="flex items-center gap-1 font-bold">
                  <Target size={12} className="text-primary" />
                  <span>{photos[currentPhotoIdx].label}</span>
                </div>
                <div className="flex items-center gap-1.5 text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{photos[currentPhotoIdx].tag}</span>
                </div>
              </div>

              {/* PROFILE IMAGE SLIDESHOW: cycles on click */}
              <div className="relative w-full flex-1 min-h-[200px] rounded-xl overflow-hidden border border-border bg-muted/30 mb-3 flex items-center justify-center group-hover:border-primary/20 transition-colors">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhotoIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      filter: isGlitching ? "blur(2px) grayscale(100%)" : "blur(0px) grayscale(0%)"
                    }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={photos[currentPhotoIdx].src}
                      alt={photos[currentPhotoIdx].role}
                      className="object-contain w-full h-full transition-all duration-700"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Telemetry caption details */}
              <div className="w-full text-left font-mono space-y-1 bg-muted/50 border border-border rounded-lg p-2.5 shrink-0">
                <div className="text-[10px] text-foreground font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>{photos[currentPhotoIdx].role}</span>
                </div>
                <p className="text-[9px] text-muted-foreground leading-normal font-sans">
                  {photos[currentPhotoIdx].desc}
                </p>
              </div>

              {/* Slideshow dot indicators & interactive cycle prompt at bottom */}
              <div className="w-full flex items-center justify-between pt-2 mt-2 border-t border-border text-muted-foreground font-mono text-[9px] shrink-0">
                <div className="flex items-center gap-1.5">
                  {photos.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentPhotoIdx ? "bg-primary w-3" : "bg-primary/20"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 hover:text-foreground transition-colors">
                  <RotateCw size={10} className="animate-spin-slow" />
                  <span>Click to cycle</span>
                </div>
              </div>
            </div>

            {/* LAYER 3: The Front Stats Panel (highest layer, overlapping at bottom right) */}
            <div 
              style={{ transform: "translateZ(45px)" }}
              className="absolute -right-4 -bottom-4 w-72 rounded-xl bg-card border border-border p-4 shadow-lg"
            >
              <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-muted-foreground text-center">
                <div className="bg-muted py-2 rounded border border-border">
                  <span className="block text-foreground font-bold text-xs">1450+</span>
                  CHESS ELO
                </div>
                <div className="bg-muted py-2 rounded border border-border">
                  <span className="block text-foreground font-bold text-xs">3</span>
                  IEEE PAPERS
                </div>
                <div className="bg-muted py-2 rounded border border-border">
                  <span className="block text-foreground font-bold text-xs">3+</span>
                  DEPLOYMENTS
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 z-10">
        <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Scroll Down</span>
        <ArrowDown className="text-primary animate-bounce" size={16} />
      </div>

    </section>
  );
}
