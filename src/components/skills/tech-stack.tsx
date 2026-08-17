"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Database, Layout, Code, HardDrive, Cpu as SystemsIcon, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

export function TechStack() {
  const categories: TechCategory[] = [
    {
      name: "AI / Multi-Agent & RAG",
      icon: <Layers className="text-primary w-4 h-4" />,
      skills: ["LangGraph", "LangChain", "FAISS", "pgvector", "Gemini Pro/Flash", "GPT-4o API", "Groq", "Vector Ingestions"],
    },
    {
      name: "Core Backend Systems",
      icon: <Code className="text-primary w-4 h-4" />,
      skills: ["Python", "FastAPI", "C++ (Win32 Concurrency)", "Node.js", "Express.js", "WebSockets", "REST APIs", "SQLAlchemy"],
    },
    {
      name: "Modern Frontend UI",
      icon: <Layout className="text-primary w-4 h-4" />,
      skills: ["Next.js 15 (App Router)", "React 19", "TypeScript", "TailwindCSS", "Framer Motion", "React Flow", "Recharts", "shadcn/ui"],
    },
    {
      name: "Databases & ORMs",
      icon: <Database className="text-primary w-4 h-4" />,
      skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "SQLite", "NoSQL Schema Design"],
    },
    {
      name: "Infrastructure & DevOps",
      icon: <HardDrive className="text-primary w-4 h-4" />,
      skills: ["Docker", "Docker Compose", "Nginx", "AWS EC2", "CI/CD (GitHub Actions)", "Render", "Vercel"],
    },
    {
      name: "Low-Level / Real-time",
      icon: <SystemsIcon className="text-primary w-4 h-4" />,
      skills: ["Win32 API Telemetry", "Multithread Concurrencies", "Real-time Signal Ingestion", "Deterministic Replay Loops"],
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
            Operational Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
            Technical <span className="text-primary/70">Expertise Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            A specialized stack focused on deterministic pipelines, high-density vector retrieval, real-time low-level telemetries, and secure middleware.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative w-full rounded-2xl border border-border p-6 flex flex-col justify-between bg-card transition-all hover:border-primary/20 shadow-sm"
            >
              <div className="w-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 border-b border-border pb-4">
                  <div className="p-2.5 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0">
                    {cat.icon}
                  </div>
                  <h4 className="text-sm font-mono font-black text-foreground tracking-wider uppercase">
                    {cat.name}
                  </h4>
                </div>

                {/* Skills wrap */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-border bg-muted text-muted-foreground font-mono text-[11px] px-2.5 py-1 hover:border-primary/30 hover:text-foreground transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
