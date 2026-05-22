"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
      {/* Dynamic Style injection for 3D scrolling grid */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 80px; }
        }
        .perspective-grid {
          perspective: 250px;
          perspective-origin: 50% 30%;
        }
        .perspective-grid-plane {
          transform: rotateX(75deg);
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-scroll 2.5s linear infinite;
        }
      `}} />

      {/* Retro-Futuristic 3D Grid floor */}
      <div className="absolute inset-0 perspective-grid w-full h-full opacity-60">
        <div className="absolute inset-0 perspective-grid-plane origin-top w-full h-[200%] -top-[50%]" />
      </div>

      {/* Cybernetic code stream or fine lines */}
      <svg className="absolute w-full h-full opacity-[0.04]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="0.15" fill="none" className="text-cyan-400" />
        <path d="M10,30 Q40,60 60,30 T90,70" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-indigo-400" />
        <path d="M20,80 Q50,40 80,80" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-purple-400" />
      </svg>

      {/* Glowing 3D Depth Orbs */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04], scale: [1, 1.1, 1], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[380px] h-[380px] bg-cyan-500/20 rounded-full blur-[110px]"
      />
      <motion.div
        animate={{ opacity: [0.04, 0.09, 0.04], scale: [1, 1.15, 1], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[130px]"
      />

      {/* Interactive Floating 3D Geometric Nodes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Node 1: Glowing cyan tetrahedron/cube mimic */}
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            y: [0, -25, 0],
            rotateX: [0, 180, 360],
            rotateY: [0, 360, 720],
          }}
          transition={{
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 25, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-[20%] right-[15%] w-12 h-12 border border-cyan-500/20 bg-cyan-500/5 rounded-xl shadow-cyan-glow/5"
        />

        {/* Node 2: Purple octahedron mimic */}
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            y: [0, 30, 0],
            rotateX: [360, 180, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            y: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 },
            rotateX: { duration: 28, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 24, repeat: Infinity, ease: "linear" },
          }}
          className="absolute bottom-[25%] left-[10%] w-16 h-16 border border-purple-500/20 bg-purple-500/5 rounded-full shadow-purple-glow/5"
        />
      </div>
    </div>
  );
}

export function ProjectsBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
      {/* Fine isometric Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_80%,transparent_100%)]" />

      {/* Floating 3D chess pieces as deep volumetric wireframes */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [12, -12, 12],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-8 opacity-[0.03] text-[10rem] font-black text-cyan-400 select-none blur-[2px]"
      >
        ♟
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          rotate: [-12, 12, -12],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 left-4 opacity-[0.02] text-[14rem] font-black text-indigo-400 select-none blur-[3px]"
      >
        ♜
      </motion.div>
    </div>
  );
}

export function AchievementsBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_70%)]" />
      
      {/* 3D Nested Concentric Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[600px] w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ rotateX: [45, 45], rotateY: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-amber-500/10 rounded-full opacity-35"
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          animate={{ rotateX: [-45, -45], rotateY: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[450px] h-[450px] border border-white/5 rounded-full opacity-20"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>
    </div>
  );
}

export function SkillsBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
      {/* Tech Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_80%,transparent_100%)]" />

      {/* Floating 3D Binary telemetry layers */}
      <div className="absolute top-24 left-24 opacity-[0.05] text-xs font-mono text-cyan-400 select-none">
        010010101 &middot; SYSTEM_OK<br />
        101001010 &middot; RAG_SYNC<br />
        001010101 &middot; SWARM_ACTIVE
      </div>
    </div>
  );
}

export function EducationBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/5 to-transparent blur-3xl opacity-30" />
    </div>
  );
}
