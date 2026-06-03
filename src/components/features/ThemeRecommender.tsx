"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, Palette, Flower, GlassWater, Music } from "lucide-react";

interface ThemeOption {
  value: string;
  label: string;
  desc: string;
}

interface Recommendation {
  title: string;
  desc: string;
  swatches: string[];
  florals: string;
  mocktail: string;
  music: string;
}

export default function ThemeRecommender() {
  const [step, setStep] = useState(1); // 1: Vibe, 2: Palette, 3: Setting, 4: Result
  const [vibe, setVibe] = useState("");
  const [colors, setColors] = useState("");
  const [setting, setSetting] = useState("");

  const vibes: ThemeOption[] = [
    { value: "royal", label: "Royal Heritage", desc: "Regal fortresses, heavy gold, and red floral carpets." },
    { value: "tropical", label: "Sunset Tropical", desc: "Breezy oceanic canopies, shell detail pathways, and sunset glows." },
    { value: "editorial", label: "Modern Editorial", desc: "Avant-garde monochromatic mirrors, geometric structures, and clean white blooms." },
    { value: "boho", label: "Boho Forest", desc: "Warm fairy lights, pampas grass clusters, and terracotta clay vessels." },
  ];

  const palettes: ThemeOption[] = [
    { value: "gold", label: "Ivory & Luxury Gold", desc: "The ultimate standard of timeless class." },
    { value: "emerald", label: "Emerald & Sunset Peach", desc: "Deep rich velvet greens paired with soft golden corals." },
    { value: "rose", label: "Dusty Rose & Sage", desc: "Soft, romantic pastel greens and blushed clay roses." },
    { value: "copper", label: "Navy & Warm Copper", desc: "Midnight sky navy coupled with warm glowing metallic copper." },
  ];

  const settings: ThemeOption[] = [
    { value: "palace", label: "Historic Fort/Palace", desc: "Grand stone walls and sweeping historic courtyards." },
    { value: "beach", label: "Beachfront Sands", desc: "Ocean backdrops and open sky sunset mandaps." },
    { value: "ballroom", label: "Five-Star Ballroom", desc: "Suspended crystal chandeliers and polished mirror flooring." },
    { value: "meadow", label: "Botanical Meadow", desc: "Under a canopy of ancient trees and weeping ivy." },
  ];

  const recommendations: Record<string, Recommendation> = {
    "royal-gold-palace": {
      title: "Imperial Grandeur Theme",
      desc: "Designed for royal scale, this theme combines massive structural mandaps with red rose carpets, brass lanterns, and majestic ivory arches that fit historic palaces.",
      swatches: ["#FFFFFF", "#D4AF37", "#8B0000", "#1A1A1A"],
      florals: "Imported Dutch Red Roses, Marigold trails, and White Tuberoses.",
      mocktail: "Royal Saffron Cardamom Elixir",
      music: "Sitar Fusion & Live Sufi Qawwali",
    },
    "tropical-emerald-beach": {
      title: "Emerald Shorelines Theme",
      desc: "A gorgeous beach design framing the ocean with deep forest green palm fronds, sunset coral florals, and golden bamboo pillars.",
      swatches: ["#0F52BA", "#E97451", "#50C878", "#F7F3EC"],
      florals: "White Orchids, Sunset Hibiscus, and Dried Fan Palms.",
      mocktail: "Lychee Coconut Mojito with Gold Flakes",
      music: "Acoustic Beachside Indie-pop Band",
    },
    "editorial-rose-ballroom": {
      title: "Blushed Modernist Theme",
      desc: "A sleek, contemporary ballroom design pairing mirrored walkways with clusters of blush clay roses, sage eucalyptus foliage, and warm candlelight.",
      swatches: ["#E6C2BF", "#708238", "#FFFFFF", "#1A1A1A"],
      florals: "Dusty Pink Roses, Silver Dollar Eucalyptus, and White Hydrangeas.",
      mocktail: "Blushing Rose & Grapefruit Fizz",
      music: "Chill Jazz & Smooth Saxophone Live Session",
    },
    "boho-copper-meadow": {
      title: "Terracotta Sunset Theme",
      desc: "A magical meadow layout using glowing copper arches, pampas grass installations, and deep navy accents that pop against warm clay terracotta pots.",
      swatches: ["#B87333", "#002060", "#E3A857", "#FFFFFF"],
      florals: "Fluffy Pampas Grass, White Delphinium, and Dried Ruscus.",
      mocktail: "Warm Spiced Apple & Copper Ginger Beer",
      music: "Acoustic Guitar Folk & Celestial Violin Duet",
    }
  };

  const getRecommendation = (): Recommendation => {
    // Return matching layout or fallback
    const key = `${vibe}-${colors}-${setting}`;
    if (recommendations[key]) return recommendations[key];
    
    // Default Fallback matching vibe
    if (vibe === "royal") return recommendations["royal-gold-palace"];
    if (vibe === "tropical") return recommendations["tropical-emerald-beach"];
    if (vibe === "editorial") return recommendations["editorial-rose-ballroom"];
    return recommendations["boho-copper-meadow"];
  };

  const handleReset = () => {
    setVibe("");
    setColors("");
    setSetting("");
    setStep(1);
  };

  const result = getRecommendation();

  return (
    <div className="w-full bg-rich-black border border-gold/20 p-6 md:p-10 shadow-2xl relative text-left">
      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] text-zinc-500 font-inter tracking-wider">
        <Sparkles className="w-3.5 h-3.5 text-gold" />
        AI THEME FINDER
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-1">
              <span className="font-cormorant italic text-gold text-lg block">Step 1 of 3</span>
              <h3 className="font-playfair text-xl md:text-2xl text-white font-light">What is your dream design Vibe?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vibes.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setVibe(opt.value);
                    setStep(2);
                  }}
                  className="bg-white/5 border border-white/15 hover:border-gold p-5 text-left transition-colors duration-300 rounded-none group"
                >
                  <span className="font-playfair text-base text-white group-hover:text-gold block mb-1">
                    {opt.label}
                  </span>
                  <span className="font-inter text-xs text-zinc-400 font-light leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-1">
              <span className="font-cormorant italic text-gold text-lg block">Step 2 of 3</span>
              <h3 className="font-playfair text-xl md:text-2xl text-white font-light">Select your preferred Color Palette</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {palettes.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setColors(opt.value);
                    setStep(3);
                  }}
                  className="bg-white/5 border border-white/15 hover:border-gold p-5 text-left transition-colors duration-300 rounded-none group"
                >
                  <span className="font-playfair text-base text-white group-hover:text-gold block mb-1">
                    {opt.label}
                  </span>
                  <span className="font-inter text-xs text-zinc-400 font-light leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-1">
              <span className="font-cormorant italic text-gold text-lg block">Step 3 of 3</span>
              <h3 className="font-playfair text-xl md:text-2xl text-white font-light">What is the celebration Setting?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {settings.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSetting(opt.value);
                    setStep(4);
                  }}
                  className="bg-white/5 border border-white/15 hover:border-gold p-5 text-left transition-colors duration-300 rounded-none group"
                >
                  <span className="font-playfair text-base text-white group-hover:text-gold block mb-1">
                    {opt.label}
                  </span>
                  <span className="font-inter text-xs text-zinc-400 font-light leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid md:grid-cols-12 gap-8 md:gap-10 items-start"
          >
            {/* Visual Swatches & Info (Left) */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <span className="font-cormorant italic text-gold text-lg block">Your Custom Match</span>
                <h3 className="font-playfair text-2xl text-white font-light tracking-wide mt-1">
                  {result.title}
                </h3>
              </div>

              {/* Swatch color blocks */}
              <div className="space-y-2">
                <span className="text-[10px] font-inter uppercase tracking-widest text-zinc-400 block font-semibold">
                  Theme Palette
                </span>
                <div className="flex gap-2">
                  {result.swatches.map((color, idx) => (
                    <div
                      key={idx}
                      style={{ backgroundColor: color }}
                      className="w-12 h-12 border border-white/20 group relative"
                      title={color}
                    >
                      <span className="absolute bottom-1 left-1 bg-black/60 text-[8px] text-white px-1 font-inter pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex gap-3 items-start text-xs font-inter text-zinc-400">
                  <Flower className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Floral Design Concept</span>
                    <span className="text-white font-light">{result.florals}</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs font-inter text-zinc-400">
                  <GlassWater className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Signature Guest Refreshment</span>
                    <span className="text-white font-light">{result.mocktail}</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs font-inter text-zinc-400">
                  <Music className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Signature Music Style</span>
                    <span className="text-white font-light">{result.music}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & booking (Right) */}
            <div className="md:col-span-7 bg-white/5 border border-white/10 p-6 md:p-8 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-[10px] text-gold uppercase tracking-wider font-semibold">
                  <Palette className="w-3.5 h-3.5" />
                  Design Brief
                </div>
                <p className="font-inter text-xs text-champagne/90 leading-relaxed font-light">
                  {result.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-3">
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      setTimeout(() => {
                        alert(`Book with your recommended theme: ${result.title}!`);
                      }, 800);
                    }
                  }}
                  className="w-full py-3.5 bg-gold hover:bg-gold-dark text-rich-black hover:text-white uppercase text-[10px] tracking-widest font-bold transition-all duration-300"
                  data-hover="luxury"
                >
                  Book With This Concept
                </button>

                <button
                  onClick={handleReset}
                  className="w-full py-3 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white uppercase text-[10px] tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  data-hover="luxury"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake Quiz
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
