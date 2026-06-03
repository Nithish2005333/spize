"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Target date: November 15, current year or next year depending on current month
    const currentYear = new Date().getFullYear();
    let targetYear = currentYear;
    
    // If today is past Nov 15, target Nov 15 of next year
    const targetDate = new Date(`November 15, ${targetYear} 00:00:00`).getTime();
    const now = new Date().getTime();
    if (now > targetDate) {
      targetYear += 1;
    }

    const seasonDate = new Date(`November 15, ${targetYear} 00:00:00`).getTime();

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = seasonDate - currentTime;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null;

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto border border-gold/30 bg-rich-black p-6 md:p-8 shadow-xl text-center relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative z-10 space-y-4 md:space-y-6">
        <span className="font-cormorant italic text-gold text-lg md:text-xl font-light block">
          Winter Grandeur Approaching
        </span>
        <h3 className="font-playfair text-white text-xl md:text-2xl font-light tracking-wide uppercase">
          Countdown to the Winter Season
        </h3>
        
        {/* Count slots */}
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto pt-2">
          {timeBlocks.map((block, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 p-3 md:p-4 relative"
            >
              <motion.div
                key={block.value}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="font-cormorant text-2xl md:text-4xl text-gold font-light tracking-tight"
              >
                {String(block.value).padStart(2, "0")}
              </motion.div>
              <span className="font-inter text-[9px] text-zinc-500 uppercase tracking-widest block mt-1.5 font-semibold">
                {block.label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-inter text-[10px] text-champagne/60 font-light tracking-wider uppercase pt-2">
          November 15 • India's Peak Royal Ceremonial Season
        </p>
      </div>
    </div>
  );
}
