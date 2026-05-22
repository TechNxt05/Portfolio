"use client";

import { motion } from "framer-motion";
import { Terminal, Github, ExternalLink, Check, Copy, Package, Star, Award, Layers } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function OpenSourcePackage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install aegis-agent");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Mock GitHub contribution dots (systems engineering grid)
  const contributionWeeks = Array.from({ length: 24 }).map(() =>
    Array.from({ length: 7 }).map(() => {
      const val = Math.random();
      if (val < 0.3) return "bg-white/5"; // none
      if (val < 0.65) return "bg-cyan-950/40 border border-cyan-800/10"; // low
      if (val < 0.85) return "bg-cyan-800/30 border border-cyan-500/10"; // med
      return "bg-cyan-500/40 border border-cyan-400/20"; // high
    })
  );

  return (
    <section id="opensource" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5 dot-matrix">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Open Source Architectures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">NPM Middleware</span> Package
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Authored and published reusable zero-trust AI infrastructure to wrap any LLM agent pipeline in structured evaluation runtime guards.
          </p>
        </div>

        {/* NPM Card and Git Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Premium NPM Package Details */}
          <div className="lg:col-span-7 bg-white/2 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 py-1 px-3 bg-red-500/15 border-b border-l border-white/5 font-mono text-[9px] text-red-400 uppercase tracking-widest font-bold">
              NPM Registry
            </div>

            <div className="space-y-6 text-left">
              {/* Registry Header */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center shrink-0">
                  <Package size={22} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-none font-mono">
                    aegis-agent
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    v1.0.0 &middot; MIT License &middot; Zero-Trust Firewall
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                A framework-agnostic runtime safety + evaluation middleware for LLM agents. Wraps any async agent node, running pluggable risk detectors (regex jailbreaks, cosine similarity hallucination checks, bracket citation validation) and calculates a weighted risk score before response propagation.
              </p>

              {/* Install Ticker Command */}
              <div className="bg-black border border-white/5 rounded-xl p-3.5 flex items-center justify-between font-mono text-xs text-gray-400 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 select-none">$</span>
                  <span>npm install aegis-agent</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 hover:bg-white/5 hover:text-white rounded border border-white/0 hover:border-white/5 transition-all cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Pluggable modules check */}
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest">Included Safety Detectors</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>cosineSimilarityHallucinationDetector</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>regexJailbreakInjectionDetector</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>citationGroundingVerifier</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>weightedCategoryRiskScoring</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
              <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg text-xs font-mono">
                <a href="https://www.npmjs.com/package/aegis-agent" target="_blank" className="flex items-center gap-1.5">
                  Registry Page <ExternalLink size={12} />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-white/10 hover:bg-white/5 bg-transparent rounded-lg text-xs font-mono">
                <a href="https://github.com/TechNxt05/Aegis-Agent" target="_blank" className="flex items-center gap-1.5">
                  <Github size={12} /> Star Repository
                </a>
              </Button>
            </div>

          </div>

          {/* RIGHT: Contribution Calendar & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between items-stretch">
            
            {/* Git statistics card */}
            <div className="bg-white/2 border border-white/5 rounded-3xl p-6 text-left flex-1 flex flex-col justify-between shadow-xl">
              <div>
                <span className="inline-block py-0.5 px-2 rounded bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-[10px] font-bold font-mono uppercase tracking-wider mb-3">
                  Commit Logs
                </span>
                <h4 className="text-lg font-bold text-white tracking-tight leading-none mb-1 flex items-center gap-1.5">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" /> Active Contributor
                </h4>
                <p className="text-xs text-gray-500 font-sans">
                  Open-source contributions pushing high-performance telemetry, evaluation layers, and RAG architectures.
                </p>
              </div>

              {/* Grid Calendar Visual */}
              <div className="my-6">
                <div className="flex justify-between items-center mb-2 font-mono text-[9px] text-gray-500 leading-none">
                  <span>GitHub Contributions (Past 24 Weeks)</span>
                  <span>450+ commits</span>
                </div>
                
                {/* Scrollable contribution grid wrapper */}
                <div className="w-full overflow-x-auto scrollbar-cyber pb-2">
                  <div className="flex gap-1 min-w-[340px]">
                    {contributionWeeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {week.map((cell, cIdx) => (
                          <div
                            key={cIdx}
                            className={`w-[10px] h-[10px] rounded-[1px] transition-all duration-300 hover:scale-110 ${cell}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 border-t border-white/5 pt-4">
                <span>LICENSE: MIT</span>
                <span className="text-cyan-400 font-bold flex items-center gap-1">
                  <Award size={12} className="text-cyan-400" /> 100% Provenance Build
                </span>
              </div>
            </div>

            {/* Quick terminal wrapper */}
            <div className="bg-black border border-white/5 rounded-3xl p-5 font-mono text-[11px] text-gray-500 shadow-inner relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-cyan-400" />
                <span className="font-bold">aegis-agent@v1.0.0:</span>
                <span className="text-gray-400">Build passed. (Changesets synced)</span>
              </div>
              <Badge variant="outline" className="border-emerald-500/25 bg-emerald-500/5 text-emerald-400 text-[9px] font-mono rounded">
                100% Attestation
              </Badge>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
