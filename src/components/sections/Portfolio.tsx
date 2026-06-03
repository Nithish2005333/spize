"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "weddings" | "destination" | "engagements" | "corporate" | "decor" | "celebrations";
  image: string;
  location: string;
  year: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const portfolioItems: PortfolioItem[] = [
    {
      id: "p1",
      title: "Royal Union of Dev & Kiara",
      category: "weddings",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      location: "City Palace, Jaipur",
      year: "2025",
    },
    {
      id: "p2",
      title: "Serenade by the Ocean",
      category: "destination",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
      location: "Phulay Bay, Thailand",
      year: "2024",
    },
    {
      id: "p3",
      title: "Minimalist Ivory Rings",
      category: "engagements",
      image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=800",
      location: "The Lodhi, New Delhi",
      year: "2026",
    },
    {
      id: "p4",
      title: "100 Years of Heritage Gala",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800",
      location: "Taj Mahal Palace, Mumbai",
      year: "2025",
    },
    {
      id: "p5",
      title: "Suspended Orchids & Crystal Decor",
      category: "decor",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800",
      location: "Umaid Bhawan Palace, Jodhpur",
      year: "2025",
    },
    {
      id: "p6",
      title: "The Golden Hour Soirée",
      category: "celebrations",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800",
      location: "Anantara Resort, Bali",
      year: "2024",
    },
    {
      id: "p7",
      title: "Floral Oasis Mandap",
      category: "decor",
      image: "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?q=80&w=800",
      location: "W Hotel, Goa",
      year: "2026",
    },
    {
      id: "p8",
      title: "Sufi Nights Celebration",
      category: "celebrations",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
      location: "Rambagh Palace, Jaipur",
      year: "2025",
    },
    {
      id: "p9",
      title: "Beachside Vows of Rohan & Rhea",
      category: "destination",
      image: "https://images.unsplash.com/photo-1537655780520-1e392edd816a?q=80&w=800",
      location: "One&Only Reethi Rah, Maldives",
      year: "2026",
    }
  ];

  const categories = [
    { id: "all", name: "All Works" },
    { id: "weddings", name: "Weddings" },
    { id: "destination", name: "Destination" },
    { id: "engagements", name: "Engagements" },
    { id: "decor", name: "Luxury Decor" },
    { id: "corporate", name: "Corporate" },
    { id: "celebrations", name: "Celebrations" },
  ];

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="portfolio" className="w-full py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-12">
          <span className="font-cormorant italic text-gold text-2xl font-light">Visual Legacies</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-rich-black tracking-wide">
            Portfolio Gallery
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12 md:mb-16 border-b border-zinc-100 pb-6 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setVisibleCount(6); // Reset pagination on category change
              }}
              className="relative px-4 py-2 transition-colors"
              data-hover="luxury"
            >
              <span className={`font-inter text-xs tracking-wider uppercase font-semibold ${
                selectedCategory === cat.id ? "text-gold" : "text-zinc-400 hover:text-rich-black"
              }`}>
                {cat.name}
              </span>
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="activePortfolioTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Masonry-style */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => setLightboxIndex(idx)}
                className="relative aspect-[4/3] bg-zinc-100 overflow-hidden border border-zinc-200 group cursor-pointer"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-rich-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />

                {/* Decorative Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Info Text overlays */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-10 opacity-0 group-hover:opacity-100">
                  <span className="font-cormorant italic text-gold text-lg block">
                    {item.location}
                  </span>
                  <h3 className="font-playfair text-white text-base md:text-lg font-light tracking-wide mt-1">
                    {item.title}
                  </h3>
                  <span className="font-inter text-[9px] uppercase tracking-widest text-champagne/60 mt-1 block">
                    Season {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredItems.length > visibleCount && (
          <div className="text-center mt-12 md:mt-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="group px-8 py-3.5 border border-zinc-200 hover:border-gold text-rich-black hover:text-gold uppercase text-xs tracking-widest font-semibold transition-all duration-300"
              data-hover="luxury"
            >
              Load More Celebrations
            </button>
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-6 md:p-12"
          >
            {/* Background click to close */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white z-20"
              data-hover="luxury"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white z-20"
              data-hover="luxury"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white z-20"
              data-hover="luxury"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox content container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col justify-center items-center z-10"
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain border border-gold/20"
              />
              {/* Image info caption */}
              <div className="text-center mt-6 space-y-1">
                <span className="font-cormorant italic text-gold text-xl md:text-2xl">
                  {filteredItems[lightboxIndex].location}
                </span>
                <h3 className="font-playfair text-white text-lg md:text-xl font-light">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
