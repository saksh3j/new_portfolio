"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [beams, setBeams] = useState<number[]>([]);

  useEffect(() => {
    setBeams(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 z-[-1] overflow-hidden opacity-30",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="relative h-full w-full">
          {beams.map((i) => (
            <motion.div
              key={i}
              className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                x: [0, 200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
