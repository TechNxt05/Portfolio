"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThreeDTiltCard } from "@/components/ui/three-d-card";

const experiences = [
  {
    company: "DRDO (Defense Research & Development Org)",
    role: "Research Intern",
    period: "Jan 2026 – Present",
    type: "Avionics & Systems Engineering",
    icon: <Cpu className="text-primary" size={20} />,
    bullets: [
      "Architected a native multithreaded Win32 application in C++ to capture and parse high-frequency avionics bus telemetry streams.",
      "Implemented structured concurrency synchronization pipelines that handle real-time data ingestion with strictly bounded CPU execution.",
      "Created an offline simulation engine enabling virtual avionics test flights and deterministic replay of signal packets."
    ],
    techStack: ["C++", "Win32 API", "Multithreading", "Systems Concurrency"]
  },
  {
    company: "XelronAI",
    role: "Software Development Engineer Intern",
    period: "Jan 2026 – Mar 2026",
    type: "LLM Systems & Reliability",
    icon: <Terminal className="text-primary" size={20} />,
    bullets: [
      "Engineered automated LLM evaluation pipelines executing parallel reasoning audits on code submissions.",
      "Established a structured semantic failure taxonomy database tracking hallucinated schemas and instruction overrides.",
      "Containerized benchmarking grids with Docker and pytest, parallelizing trace execution across 20+ models."
    ],
    techStack: ["Python", "Docker", "pytest", "CI/CD", "LLM Evaluation"]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-xl mx-auto space-y-3">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
            Professional Trajectory
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Research &rarr; Engineering
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Engineered telemetry streams for defense avionics and automated safety evaluations for commercial agent swarms.
          </p>
        </div>

        <div className="relative border-l-2 border-border ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary shadow-sm" />
              
              <ThreeDTiltCard maxTilt={2} glowColor="rgba(0,0,0,0)" className="w-full">
                <Card className="bg-card border-border overflow-hidden hover:border-primary/20 transition-all shadow-sm">
                  <CardHeader className="pb-3 border-b border-border">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-muted flex items-center justify-center shrink-0">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg md:text-xl font-black text-foreground leading-tight">
                            {exp.company}
                          </CardTitle>
                          <p className="text-primary font-mono text-xs mt-0.5 font-bold uppercase tracking-wider">
                            {exp.role} &middot; <span className="text-muted-foreground">{exp.type}</span>
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit border-border text-muted-foreground font-mono text-xs px-2.5 py-1">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed font-sans">
                          <CheckCircle size={15} className="text-primary shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground font-mono text-xs hover:bg-muted/80 transition-colors">
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
