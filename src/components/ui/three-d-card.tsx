"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ThreeDTiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number; // max tilt angle in degrees, default 12
  perspective?: number; // perspective depth in pixels, default 1000
  glowColor?: string; // custom glow color like "rgba(6, 182, 212, 0.15)"
}

export function ThreeDTiltCard({
  children,
  maxTilt = 10,
  perspective = 1000,
  glowColor = "rgba(6, 182, 212, 0.15)",
  className = "",
  ...props
}: ThreeDTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for x/y mouse positions relative to center of the card (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  // Springs for depth scaling
  const scale = useSpring(1, springConfig);

  // Dynamic light overlay properties
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate mouse position relative to center of card (-0.5 to 0.5)
    const relativeX = (mouseX / width) - 0.5;
    const relativeY = (mouseY / height) - 0.5;

    x.set(relativeX);
    y.set(relativeY);

    // Track cursor coordinates for the radial glow reflection
    glowX.set(mouseX);
    glowY.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  // Convert glow coordinates into CSS radial gradient background
  const glowBg = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(circle 260px at ${gx}px ${gy}px, ${glowColor}, transparent 80%)`
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: `${perspective}px` }}
      className={`relative rounded-3xl ${className}`}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative z-10 rounded-[inherit]"
      >
        {/* Dynamic Interactive Spotlight Layer */}
        {isHovered && (
          <motion.div
            style={{
              background: glowBg,
            }}
            className="absolute inset-0 pointer-events-none rounded-[inherit] z-30 mix-blend-screen opacity-100 transition-opacity duration-300"
          />
        )}
        
        {/* The Card Content */}
        <div style={{ transform: "translateZ(0px)" }} className="h-full w-full rounded-[inherit]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
