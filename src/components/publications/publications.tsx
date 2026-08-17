"use client";

import { motion } from "framer-motion";
import { BookOpen, MapPin, ExternalLink } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "ML-Assisted Design and Performance Modeling of a Tunable Microfluidic SIW Self-Diplexing Antenna",
    venue: "IEEE ICAIIC 2026",
    location: "Tokyo, Japan",
    summary: "Leveraged deep neural network modeling to predict RF properties, drastically cutting down microfluidic waveguide SIW dipole antenna iteration simulations from hours to milliseconds.",
    researchArea: "Neural Parametric Optimization",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZPF9seYAAAAJ&citation_for_view=ZPF9seYAAAAJ:u5HHmVD_uO8C"
  },
  {
    title: "Cvision: Deep Learning Framework for Cataract Detection via Smartphone",
    venue: "IEEE CCNCPS 2025",
    location: "Dubai, UAE",
    summary: "Architected a lightweight smartphone cataract screening pipeline. Quantized convolutional models (MobileNetV2, VGG19) to run offline at the edge with 95%+ ROC accuracy.",
    researchArea: "Lightweight Edge Medical AI",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZPF9seYAAAAJ&citation_for_view=ZPF9seYAAAAJ:u-x6o8ySG0sC"
  },
  {
    title: "Machine Learning–Assisted Power Optimization of PMOS-Biased Sense Amplifiers at 180 nm",
    venue: "IEEE CPEEE 2026",
    location: "Japan",
    summary: "Engineered high-accuracy regression models to conduct multi-dimensional parametric optimization on sense amplifier layouts, optimizing sub-nanosecond delay constraints.",
    researchArea: "Regression Parametric Search",
    url: "https://scholar.google.com/citations?user=ZPF9seYAAAAJ&hl=en"
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Scientific Contributions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Research <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">& Notes</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Applied ML methodologies targeting parametric optimization, silicon circuit engineering, and low-latency computer vision edge deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col h-full"
            >
              <Card className="bg-white/2 border-white/5 hover:border-cyan-500/30 flex-1 flex flex-col justify-between p-6 transition-all shadow-2xl backdrop-blur-sm relative">
                
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[10px] text-gray-500 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-1">
                    <MapPin size={11} className="text-cyan-400" />
                    <span>{pub.location}</span>
                  </div>
                  <span className="text-[9px] opacity-70">IEEE CONF</span>
                </div>

                <div className="space-y-4 flex-1">
                  <Badge variant="outline" className="w-fit font-mono text-[9px] px-2 py-0.5 rounded bg-black/50 text-gray-400 border-white/5">
                    {pub.researchArea}
                  </Badge>

                  <CardTitle className="text-base font-bold text-white tracking-tight leading-tight text-left">
                    {pub.title}
                  </CardTitle>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans text-left">
                    {pub.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-left">
                  <span className="font-mono text-xs text-white font-bold tracking-tight">
                    {pub.venue}
                  </span>
                  
                  <Button asChild variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 hover:bg-transparent font-mono text-[11px] p-0 h-auto">
                    <a href={pub.url} target="_blank" className="flex items-center gap-1">
                      Index <ExternalLink size={12} />
                    </a>
                  </Button>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl font-mono text-xs px-6 py-2 bg-transparent text-gray-400 hover:text-white">
            <a href="https://scholar.google.com/citations?user=ZPF9seYAAAAJ&hl=en" target="_blank" className="flex items-center gap-1.5">
              <BookOpen size={14} /> View All Indexes on Google Scholar
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
