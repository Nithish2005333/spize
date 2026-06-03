"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, Award } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  x: number; // SVG X coord
  y: number; // SVG Y coord
  tagline: string;
  image: string;
  venue: string;
  season: string;
  capacity: string;
}

export default function Destinations() {
  const [activeDest, setActiveDest] = useState<string>("udaipur");

  const destinations: Destination[] = [
    {
      id: "udaipur",
      name: "Udaipur",
      x: 230,
      y: 150,
      tagline: "The City of Lakes & Royal Romance",
      image: "https://www.theexperienceresort.com/blog/admin/assets/img/post/image_2024-09-23-11-38-19_66f1532bde0cb.jpg",
      venue: "Taj Lake Palace & Jagmandir Island",
      season: "October to March",
      capacity: "200 - 800 Guests",
    },
    {
      id: "jaipur",
      name: "Jaipur",
      x: 250,
      y: 130,
      tagline: "The Pink City Heritage Grandeur",
      image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?q=80&w=800",
      venue: "City Palace & Rambagh Palace",
      season: "October to March",
      capacity: "300 - 1500 Guests",
    },
    {
      id: "goa",
      name: "Goa",
      x: 215,
      y: 240,
      tagline: "Sun-Kissed Golden Beach Vows",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      venue: "W Goa & Taj Exotica Resort",
      season: "November to February",
      capacity: "150 - 600 Guests",
    },
    {
      id: "dubai",
      name: "Dubai",
      x: 90,
      y: 160,
      tagline: "Ultra-Luxury Desert & Skyline Glitz",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
      venue: "One&Only Royal Mirage & Armani Hotel",
      season: "November to April",
      capacity: "100 - 1000 Guests",
    },
    {
      id: "thailand",
      name: "Thailand",
      x: 440,
      y: 210,
      tagline: "Tropical Shores & Emerald Cliffside Retreats",
      image: "https://images.unsplash.com/photo-1552413741-309783d98c32?q=80&w=800",
      venue: "Phulay Bay, A Ritz-Carlton Reserve",
      season: "December to March",
      capacity: "80 - 300 Guests",
    },
    {
      id: "bali",
      name: "Bali",
      x: 550,
      y: 310,
      tagline: "Spiritual Clifftops & Sacred Jungles",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
      venue: "Bulgari Resort & Ayana Resort Bali",
      season: "April to October",
      capacity: "50 - 400 Guests",
    },
    {
      id: "maldives",
      x: 210,
      y: 330,
      name: "Maldives",
      tagline: "Private Island Overwater Luxury",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
      venue: "Soneva Fushi & Waldorf Astoria Ithaafushi",
      season: "December to April",
      capacity: "30 - 120 Guests",
    }
  ];

  const activeData = destinations.find((d) => d.id === activeDest) || destinations[0];

  return (
    <section id="destinations" className="w-full py-12 md:py-16 bg-zinc-950 text-white overflow-hidden relative">
      {/* Decorative layout pattern */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-10 md:mb-12">
          <span className="font-cormorant italic text-gold text-2xl font-light">Global Coordinates</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-white tracking-wide">
            Destination Weddings
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-3" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Map layout (Left) */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            
            {/* Custom stylized responsive map overlay */}
            <div className="w-full aspect-[640/400] max-w-xl relative bg-zinc-950/40 border border-gold/15 p-2 overflow-hidden shadow-2xl rounded-2xl">
              
              {/* Fake grid lines representing latitude & longitude */}
              <div className="absolute inset-0 grid grid-cols-12 divide-x divide-white/5 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => <div key={i} />)}
              </div>
              <div className="absolute inset-0 grid grid-rows-8 divide-y divide-white/5 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => <div key={i} />)}
              </div>

              {/* Radar Sweeper scanning effect */}
              <motion.div
                className="absolute inset-y-0 w-[2px] bg-gradient-to-r from-transparent via-gold/15 to-transparent pointer-events-none"
                animate={{ x: ["0%", "100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              />

              {/* Map Outline SVG representing Asia, Indian Ocean, Middle East */}
              <svg 
                viewBox="0 0 640 400" 
                className="w-full h-full opacity-40 pointer-events-none fill-none stroke-white/10 stroke-1"
              >
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F3E5AB" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Shorelines */}
                <path d="M 50,150 C 70,140 100,120 120,130 C 140,140 150,160 170,170 C 190,180 200,160 210,150 C 220,130 230,110 240,100 C 250,90 270,100 280,120 C 290,140 285,170 275,190 C 265,210 250,225 240,240 C 235,260 240,280 235,290" />
                <path d="M 235,290 C 230,300 220,310 210,320 C 200,330 190,340 185,350" />
                <path d="M 330,150 C 350,140 370,135 390,140 C 410,145 420,165 435,175 C 450,185 470,195 480,210 C 490,225 485,245 495,260 C 505,275 525,285 540,295 C 555,305 570,315 580,330" />
                
                {/* Tropic of Cancer Line */}
                <line x1="0" y1="280" x2="640" y2="280" stroke="rgba(212, 175, 55, 0.15)" strokeDasharray="4 4" />
                <text x="10" y="274" fill="rgba(212, 175, 55, 0.3)" fontSize="7" fontFamily="sans-serif" letterSpacing="1">TROPIC OF CANCER</text>

                {/* Travel Connecting Arcs from Mumbai Hub (200, 190) */}
                {destinations.map((dest) => {
                  const isActive = activeDest === dest.id;
                  
                  // Quadratic bezier curves helper
                  const midX = (200 + dest.x) / 2;
                  const midY = (190 + dest.y) / 2;
                  const dx = dest.x - 200;
                  const dy = dest.y - 190;
                  const ctrlX = midX - dy * 0.15;
                  const ctrlY = midY + dx * 0.15 - 25;

                  return (
                    <motion.path
                      key={`arc-${dest.id}`}
                      d={`M 200,190 Q ${ctrlX},${ctrlY} ${dest.x},${dest.y}`}
                      stroke="url(#goldGradient)"
                      strokeWidth={isActive ? "2" : "1"}
                      strokeDasharray="4 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isActive ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0.7, opacity: 0.25 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  );
                })}
              </svg>

              {/* Central Hub Pin (Mumbai HQ) */}
              <div 
                style={{ left: `${(200 / 640) * 100}%`, top: `${(190 / 400) * 100}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              >
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-gold/35 opacity-75 animate-ping -left-1 -top-1" />
                <div className="w-3 h-3 bg-gold rounded-full border-2 border-white shadow-[0_0_10px_#D4AF37]" title="Spize HQ" />
              </div>

              {/* Render Animated Hotspot Pins */}
              {destinations.map((dest) => {
                const isActive = activeDest === dest.id;

                return (
                  <button
                    key={dest.id}
                    onClick={() => setActiveDest(dest.id)}
                    style={{
                      left: `${(dest.x / 640) * 100}%`,
                      top: `${(dest.y / 400) * 100}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                    data-hover="luxury"
                  >
                    {/* Ring Pulse 1 */}
                    <span className={`absolute inline-flex h-6 w-6 rounded-full bg-gold/30 opacity-75 animate-ping -left-1.5 -top-1.5 ${isActive ? "block" : "hidden group-hover:block"}`} />
                    
                    {/* Ring Pulse 2 (Slow) */}
                    <span className="absolute inline-flex h-10 w-10 rounded-full bg-gold/10 opacity-40 animate-pulse-slow -left-3.5 -top-3.5" />

                    {/* Pin Dot */}
                    <div 
                      className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 relative flex items-center justify-center ${
                        isActive ? "bg-gold border-white scale-125 shadow-[0_0_15px_#D4AF37]" : "bg-rich-black border-gold/70 group-hover:bg-gold group-hover:scale-110"
                      }`}
                    >
                      {/* Center Core dot */}
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>

                    {/* Pop Label */}
                    <span 
                      className={`absolute left-5 top-1/2 -translate-y-1/2 font-inter text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md ${
                        isActive 
                          ? "bg-gold text-rich-black border-gold opacity-100 scale-105" 
                          : "bg-zinc-900/90 text-white/70 border-white/5 opacity-70 group-hover:opacity-100 group-hover:text-white"
                      }`}
                    >
                      {dest.name}
                    </span>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Details & Image Card (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 bg-zinc-900/60 border border-gold/20 p-6 backdrop-blur-xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Main image with luxury frame */}
                <div className="aspect-[16/10] w-full overflow-hidden border border-white/10 shadow-lg relative rounded-xl">
                  <img
                    src={activeData.image}
                    alt={activeData.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-cormorant italic text-gold text-xl md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {activeData.tagline}
                  </span>
                </div>

                {/* Details grid */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <h3 className="font-playfair text-2xl text-white font-medium tracking-wide">
                      {activeData.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] text-gold uppercase tracking-widest font-extrabold font-inter">
                      <Award className="w-3.5 h-3.5" />
                      Premier Curation
                    </span>
                  </div>

                  {/* Highlights list */}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3.5 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-9 h-9 rounded-lg border border-gold/30 flex items-center justify-center text-gold bg-gold/5 flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block font-inter font-bold">Signature Venues</span>
                        <span className="text-xs text-white font-medium">{activeData.venue}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-9 h-9 rounded-lg border border-gold/30 flex items-center justify-center text-gold bg-gold/5 flex-shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block font-inter font-bold">Optimal Season</span>
                        <span className="text-xs text-white font-medium">{activeData.season}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-9 h-9 rounded-lg border border-gold/30 flex items-center justify-center text-gold bg-gold/5 flex-shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block font-inter font-bold">Typical Capacity</span>
                        <span className="text-xs text-white font-medium">{activeData.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking redirection */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-3.5 bg-gold hover:bg-gold-dark text-rich-black hover:text-white uppercase text-xs tracking-widest font-extrabold transition-all duration-300 flex items-center justify-center gap-2 rounded-xl"
                    data-hover="luxury"
                  >
                    Inquire For {activeData.name}
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
