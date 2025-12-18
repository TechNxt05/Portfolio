"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/background-visuals";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-20">
            <HeroBackground />

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Image with Lightbox */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center md:justify-start"
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group cursor-pointer">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-blue-500 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                    <Image
                                        src="/ME.jpeg"
                                        alt="Amritanshu Yadav"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Overlay for Click Hint */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Maximize2 className="text-white w-10 h-10 drop-shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 flex items-center justify-center">
                            <DialogTitle className="sr-only">Profile Picture</DialogTitle>
                            <div className="relative w-[80vh] h-[80vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                                <Image
                                    src="/ME.jpeg"
                                    alt="Amritanshu Yadav"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                </motion.div>

                {/* Right Column: Introduction */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-center md:text-left space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase">
                            AI / ML & Software Engineer
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                        Amritanshu Yadav
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Final-year B.Tech student specializing in <span className="text-primary font-medium">AI, Machine Learning, and Software Engineering</span>. Building scalable systems and next-gen AI applications with focus on distributed architectures and real-world impact.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-4"
                    >
                        <Button asChild size="lg" className="rounded-full px-8 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,215,0,0.3)] w-full sm:w-auto">
                            <Link href="#projects">Explore Projects</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg font-medium border-white/10 hover:bg-white/5 w-full sm:w-auto">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="text-muted-foreground animate-bounce" size={24} />
            </motion.div>
        </section>
    );
}
