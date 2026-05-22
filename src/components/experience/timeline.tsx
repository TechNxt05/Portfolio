"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRecruiterMode } from "@/context/recruiter-context";
import { ThreeDTiltCard } from "@/components/ui/three-d-card";

const experiences = [
  {
    company: "DRDO (Defense Research & Development Org)",
    role: "Research Intern",
    period: "Jan 2026 – Present",
    type: "Avionics & Systems Engineering",
    icon: <Cpu className="text-cyan-400" size={20} />,
    bulletColor: "bg-cyan-500",
    shadowColor: "shadow-cyan-glow/10",
    bullets: [
      "Architected a native multithreaded Win32 application in C++ to capture and parse high-frequency avionics bus telemetry streams.",
      "Implemented structured concurrency synchronization pipelines that handle real-time data ingestion with strictly bounded CPU execution.",
      "Created an offline simulation engine enabling virtual avionics test flights and deterministic replay of signal packets."
    ],
    technicalHighlights: "Zero memory leak target, 100% deterministic packet parse, low-overhead scheduling.",
    techStack: ["C++", "Win32 API", "Multithreading", "Systems Concurrency"]
  },
  {
    company: "XelronAI",
    role: "Software Development Engineer Intern",
    period: "Jan 2026 – Mar 2026",
    type: "LLM Systems & Reliability",
    icon: <Terminal className="text-purple-400" size={20} />,
    bulletColor: "bg-purple-500",
    shadowColor: "shadow-purple-glow/10",
    bullets: [
      "Engineered automated LLM evaluation pipelines executing parallel reasoning audits on code submissions.",
      "Established a structured semantic failure taxonomy database tracking hallucinated schemas and instruction overrides.",
      "Containerized benchmarking grids with Docker and pytest, parallelizing trace execution across 20+ models."
    ],
    technicalHighlights: "CI/CD execution pipelines, robust prompt injection testing modules, model benchmarking.",
    techStack: ["Python", "Docker", "pytest", "CI/CD", "LLM Evaluation"]
  }
];

export function ExperienceTimeline() {
  const { isRecruiterMode } = useRecruiterMode();

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black dot-matrix-fine">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-xl mx-auto space-y-3">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Professional Trajectory
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Systems Experience
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Engineered telemetry streams for defense avionics and automated safety evaluations for commercial agent swarms.
          </p>
        </div>

        <div className="relative border-l-2 border-white/5 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Pulsing Timeline Node */}
              <div className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-black ${exp.bulletColor} shadow-[0_0_12px_rgba(6,182,212,0.6)] animate-pulse`} />
              
              <ThreeDTiltCard
                maxTilt={4}
                glowColor={exp.bulletColor === "bg-cyan-500" ? "rgba(6, 182, 212, 0.08)" : "rgba(168, 85, 247, 0.08)"}
                className="w-full"
              >
                <Card className={`bg-white/2 border-white/5 backdrop-blur-xl overflow-hidden hover:border-white/10 transition-all shadow-xl hover:${exp.shadowColor}`}>
                  <CardHeader className="pb-3 border-b border-white/5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center shrink-0">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg md:text-xl font-black text-white leading-tight">
                            {exp.company}
                          </CardTitle>
                          <p className="text-cyan-400 font-mono text-xs mt-0.5 font-bold uppercase tracking-wider">
                            {exp.role} &middot; <span className="text-gray-500">{exp.type}</span>
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit border-white/10 text-gray-400 font-mono text-xs px-2.5 py-1">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    
                    {/* Recruiter-specific runbook metric */}
                    {isRecruiterMode && (
                      <div className="bg-cyan-950/20 border border-cyan-500/10 rounded-lg p-3 font-mono text-[11px] text-cyan-400 flex items-start gap-2">
                        <Shield size={14} className="shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold uppercase block text-white text-[10px] mb-0.5">Telemetry Audit Profile</span>
                          {exp.technicalHighlights}
                        </div>
                      </div>
                    )}

                    {/* Operational checklist bullets */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed font-sans">
                          <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack pills */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 border border-white/5 text-gray-400 font-mono text-xs hover:bg-white/10 hover:text-white transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                  </CardContent>
                </Card>
              </ThreeDTiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
