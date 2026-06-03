"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pin, Share2, Sparkles, CheckCircle2 } from "lucide-react";

interface MoodboardItem {
  id: string;
  title: string;
  tag: string;
  image: string;
}

export default function Moodboard() {
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const moodboardItems: MoodboardItem[] = [
    {
      id: "mb1",
      title: "Gilded Floral Mandap",
      tag: "Mandap Style",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400",
    },
    {
      id: "mb2",
      title: "Floating Candle Trails",
      tag: "Lighting",
      image: "https://images.unsplash.com/photo-1519225495810-7517c296517a?q=80&w=400",
    },
    {
      id: "mb3",
      title: "Royal Ivory Drapery",
      tag: "Entrance Walkway",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400",
    },
    {
      id: "mb4",
      title: "Monogrammed Linens",
      tag: "Table Styling",
      image: "https://images.unsplash.com/photo-1507504038482-76214302c518?q=80&w=400",
    },
    {
      id: "mb5",
      title: "Cascading White Hydrangeas",
      tag: "Floral Details",
      image: "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?q=80&w=400",
    },
    {
      id: "mb6",
      title: "Vintage Lantern Pathway",
      tag: "Theme Staging",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=400",
    }
  ];

  const handleTogglePin = (id: string) => {
    setPinnedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShareBoard = () => {
    const selectedTitles = moodboardItems
      .filter((item) => pinnedIds.includes(item.id))
      .map((item) => `${item.tag}: ${item.title}`);
    
    if (selectedTitles.length === 0) {
      alert("Please pin at least one inspiration style first!");
      return;
    }

    const text = `Spize Weddings Moodboard Brief:\n${selectedTitles.join("\n")}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 text-center bg-white border border-zinc-200 p-6 md:p-10 shadow-xl">
      <div className="space-y-2">
        <span className="font-cormorant italic text-gold text-lg md:text-xl font-light block">
          Inspiration Curator
        </span>
        <h3 className="font-playfair text-rich-black text-xl md:text-2xl font-light tracking-wide uppercase">
          Curate Your Moodboard
        </h3>
        <p className="font-inter text-xs text-zinc-500 font-light max-w-md mx-auto">
          Click the pin icon on images to curate your signature wedding design board. Share your selections directly with our planners.
        </p>
      </div>

      {/* Pins Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {moodboardItems.map((item) => {
          const isPinned = pinnedIds.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => handleTogglePin(item.id)}
              className={`relative aspect-square overflow-hidden border cursor-pointer group transition-all duration-300 ${
                isPinned ? "border-gold ring-2 ring-gold/20" : "border-zinc-200"
              }`}
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Tag Label */}
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-rich-black/80 text-white text-[8px] font-inter uppercase tracking-widest font-semibold px-2 py-0.5 border border-white/10">
                  {item.tag}
                </span>
              </div>

              {/* Pin trigger button */}
              <button
                className={`absolute top-2 right-2 p-1.5 border transition-all duration-300 z-10 ${
                  isPinned
                    ? "bg-gold border-gold text-rich-black scale-110"
                    : "bg-rich-black/60 border-white/20 text-white hover:bg-gold hover:border-gold hover:text-rich-black"
                }`}
                title={isPinned ? "Unpin Inspiration" : "Pin Inspiration"}
              >
                <Pin className="w-3.5 h-3.5 fill-current" />
              </button>

              {/* Cover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="font-playfair text-xs text-white tracking-wide font-light">
                  {item.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Share panel */}
      <div className="pt-6 border-t border-zinc-150 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left space-y-1">
          <span className="font-inter text-xs text-zinc-400 font-light block">
            Pinned Inspirations
          </span>
          <span className="font-playfair text-base text-rich-black font-semibold">
            {pinnedIds.length} Selected Style{pinnedIds.length === 1 ? "" : "s"}
          </span>
        </div>

        <button
          onClick={handleShareBoard}
          className="group relative px-6 py-3 bg-rich-black text-white hover:bg-gold hover:text-rich-black border border-gold transition-colors duration-300 uppercase text-[10px] tracking-widest font-bold flex items-center gap-2"
          data-hover="luxury"
        >
          {copied ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Brief Copied!
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-gold" />
              Copy Moodboard Brief
            </>
          )}
        </button>
      </div>
    </div>
  );
}
