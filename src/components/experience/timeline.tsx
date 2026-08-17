"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThreeDTiltCard } from "@/components/ui/three-d-card";

const experiences = [
  {
    company: "Defence Research & Development Organisation",
    role: "Research Intern",
    period: "Jan 2026 – Jun 2026",
    type: "Avionics Telemetry",
    icon: <Cpu className="text-cyan-400" size={20} />,
    bullets: [
      "Engineered a native multithreaded Win32 telemetry application for real-time avionics bus monitoring.",
      "Designed the system for deterministic execution in mission-critical ground-testing environments.",
      "Managed concurrency, synchronized data acquisition, structured logging, and offline validation."
    ],
    techStack: ["C/C++", "Win32", "Multithreading", "Concurrency", "Systems Engineering"]
  },
  {
    company: "XelronAI",
    role: "Software Development Engineer Intern",
    period: "Jan 2026 – Mar 2026 | Remote",
    type: "LLM Evaluation Infrastructure",
    icon: <Terminal className="text-cyan-400" size={20} />,
    bullets: [
      "Engineered evaluation pipelines across real-world Python repositories.",
      "Implemented pull-request-level reasoning audits, failure taxonomy classification, and oracle-referenced benchmarking.",
      "Built Docker-based evaluation environments with pinned dependencies, CI-integrated evaluation, and reproducible scoring."
    ],
    techStack: ["Python", "Docker", "pytest", "CI/CD", "Deterministic Execution"]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-xl mx-auto space-y-3">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Professional Trajectory
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Research &rarr; Engineering
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Engineered telemetry streams for defense avionics and automated safety evaluations for commercial agent swarms.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-black bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              
              <ThreeDTiltCard maxTilt={2} glowColor="rgba(34,211,238,0.15)" className="w-full">
                <Card className="bg-white/2 border-white/5 overflow-hidden hover:border-cyan-500/30 transition-all shadow-2xl backdrop-blur-sm">
                  <CardHeader className="pb-3 border-b border-white/5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
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
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed font-sans">
                          <CheckCircle size={15} className="text-cyan-400 shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-400 border border-white/5 font-mono text-xs hover:bg-white/10 hover:text-white transition-colors">
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
