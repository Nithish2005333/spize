"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  videoUrl: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: "t1",
      name: "Kiara & Dev",
      location: "City Palace, Jaipur",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300",
      rating: 5,
      text: "Spize transformed our dream wedding into an absolute masterpiece. From the majestic mandap details to logistics of 800 guests, Reema and Atreya executed everything flawlessly. It felt like walking through an editorial layout.",
      videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=cb75825316312a02b66bf1f3a25f9b44ebfa394a&profile_id=165&oauth2_token_id=57447761",
    },
    {
      id: "t2",
      name: "Rohan & Rhea",
      location: "W Goa Beachfront",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300",
      rating: 5,
      text: "We wanted a beach wedding that was intimate yet grand. Atreya and team designed a structure that looked out of this world. Our guests still talk about the seamless hospitality desk and the Sufi night setup.",
      videoUrl: "https://player.vimeo.com/external/459389137.sd.mp4?s=99689a65f1c4e6e66ca09e13a9686e047466861c&profile_id=139&oauth2_token_id=57447761",
    },
    {
      id: "t3",
      name: "Amit & Ananya",
      location: "Taj Mahal Palace, Mumbai",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
      rating: 5,
      text: "Our anniversary gala was managed with absolute precision. Spize coordinated with international artists and set up a state-of-the-art stage layout. They optimized our budget while delivering five-star aesthetics.",
      videoUrl: "https://player.vimeo.com/external/481896081.sd.mp4?s=d124df8217bb411604a37f5d4757c91ed22079f2&profile_id=139&oauth2_token_id=57447761",
    }
  ];

  // Auto slide shifting
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Shift every 8 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="w-full py-12 md:py-16 bg-zinc-50 relative overflow-hidden">
      {/* Decorative quotes background mark */}
      <div className="absolute left-10 top-10 text-zinc-100 font-bold select-none pointer-events-none z-0">
        <Quote className="w-64 h-64 opacity-5 stroke-[0.5]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-8">
          <span className="font-cormorant italic text-gold text-2xl font-light">Client Affection</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-rich-black tracking-wide">
            Words from our Couples
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-3" />
        </div>

        {/* Carousel slide box */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-zinc-200 p-6 md:p-8 shadow-xl relative flex flex-col md:flex-row gap-6 md:gap-8 items-center rounded-2xl"
            >
              {/* Couple avatar + Film button */}
              <div className="relative flex-shrink-0 text-center space-y-3">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold/30 mx-auto relative group shadow-md">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover play trigger overlay */}
                  <div className="absolute inset-0 bg-rich-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none" />
                </div>
                
                {/* Watch film CTA */}
                <button
                  onClick={() => setActiveVideo(testimonials[activeIndex].videoUrl)}
                  className="inline-flex items-center gap-1.5 text-[10px] font-inter uppercase tracking-widest font-extrabold text-gold hover:text-gold-dark transition-colors"
                  data-hover="luxury"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Watch Film
                </button>
              </div>

              {/* Review details */}
              <div className="flex-1 space-y-3 text-center md:text-left">
                {/* Star rating */}
                <div className="flex justify-center md:justify-start items-center gap-1 text-gold">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-cormorant italic text-lg md:text-xl text-zinc-950 font-medium leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Client Name & Tag */}
                <div className="pt-1.5">
                  <h4 className="font-playfair text-lg text-rich-black font-semibold">
                    {testimonials[activeIndex].name}
                  </h4>
                  <span className="font-inter text-[10px] text-zinc-400 uppercase tracking-widest block mt-0.5">
                    {testimonials[activeIndex].location}
                  </span>
                </div>
              </div>

              {/* Decorative quotation icon */}
              <Quote className="absolute right-6 top-6 w-10 h-10 text-gold/10 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation layout */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 border border-zinc-200 text-zinc-400 hover:border-gold hover:text-gold transition-colors bg-white shadow-md rounded-lg"
              data-hover="luxury"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-inter text-xs text-zinc-400 tracking-wider">
              0{activeIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 border border-zinc-200 text-zinc-400 hover:border-gold hover:text-gold transition-colors bg-white shadow-md rounded-lg"
              data-hover="luxury"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />
            
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white z-20"
              data-hover="luxury"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-3xl w-full aspect-video bg-black border border-gold/30 z-10"
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
