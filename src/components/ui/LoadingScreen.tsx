"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [useImageLogo, setUseImageLogo] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/logo.png";
    img.onload = () => setUseImageLogo(true);
    img.onerror = () => setUseImageLogo(false);
  }, []);

  useEffect(() => {
    const duration = 2000; // 2 seconds total loading
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800); // Let fadeout animation complete
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Luxury float coordinates for gold dust particles
  const particles = [
    { id: 1, size: 4, x: "10%", duration: 7, delay: 0 },
    { id: 2, size: 2, x: "25%", duration: 9, delay: 1.5 },
    { id: 3, size: 3, x: "40%", duration: 8, delay: 0.5 },
    { id: 4, size: 5, x: "55%", duration: 11, delay: 2 },
    { id: 5, size: 2, x: "70%", duration: 6, delay: 3 },
    { id: 6, size: 4, x: "85%", duration: 10, delay: 1 },
    { id: 7, size: 3, x: "90%", duration: 8.5, delay: 2.5 },
    { id: 8, size: 2, x: "18%", duration: 7.5, delay: 4 },
  ];

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 bg-rich-black z-[99999] flex flex-col items-center justify-center text-white overflow-hidden"
          exit={{
            y: "-100%",
            transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8 },
          }}
        >
          {/* Viewport Frame */}
          <div className="absolute inset-6 md:inset-8 border border-gold/15 pointer-events-none z-20" />
          
          {/* Corner Brackets */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 w-4 h-4 border-t border-l border-gold/40 pointer-events-none z-20" />
          <div className="absolute top-6 right-6 md:top-8 md:right-8 w-4 h-4 border-t border-r border-gold/40 pointer-events-none z-20" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-4 h-4 border-b border-l border-gold/40 pointer-events-none z-20" />
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-4 h-4 border-b border-r border-gold/40 pointer-events-none z-20" />

          {/* Subtle gold background glow */}
          <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_70%)]" />

          {/* Slow-floating luxury gold dust particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-gold rounded-full opacity-25 blur-[0.5px] pointer-events-none"
              style={{
                width: p.size,
                height: p.size,
                left: p.x,
                bottom: "-20px",
              }}
              animate={{
                y: "-110vh",
                x: ["0px", "15px", "-15px", "0px"],
              }}
              transition={{
                y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
                x: { duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay },
              }}
            />
          ))}
          
          {/* Large Luxury Layout Container */}
          <div className="text-center space-y-10 max-w-4xl px-8 z-10 flex flex-col items-center">
            
            {/* Logo and Tagline with slow entrance animation */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="space-y-6 flex flex-col items-center w-full"
            >
              {/* Logo display with writing animation */}
              <div className="relative inline-flex justify-center items-center overflow-visible py-2">
                {/* The Logo (Image or Text) with Clip Path Reveal */}
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                  className="flex justify-center items-center"
                >
                  {useImageLogo ? (
                    <img 
                      src="/logo.png" 
                      alt="Spize Logo" 
                      className="h-28 md:h-36 w-auto object-contain"
                    />
                  ) : (
                    <h1
                      id="loader-logo-text"
                      className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-gradient-gold tracking-[0.3em] pl-[0.3em] leading-none"
                    >
                      SPIZE
                    </h1>
                  )}
                </motion.div>

                {/* Golden "Pen Tip" Spark tracing the outline in a writing motion */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-30 flex items-center justify-center"
                  initial={{ left: "0%", opacity: 0 }}
                  animate={{ 
                    left: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                    // Rapid up-and-down cursive writing movements
                    y: [0, -30, 30, -25, 25, -30, 30, -20, 20, -35, 25, 0]
                  }}
                  transition={{
                    left: { duration: 2.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 },
                    opacity: { duration: 2.2, ease: "linear", delay: 0.2 },
                    y: { duration: 2.2, ease: "easeInOut", delay: 0.2 }
                  }}
                >
                  {/* Glowing Core */}
                  <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_#D4AF37,0_0_24px_#D4AF37,0_0_36px_#E5C158]" />
                  {/* Outer breathing ring */}
                  <div className="absolute w-6 h-6 rounded-full bg-gold/30 filter blur-[1px] animate-ping" />
                </motion.div>
              </div>

              {/* Sub-tagline with fade-in delayed until the writing finishes */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-champagne/90 tracking-[0.15em] font-light"
              >
                Crafting Timeless Celebrations
              </motion.p>
            </motion.div>
            
            {/* Thin divider expanding */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "160px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-gold/50"
            />

            {/* Central Progress Area */}
            <div className="space-y-6 w-full flex flex-col items-center">
              {/* Counter Display (Large & Cinematic) */}
              <motion.div 
                className="font-cormorant text-5xl sm:text-6xl md:text-7xl font-light text-gold tracking-widest pl-2"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {Math.round(progress)}%
              </motion.div>

              {/* Progress bar container */}
              <div className="w-64 sm:w-80 md:w-96 h-[2px] bg-white/10 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Sub-label at the bottom of the loader content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1 }}
              className="font-inter text-[8px] sm:text-[9px] text-champagne/70 tracking-[0.4em] pl-[0.4em] uppercase"
            >
              Luxury Wedding &amp; Event Planner
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
