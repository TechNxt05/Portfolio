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
      name: "Programming Languages",
      icon: <Code className="text-cyan-400 w-4 h-4" />,
      skills: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript"],
    },
    {
      name: "AI & Machine Learning",
      icon: <Layers className="text-cyan-400 w-4 h-4" />,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenCV", "Deep Learning"],
    },
    {
      name: "Generative AI & LLMs",
      icon: <Cpu className="text-cyan-400 w-4 h-4" />,
      skills: ["LLM APIs", "RAG", "Agentic AI", "LangChain", "LangGraph", "LlamaIndex", "Gemini", "Groq", "Tool Calling", "LLM Evaluation"],
    },
    {
      name: "Retrieval & Vector Systems",
      icon: <Database className="text-cyan-400 w-4 h-4" />,
      skills: ["FAISS", "pgvector", "Qdrant", "ChromaDB", "Embeddings", "Hybrid Retrieval", "BM25", "Reranking"],
    },
    {
      name: "Backend, DB & Cloud",
      icon: <HardDrive className="text-cyan-400 w-4 h-4" />,
      skills: ["FastAPI", "Django", "Node.js", "PostgreSQL", "MongoDB", "Neon", "AWS EC2", "Docker", "CI/CD"],
    },
    {
      name: "Frontend & UI",
      icon: <Layout className="text-cyan-400 w-4 h-4" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "React Flow", "Recharts"],
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Operational Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Expertise Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
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
              className="relative w-full rounded-2xl border border-white/5 p-6 flex flex-col justify-between bg-white/2 transition-all hover:border-cyan-500/30 shadow-2xl backdrop-blur-sm"
            >
              <div className="w-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    {cat.icon}
                  </div>
                  <h4 className="text-sm font-mono font-black text-white tracking-wider uppercase">
                    {cat.name}
                  </h4>
                </div>

                {/* Skills wrap */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-white/5 bg-black/50 text-gray-400 font-mono text-[11px] px-2.5 py-1 hover:border-cyan-500/30 hover:text-white transition-all cursor-default shadow-sm"
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
