"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Shield, Terminal, BookOpen, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  title: string;
  metric: string;
  category: string;
  description: string;
  telemetry: string;
  icon: React.ReactNode;
  colorClass: string;
}

export function Achievements() {
  const list: Achievement[] = [
    {
      title: "Smart India Hackathon Team Lead",
      metric: "50% Operational Workload Cut",
      category: "Platform Orchestration",
      description: "Appointed team lead to build an autonomous AYUSH medical intelligence portal. Integrated localized AI assistants and patient routing databases, eliminating excessive manual filing delays and paperwork bottlenecks.",
      telemetry: "STATUS: DEPLOYED_SIH_FINALIST_2024",
      icon: <Trophy className="text-yellow-400 w-5 h-5" />,
      colorClass: "border-yellow-500/20 text-yellow-400 bg-yellow-500/5 shadow-yellow-glow/5"
    },
    {
      title: "3 peer-reviewed IEEE Publications",
      metric: "ML Parametric Optimization Models",
      category: "Scientific Research",
      description: "Authored 3 peer-reviewed papers published in IEEE conferences (Tokyo, Dubai, Japan). Engineered neural optimization networks predicting high-frequency microfluidic waveguide parameters and lightweight Cataract models (CCNCPS).",
      telemetry: "STATUS: INDEXED_IEEE_SCHOLAR",
      icon: <BookOpen className="text-cyan-400 w-5 h-5" />,
      colorClass: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5 shadow-cyan-glow/5"
    },
    {
      title: "aegis-agent NPM Safety Package",
      metric: "100% Provenance Attested Build",
      category: "Open Source Systems",
      description: "Published an independent, zero-trust middleware firewall to secure raw LLM pipeline outputs. Built-in sentence cosine hallucination scoring, 30+ regex injection models, and citation checks with zero external API dependencies.",
      telemetry: "STATUS: SYNCED_CHANGESETS_REGISTRY",
      icon: <Shield className="text-emerald-400 w-5 h-5" />,
      colorClass: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5 shadow-emerald-glow/5"
    },
    {
      title: "Amazon ML Summer School Trainee",
      metric: "Top 5% Selection Rate",
      category: "Select Program",
      description: "Rigorous training under Amazon Principal Scientists in computer vision, deep reinforcement learning, and LLM fine-tuning structures. Selected among the top 3,000 trainees nationwide from over 60,000+ candidates.",
      telemetry: "STATUS: CERTIFIED_AMAZON_ML_2025",
      icon: <Star className="text-purple-400 w-5 h-5" />,
      colorClass: "border-purple-500/20 text-purple-400 bg-purple-500/5 shadow-purple-glow/5"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5 dot-matrix-fine">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Milestones & Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Achievements & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">System Records</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Key operational milestones demonstrating team leadership, scientific research excellence, and contributions to robust open-source software.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className={`rounded-3xl border border-white/5 bg-white/2 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-cyan-glow/5 relative overflow-hidden group`}>
                
                {/* Visual Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-transparent group-hover:from-white/1 pointer-events-none transition-all duration-500" />
                
                <div className="space-y-4 text-left">
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white leading-none">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mt-1">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[9px] font-mono border-white/10 text-gray-500 leading-none">
                      {item.metric}
                    </Badge>
                  </div>

                  {/* Main Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Simulated telemetry audit code */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-[10px] text-gray-500">
                  <Terminal size={12} className="text-gray-600" />
                  <span className="group-hover:text-cyan-400 transition-colors font-semibold">
                    {item.telemetry}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
