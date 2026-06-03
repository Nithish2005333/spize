"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

export default function TransformationSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 text-center">
      <div className="space-y-2">
        <span className="font-cormorant italic text-gold text-lg md:text-xl font-light block">
          Spatial Transformations
        </span>
        <h3 className="font-playfair text-rich-black text-xl md:text-2xl font-light tracking-wide uppercase">
          From Concept Canvas to Luxury Reality
        </h3>
        <p className="font-inter text-xs text-zinc-500 font-light max-w-md mx-auto">
          Drag the center handle to see how our styling team transforms empty brick fort halls into regal gold wedding banquets.
        </p>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="w-full aspect-[16/9] max-h-[500px] overflow-hidden relative select-none cursor-ew-resize border border-zinc-200 shadow-xl"
      >
        {/* BEFORE IMAGE (Underneath, showing empty hall) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=1200"
            alt="Bare banquet hall venue"
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] font-inter uppercase tracking-widest px-2.5 py-1 z-10 font-semibold">
            Raw Venue Space
          </div>
        </div>

        {/* AFTER IMAGE (Clipped on top, showing luxury decorated hall) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1519225495810-7517c296517a?q=80&w=1200"
            alt="Spize luxury wedding decoration"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.offsetWidth || "100%" }}
          />
          <div className="absolute top-4 right-4 bg-gold text-rich-black text-[10px] font-inter uppercase tracking-widest px-2.5 py-1 z-10 font-bold">
            Spize Curation
          </div>
        </div>

        {/* Drag handler bar */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute top-0 bottom-0 w-[2px] bg-gold z-20 -translate-x-1/2 cursor-ew-resize"
          onMouseDown={() => {
            isDragging.current = true;
          }}
          onTouchStart={() => {
            isDragging.current = true;
          }}
        >
          {/* Handler circular handle icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-rich-black border border-gold flex items-center justify-center text-gold shadow-lg">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
