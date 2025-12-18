"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Terminal, Send, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

export function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "amritanshuy0503@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Initialize Connection
                    </h2>
                    <p className="text-muted-foreground">
                        Ready to deploy? Let's discuss strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Terminal / Status Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-black/80 border-white/10 h-full font-mono text-sm">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>

                                <div className="space-y-2 text-green-400">
                                    <p className="typewriter">
                                        <span className="text-blue-400">root@amritanshu:~$</span> status check
                                    </p>
                                    <p>System: <span className="text-white">Online</span></p>
                                    <p>Availability: <span className="text-white">Open to Opportunities</span></p>
                                    <p>Location: <span className="text-white">Lucknow, India</span></p>
                                    <p className="text-gray-500 animate-pulse">_</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center gap-6"
                    >
                        <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
                            <CardContent className="p-6 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email Address</p>
                                        <p className="font-medium text-foreground">{email}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" onClick={handleCopy}>
                                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                </Button>
                            </CardContent>
                        </Card>

                        <div className="flex gap-4">
                            <Button asChild className="flex-1 h-14 text-base bg-[#0077b5] hover:bg-[#0077b5]/90 text-white border-0">
                                <Link href="https://www.linkedin.com/in/amritanshu-yadav-6480662a8/" target="_blank">
                                    <Linkedin className="mr-2" /> LinkedIn
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="flex-1 h-14 text-base bg-white/5 border-white/10 hover:bg-white/10">
                                <Link href="https://github.com/TechNxt05" target="_blank">
                                    <Github className="mr-2" /> GitHub
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
