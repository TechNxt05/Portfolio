"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
    {
        title: "DRDO",
        event: "Research Intern | Jan 2026 - Present",
        description: "Developed a native multithreaded Win32 application for real-time avionics telemetry monitoring.",
        icon: <Award className="h-10 w-10 text-orange-500" />,
        color: "orange",
        tag: "Experience",
    },
    {
        title: "XelronAI",
        event: "SDE Intern | Jan 2026 - Mar 2026",
        description: "Engineered eval pipelines for LLM-generated code and built Docker benchmarking environments.",
        icon: <Star className="h-10 w-10 text-blue-500" />,
        color: "blue",
        tag: "Experience",
    },
    {
        title: "IEEE Publication",
        event: "CCNCPS 2025 (Dubai)",
        description: "Published peer-reviewed research 'Cvision: A Deep Learning Framework for Cataract Detection via Smartphone'.",
        icon: <Trophy className="h-10 w-10 text-yellow-500" />,
        color: "amber",
        tag: "Research",
    },
    {
        title: "Smart India Hackathon",
        event: "Team Lead 2024",
        description: "Built AYUSH healthcare portal with chatbot integration. Reduced paperwork by 50%.",
        icon: <Medal className="h-10 w-10 text-green-500" />,
        color: "green",
        tag: "Winner",
    },
];

import { AchievementsBackground } from "@/components/ui/background-visuals";

export function TrophyWall() {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <AchievementsBackground />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                        Experience & Achievements
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group h-full bg-black/40 border-white/10 backdrop-blur-md relative overflow-hidden transition-all hover:bg-white/5 hover:border-amber-500/30">
                                <div className={`absolute inset-0 bg-gradient-to-b from-${item.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <CardHeader className="relative z-10 flex flex-col items-center text-center pb-2">
                                    <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <Badge variant="outline" className={`mb-2 border-${item.color}-500/30 text-${item.color}-400 bg-${item.color}-500/5`}>
                                        {item.tag}
                                    </Badge>
                                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                                    <span className="text-sm font-medium text-muted-foreground/80 font-mono uppercase tracking-wider">
                                        {item.event}
                                    </span>
                                </CardHeader>

                                <CardContent className="relative z-10 text-center">
                                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
