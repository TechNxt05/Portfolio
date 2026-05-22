"use client";

import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/home/hero";
import { LiveMetricsStrip } from "@/components/home/live-metrics";
import { AboutPositioning } from "@/components/home/about-positioning";
import { ExperienceTimeline } from "@/components/experience/timeline";
import { FlagshipProjects } from "@/components/projects/flagship-projects";
import { SystemsArchitecture } from "@/components/projects/systems-architecture";
import { Publications } from "@/components/publications/publications";
import { TechStack } from "@/components/skills/tech-stack";
import { OpenSourcePackage } from "@/components/projects/open-source";
import { ProjectTimeline } from "@/components/projects/timeline";
import { Achievements } from "@/components/achievements/achievements";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 overflow-x-hidden">
      <Navbar />

      <Hero />

      <LiveMetricsStrip />

      <AboutPositioning />

      <ExperienceTimeline />

      <FlagshipProjects />

      <SystemsArchitecture />

      <Publications />

      <TechStack />

      <OpenSourcePackage />

      <ProjectTimeline />

      <Achievements />

      <Contact />

      <Footer />
    </main>
  );
}
