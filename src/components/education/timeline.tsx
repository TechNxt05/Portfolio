"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, School } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
    {
        institution: "International Institute of Information Technology, Naya Raipur",
        degree: "B.Tech in Electronics and Communication Engineering",
        duration: "2022 – 2026",
        score: "CGPA: 7.57",
        details: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "System Design", "Machine Learning"],
        icon: <GraduationCap className="text-primary" size={24} />,
        active: true,
    },
    {
        institution: "City Montessori School, Lucknow",
        degree: "Class XII (ISC)",
        duration: "2022",
        score: "95.8%",
        details: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
        icon: <School className="text-blue-400" size={24} />,
        active: false,
    },
    {
        institution: "City Montessori School, Lucknow",
        degree: "Class X (ICSE)",
        duration: "2020",
        score: "93%",
        details: ["Science", "Mathematics", "Computer Applications"],
        icon: <School className="text-blue-400" size={24} />,
        active: false,
    },
];

import { EducationBackground } from "@/components/ui/background-visuals";

export function EducationTimeline() {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <EducationBackground />

            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Education
                    </h2>
                </div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Glowing Node */}
                            <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 ${item.active ? "bg-primary border-primary shadow-[0_0_10px_rgba(251,191,36,0.8)]" : "bg-black border-white/20"}`} />

                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors">
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg md:text-xl font-bold text-foreground">
                                                    {item.institution}
                                                </CardTitle>
                                                <p className="text-primary font-medium text-sm">{item.degree}</p>
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className="w-fit flex items-center gap-1">
                                            <Calendar size={12} /> {item.duration}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <span className="font-semibold text-white">Score:</span> {item.score}
                                        </div>

                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-semibold mb-2 text-muted-foreground">
                                                <BookOpen size={14} /> Key Coursework
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.details.map((course) => (
                                                    <Badge key={course} variant="outline" className="border-white/10 text-xs text-gray-500">
                                                        {course}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
