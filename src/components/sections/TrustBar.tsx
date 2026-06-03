"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Heart, Sparkles, Calendar, Award } from "lucide-react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: any;
}

function StatCounter({ value, suffix, label, icon: Icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easedRate = rate * (2 - rate);
      setCount(Math.floor(easedRate * value));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref} 
      className="text-center py-2 px-2 flex flex-col items-center group cursor-pointer relative"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Elegant Icon Badge */}
      <div className="w-10 h-10 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold mb-2.5 group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.12)] transition-all duration-300">
        <Icon className="w-4 h-4 text-gold" strokeWidth={1.2} />
      </div>

      {/* Number and Suffix */}
      <div className="font-cormorant text-4xl md:text-5xl text-gradient-gold font-light tracking-tight flex items-center justify-center">
        <span>{count}</span>
        <span className="text-gold-light ml-0.5 text-2xl md:text-3xl">{suffix}</span>
      </div>

      {/* Elegant Dot Separator */}
      <div className="w-1 h-1 rounded-full bg-gold/35 my-2 group-hover:bg-gold transition-colors duration-300" />

      {/* Description */}
      <span className="font-inter text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-semibold group-hover:text-champagne transition-colors duration-300 text-center leading-none">
        {label}
      </span>
    </motion.div>
  );
}

export default function TrustBar() {
  const stats = [
    { value: 120, suffix: "+", label: "Weddings Planned", icon: Heart },
    { value: 240, suffix: "+", label: "Happy Couples", icon: Sparkles },
    { value: 180, suffix: "+", label: "Events Orchestrated", icon: Calendar },
    { value: 12, suffix: " Yrs", label: "Years of Experience", icon: Award },
  ];

  return (
    <section id="trust-bar" className="w-full bg-rich-black border-y border-gold/10 relative z-20 overflow-hidden">
      {/* Subtle radial backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.03] rounded-full filter blur-[60px] pointer-events-none" />

      {/* Luxury background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-cormorant text-[12vw] font-bold text-white/[0.02] tracking-[0.25em] leading-none uppercase">
          LEGACY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={index === 0 ? "" : "pl-2 sm:pl-8 lg:pl-12"}
            >
              <StatCounter 
                value={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
                icon={stat.icon} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
