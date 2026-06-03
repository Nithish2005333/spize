"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Map, Paintbrush, Zap, GlassWater } from "lucide-react";

interface JourneyStep {
  step: string;
  title: string;
  icon: any;
  desc: string;
  details: string[];
}

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside container to animate SVG line drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps: JourneyStep[] = [
    {
      step: "01",
      title: "Intimate Consultation",
      icon: Coffee,
      desc: "We begin with a personal dialogue to understand your aesthetic aspirations, budget scope, and core celebration parameters.",
      details: ["Aesthetic style questionnaire", "Budget structure projection", "Timeline blueprint draft"],
    },
    {
      id: "journey-planning",
      step: "02",
      title: "Strategic Planning",
      icon: Map,
      desc: "Our production team locks down optimal venue bookings, recruits high-end vendor alliances, and charts logistics.",
      details: ["Venue contracts finalised", "Master budget setup", "Vendor team allocations"],
    } as any,
    {
      step: "03",
      title: "Atmospheric Design",
      icon: Paintbrush,
      desc: "We engineer custom 3D spatial models, draft floral setups, review lighting grids, and establish complete theme moodboards.",
      details: ["3D floor maps & mockups", "Custom furniture sourcing", "Catering & menu tasting"],
    },
    {
      step: "04",
      title: "On-Site Staging & Strictest Execution",
      icon: Zap,
      desc: "We manage structural assembly, acoustic audits, lighting cues, guest logistics desks, and on-day timelines.",
      details: ["Multi-day timing check", "AV & stage construction", "RSVP & hotel lobby counters"],
    },
    {
      step: "05",
      title: "Timeless Celebration",
      icon: GlassWater,
      desc: "You step into a world engineered for your absolute bliss, where every moment plays out with effortless elegance.",
      details: ["Continuous backstage management", "Same-day-edit video play", "Post-event teardown & logistics"],
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="journey" 
      className="w-full py-12 md:py-16 bg-white relative overflow-hidden"
    >
      {/* Decorative vertical letters */}
      <div className="absolute left-4 top-1/4 font-playfair text-[8vw] text-zinc-50 font-bold select-none pointer-events-none rotate-90 leading-none origin-left">
        CREATION
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-10 md:mb-12">
          <span className="font-cormorant italic text-gold text-2xl font-light">The Master Blueprint</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-rich-black tracking-wide">
            Our Event Journey
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-3" />
        </div>

        {/* Central Path area */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Animated SVG Path - Desktop (draws down center) */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[4px] md:-translate-x-1/2 pointer-events-none">
            {/* Background track line */}
            <div className="w-full h-full bg-zinc-100 rounded-full" />
            
            {/* Scroll-drawn line */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="100%"
                stroke="#D4AF37"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Steps wrapper */}
          <div className="space-y-10 md:space-y-14">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  className="flex flex-col md:flex-row relative items-start md:items-center"
                >
                  
                  {/* Icon Node (Draws along central path) */}
                  <div className="absolute left-[16px] md:left-1/2 -translate-x-0 md:-translate-x-1/2 bg-white z-10 border-2 border-gold p-2 shadow-md w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg">
                    <Icon className="w-4.5 h-4.5 text-gold" />
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 md:text-right flex flex-col md:items-end">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-2.5"
                      >
                        <div className="flex items-center md:justify-end gap-2.5">
                          <span className="font-cormorant text-xs text-gold-dark font-extrabold tracking-widest bg-gold/10 border border-gold/30 px-2.5 py-0.5 rounded-md">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="font-playfair text-2xl text-rich-black font-semibold">
                          {step.title}
                        </h3>
                        <p className="font-inter text-sm text-zinc-900 font-medium leading-relaxed max-w-md">
                          {step.desc}
                        </p>
                        
                        <div className="flex flex-wrap md:justify-end gap-1.5 pt-1.5">
                          {step.details.map((det, dIdx) => (
                            <span 
                              key={dIdx} 
                              className="font-inter text-[10px] uppercase tracking-wider text-zinc-950 bg-zinc-100 px-2.5 py-1 border border-zinc-300 font-bold rounded"
                            >
                              {det}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-16">
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-2.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="font-cormorant text-xs text-gold-dark font-extrabold tracking-widest bg-gold/10 border border-gold/30 px-2.5 py-0.5 rounded-md">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="font-playfair text-2xl text-rich-black font-semibold">
                          {step.title}
                        </h3>
                        <p className="font-inter text-sm text-zinc-900 font-medium leading-relaxed max-w-md">
                          {step.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1.5">
                          {step.details.map((det, dIdx) => (
                            <span 
                              key={dIdx} 
                              className="font-inter text-[10px] uppercase tracking-wider text-zinc-950 bg-zinc-100 px-2.5 py-1 border border-zinc-300 font-bold rounded"
                            >
                              {det}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
