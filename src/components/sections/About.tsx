"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Compass, Heart, ShieldCheck } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export default function About() {
  const [activeEra, setActiveEra] = useState(0);

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2012",
      title: "The Foundation",
      description: "Founded in Chennai by Reema Thakkar Tiwari, Spize was born to bring high-fashion design, production, and planning to the luxury events and weddings industry.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600",
    },
    {
      year: "2016",
      title: "National Scalability",
      description: "Co-founder Atreya Tiwari joined the leadership, bringing logistical mastery that expanded corporate events and destination weddings across royal domestic venues.",
      image: "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?q=80&w=600",
    },
    {
      year: "2019",
      title: "Celebrity & Corporate Galas",
      description: "Orchestrated massive celebrations, including high-profile celebrity weddings (like Nikki Galrani & Aadhi Pinisetty) and elite corporate activations.",
      image: "https://images.unsplash.com/photo-1519225495810-7517c296517a?q=80&w=600",
    },
    {
      year: "2022",
      title: "International Offshoot",
      description: "Expanded boundaries globally, establishing offices in Dubai and Muscat to manage high-luxury events and destination setups in the Middle East.",
      image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=600",
    },
    {
      year: "2026",
      title: "Decade of Scale",
      description: "Celebrating over 250 successfully executed weddings, Bollywood shows, and corporate activations worldwide with flawless, luxury execution.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600",
    },
  ];

  return (
    <section id="about" className="w-full py-12 md:py-16 bg-white overflow-hidden relative">
      {/* Decorative typography background */}
      <div className="absolute right-0 top-10 font-playfair text-[12vw] text-zinc-50 font-bold select-none pointer-events-none leading-none z-0">
        SPIZE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Collage side */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[600px] w-full">
            {/* Background luxury pattern or frame */}
            <div className="absolute inset-4 border border-gold/20 -z-10" />

            {/* Collage Image 1 - Main Background */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-3/4 h-2/3 shadow-2xl overflow-hidden border border-champagne"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800"
                alt="Wedding couple celebration"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Collage Image 2 - Overlapping Front */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute bottom-4 right-0 w-3/5 h-1/2 shadow-2xl overflow-hidden border-4 border-white"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600"
                alt="Grand ballroom reception"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Collage Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="absolute top-1/2 right-[5%] -translate-y-1/2 bg-rich-black text-white p-6 w-40 h-40 flex flex-col justify-center items-center rounded-none border border-gold text-center"
            >
              <span className="font-cormorant text-3xl text-gold font-light">10+</span>
              <span className="font-inter text-[9px] uppercase tracking-widest text-champagne/80 mt-2">Years of Grandeur</span>
            </motion.div>
          </div>

          {/* Right Content side */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-cormorant italic text-gold text-2xl font-light">Our Story</span>
              <h2 className="font-playfair text-3xl md:text-5xl font-light text-rich-black leading-tight">
                Architects of Timeless Affection
              </h2>
              <p className="font-inter text-base text-text-dark/85 font-light leading-relaxed">
                At Spize, we believe a grand wedding or high-impact corporate celebration is not simply an event; it is a tapestry of emotions, spatial design, and sensory memories that linger forever. We collaborate closely with you to curate highly customized, experiential events that reflect your unique legacy.
              </p>
            </div>

            {/* Interactive Timeline */}
            <div className="space-y-6 pt-4 border-t border-zinc-150">
              <h3 className="font-playfair text-lg text-rich-black font-semibold">Our Journey</h3>
              
              {/* Year Selectors */}
              <div className="flex justify-between items-center relative border-b border-zinc-200 pb-2">
                {timelineEvents.map((evt, idx) => (
                  <button
                    key={evt.year}
                    onClick={() => setActiveEra(idx)}
                    className="relative pb-2 z-10 transition-colors duration-300"
                    data-hover="luxury"
                  >
                    <span
                      className={`font-cormorant text-lg md:text-xl font-light ${
                        activeEra === idx ? "text-gold font-medium" : "text-zinc-400 hover:text-rich-black"
                      }`}
                    >
                      {evt.year}
                    </span>
                    {activeEra === idx && (
                      <motion.div
                        layoutId="activeTimelineBar"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Event Content Screen */}
              <div className="min-h-[140px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEra}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid sm:grid-cols-3 gap-6 items-center"
                  >
                    <div className="sm:col-span-2 space-y-2">
                      <h4 className="font-playfair text-xl text-gold font-light">
                        {timelineEvents[activeEra].title}
                      </h4>
                      <p className="font-inter text-sm text-text-dark/80 font-light leading-relaxed">
                        {timelineEvents[activeEra].description}
                      </p>
                    </div>
                    <div className="h-24 sm:h-28 w-full overflow-hidden shadow-md">
                      <img
                        src={timelineEvents[activeEra].image}
                        alt={timelineEvents[activeEra].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
