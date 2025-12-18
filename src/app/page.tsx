"use client";

import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/home/hero";
import { Footer } from "@/components/ui/footer";
import { ChessHierarchy } from "@/components/projects/chess-hierarchy";
import { TrophyWall } from "@/components/achievements/trophy-wall";
import { MovieSkills } from "@/components/skills/movie-grid";
import { EducationTimeline } from "@/components/education/timeline";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20">
      <Navbar />

      <Hero />

      <ChessHierarchy />

      <TrophyWall />

      <MovieSkills />

      <EducationTimeline />

      <Contact />

      <Footer />
    </main>
  );
}
