"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, Share2, X, Volume2, VolumeX, Play } from "lucide-react";
import { Instagram } from "@/components/ui/BrandIcons";

interface ReelItem {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  likes: string;
  views: string;
  category: string;
  instagramId: string;
}

export default function Reels() {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [isMuted, setIsMuted] = useState(false); // Unmuted by default inside the modal
  const [mutedReels, setMutedReels] = useState<Record<string, boolean>>({
    "reel-1": true,
    "reel-2": true,
    "reel-3": true,
  });
  const reels: ReelItem[] = [
    {
      id: "reel-1",
      title: "Not Your Regular Wedding Eve",
      videoUrl: "/Reels/reel-1.mp4",
      thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600",
      likes: "24.5K",
      views: "312K",
      category: "Wedding Eve",
      instagramId: "DYR8htwyolr"
    },
    {
      id: "reel-2",
      title: "Pavai Tavam | Peacock Floral Decor",
      videoUrl: "/Reels/reel-2.mp4",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600",
      likes: "18.2K",
      views: "245K",
      category: "Decor Inspiration",
      instagramId: "DXQ1VGMuXMK"
    },
    {
      id: "reel-3",
      title: "Preksha & Arihanth's Celebration",
      videoUrl: "/Reels/reel-3.mp4",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600",
      likes: "32.1K",
      views: "410K",
      category: "Wedding Highlight",
      instagramId: "DWbbAG-jyLy"
    }
  ];

  const toggleCardMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedReels((prev) => {
      const nextState = !prev[id];
      const video = document.getElementById(`video-${id}`) as HTMLVideoElement;
      if (video) {
        video.muted = nextState;
      }
      return { ...prev, [id]: nextState };
    });
  };

  const shareReel = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section id="reels" className="w-full py-12 bg-rich-black text-white overflow-hidden relative">
      {/* Background abstract element */}
      <div className="absolute left-[-20%] bottom-[10%] w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title & CTA banner */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div className="space-y-4 text-center md:text-left">
            <span className="font-cormorant italic text-gold text-2xl font-light">Captured Grandeur</span>
            <h2 className="font-playfair text-3xl md:text-5xl font-light tracking-wide text-white">
              Trending Highlights
            </h2>
          </div>
          <a
            href="https://www.instagram.com/spizeweddingsandevents"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-gold px-6 py-3 text-xs tracking-wider uppercase font-semibold text-gold hover:bg-gold hover:text-rich-black transition-all duration-300"
            data-hover="luxury"
          >
            <Instagram className="w-4 h-4" />
            Follow @spizeweddingsandevents
          </a>
        </div>

        {/* Centered Grid Layout for 3 Reels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto justify-center">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              whileHover={{ y: -8 }}
              onClick={() => setActiveReel(reel)}
              className="w-full max-w-[320px] aspect-[9/16] bg-zinc-900 border border-white/10 hover:border-gold/60 transition-colors duration-300 relative group overflow-hidden cursor-pointer rounded-xl shadow-xl mx-auto"
            >
              {/* Video Player (Autoplay continuously, muted by default) */}
              <video
                id={`video-${reel.id}`}
                loop
                autoPlay
                muted={mutedReels[reel.id] !== false}
                playsInline
                preload="metadata"
                poster={reel.thumbnail}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              >
                <source src={reel.videoUrl} type="video/mp4" />
              </video>

              {/* Elegant Mute / Unmute Button on Card */}
              <button
                onClick={(e) => toggleCardMute(reel.id, e)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-gold hover:text-rich-black hover:border-gold transition-all duration-300"
                title={mutedReels[reel.id] !== false ? "Unmute" : "Mute"}
              >
                {mutedReels[reel.id] !== false ? (
                  <VolumeX className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Category indicator */}
              <div className="absolute top-4 left-4">
                <span className="bg-gold/90 text-rich-black text-[9px] font-inter uppercase font-bold tracking-widest px-2 py-0.5">
                  {reel.category}
                </span>
              </div>

              {/* Play symbol on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-playfair text-base text-white font-light group-hover:text-gold transition-colors duration-300">
                  {reel.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Modal Lightbox */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 md:p-6"
          >
            {/* Background close trigger */}
            <div className="absolute inset-0" onClick={() => setActiveReel(null)} />

            {/* Modal Content Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-[360px] h-[80vh] max-h-[640px] bg-zinc-950 border border-gold/30 shadow-2xl flex flex-col justify-between overflow-hidden z-10 rounded-lg"
            >
              {/* Fullscreen Video */}
              <video
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src={activeReel.videoUrl}
              />

              {/* Top Bar overlays */}
              <div className="relative z-10 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <span className="font-inter text-xs text-white font-medium tracking-wide">
                  {activeReel.category}
                </span>
                <div className="flex items-center gap-2">
                  {/* Mute toggle */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  {/* Close trigger */}
                  <button
                    onClick={() => setActiveReel(null)}
                    className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Overlays */}
              <div className="relative z-10 p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent pt-20 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-playfair text-lg text-white font-light">
                    {activeReel.title}
                  </h3>
                  <p className="font-inter text-xs text-zinc-400">
                    Spize Weddings & Events
                  </p>
                </div>

                {/* Interactive CTAs */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => shareReel(activeReel.title)}
                    className="flex-1 py-3 border border-white/20 text-white hover:border-gold hover:text-gold transition-colors flex items-center justify-center gap-2 uppercase text-[10px] tracking-wider font-semibold"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Share Reel
                  </button>
                  <a
                    href={`https://www.instagram.com/reel/${activeReel.instagramId}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-gold text-rich-black hover:bg-gold-dark hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase text-[10px] tracking-wider font-semibold"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    View on IG
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
