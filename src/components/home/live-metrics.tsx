"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, FileText, Layers, Award, Terminal, Code } from "lucide-react";

interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40); // larger step size
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
}

export function LiveMetricsStrip() {
  const metrics: MetricItem[] = [
    { value: 15, suffix: "+", label: "AI Platforms Built", icon: <Code className="text-cyan-400 w-4 h-4" /> },
    { value: 3, suffix: "", label: "IEEE Publications", icon: <FileText className="text-purple-400 w-4 h-4" /> },
    { value: 1, suffix: "", label: "NPM Package", icon: <Terminal className="text-emerald-400 w-4 h-4" /> },
    { value: 2, suffix: "", label: "Research Internships", icon: <Cpu className="text-yellow-400 w-4 h-4" /> },
    { value: 3, suffix: "+", label: "Live Deployed Systems", icon: <Layers className="text-pink-400 w-4 h-4" /> },
    { value: 772, suffix: " CGPA", label: "CGPA (Out of 10.0)", icon: <Award className="text-cyan-400 w-4 h-4" /> }
  ];

  return (
    <div className="w-full bg-black/60 border-y border-white/5 backdrop-blur-md relative overflow-hidden py-6 select-none">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/2 via-transparent to-purple-500/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/0 hover:border-white/5 hover:bg-white/2 transition-all group cursor-pointer text-center relative"
            >
              {/* Telemetry border pulse */}
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/30 transition-all duration-700" />
              
              <div className="flex items-center gap-2 mb-1.5 justify-center">
                <div className="p-1 rounded bg-white/5 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <div className="text-2xl font-black text-white font-mono tracking-tight flex items-baseline">
                  {item.label.includes("CGPA") ? (
                    <span>7.72</span>
                  ) : (
                    <>
                      <AnimatedCounter value={item.value} />
                      <span className="text-cyan-400 text-lg ml-0.5">{item.suffix}</span>
                    </>
                  )}
                </div>
              </div>
              
              <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest leading-none">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
