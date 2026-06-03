"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Calendar, Award, Star, ArrowDown, Heart } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Handle Mouse Follow Glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.5 - 0.2,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(212, 175, 55, 0.6)"; // Gold particles

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Move
        p.x += p.speedX;
        p.y += p.speedY;

        // Reset if offscreen
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-rich-black flex items-center justify-center"
    >
      {/* Background Video */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source
            src="https://player.vimeo.com/external/494252666.hd.mp4?s=d0016e379ff96a1eb1d7be92c730e703901b0b74&profile_id=170&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
            alt="Luxury wedding backdrop"
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/40 to-rich-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-rich-black/90 via-transparent to-rich-black/30" />

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Interactive Mouse Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 filter blur-[120px] transition-all duration-300 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(26,26,26,0) 70%)",
        }}
      />

      {/* Content Container */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center lg:text-left flex flex-col justify-center h-full pt-16"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            {/* Top Awards Tag */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-gold/15 backdrop-blur-md border border-gold/30 px-4 py-2 rounded-full text-champagne text-xs md:text-sm font-inter tracking-wider uppercase mx-auto lg:mx-0"
            >
              <Award className="w-4 h-4 text-gold" />
              India's Premier Luxury Wedding &amp; Event Architects
            </motion.div>

            {/* Main Heading with split line reveal */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
              className="font-cormorant text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.2] tracking-normal"
            >
              Crafting <span className="font-parisienne text-gold text-[1.15em] normal-case font-normal inline-block align-baseline px-2 leading-none tracking-normal">Extraordinary</span> Weddings &amp; Luxury Events
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-inter text-base md:text-lg text-champagne/80 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              From high-profile celebrity weddings to corporate galas and scale activations, we orchestrate every detail into an unforgettable masterpiece.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={scrollToPortfolio}
                className="group relative px-8 py-4 bg-gold text-rich-black font-semibold tracking-wider rounded-none overflow-hidden transition-all duration-300 hover:bg-gold-dark hover:text-white w-full sm:w-auto"
                data-hover="luxury"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 uppercase text-xs">
                  Explore Our Work
                </span>
                <span className="absolute inset-0 bg-gold-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>

              <button
                onClick={scrollToContact}
                className="group px-8 py-4 border border-white/40 text-white font-semibold tracking-wider hover:border-gold hover:text-gold transition-all duration-300 bg-transparent w-full sm:w-auto"
                data-hover="luxury"
              >
                <span className="flex items-center justify-center gap-2 uppercase text-xs">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </span>
              </button>
            </motion.div>
          </div>

          {/* Luxury experience & trust counters */}
          <div className="lg:col-span-4 relative flex flex-col sm:flex-row lg:flex-col justify-center items-start sm:items-center lg:items-start gap-6 lg:gap-8 lg:pl-12 w-full">
            
            {/* Elegant fading vertical separator on the left (Desktop) */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

            {/* Counter 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-4 group cursor-pointer relative z-10 w-full"
            >
              {/* Double-ring Badge */}
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                {/* Rotating Dashed Outer Ring */}
                <div className="absolute -inset-1 rounded-full border border-dashed border-gold/25 group-hover:border-gold/50 group-hover:rotate-45 transition-all duration-700" />
                {/* Inner Ring with Icon */}
                <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                  <Heart className="w-4.5 h-4.5 text-gold" strokeWidth={1.2} />
                </div>
              </div>



              <div className="flex flex-col text-left">
                <span className="font-cormorant text-4xl sm:text-5xl font-light text-gradient-gold tracking-tight leading-none transition-transform duration-300 group-hover:translate-x-1">
                  250<span className="font-cormorant italic text-2xl text-gold-light ml-0.5 font-light">+</span>
                </span>
                <span className="font-inter text-[9px] tracking-[0.25em] font-semibold text-champagne/60 group-hover:text-white transition-colors duration-300 uppercase mt-1.5">
                  Events Executed
                </span>
              </div>
            </motion.div>

            {/* Counter 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-4 group cursor-pointer relative z-10 w-full"
            >
              {/* Double-ring Badge */}
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                {/* Rotating Dashed Outer Ring */}
                <div className="absolute -inset-1 rounded-full border border-dashed border-gold/25 group-hover:border-gold/50 group-hover:rotate-45 transition-all duration-700" />
                {/* Inner Ring with Icon */}
                <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                  <Award className="w-4.5 h-4.5 text-gold" strokeWidth={1.2} />
                </div>
              </div>



              <div className="flex flex-col text-left">
                <span className="font-cormorant text-4xl sm:text-5xl font-light text-gradient-gold tracking-tight leading-none transition-transform duration-300 group-hover:translate-x-1">
                  14<span className="font-cormorant italic text-2xl text-gold-light ml-0.5 font-light">Yrs</span>
                </span>
                <span className="font-inter text-[9px] tracking-[0.25em] font-semibold text-champagne/60 group-hover:text-white transition-colors duration-300 uppercase mt-1.5">
                  Design Experience
                </span>
              </div>
            </motion.div>

            {/* Counter 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex items-center gap-4 group cursor-pointer relative z-10 w-full"
            >
              {/* Double-ring Badge */}
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                {/* Rotating Dashed Outer Ring */}
                <div className="absolute -inset-1 rounded-full border border-dashed border-gold/25 group-hover:border-gold/50 group-hover:rotate-45 transition-all duration-700" />
                {/* Inner Ring with Icon */}
                <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                  <Star className="w-4.5 h-4.5 text-gold" strokeWidth={1.2} />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-3 leading-none">
                  <span className="font-cormorant text-4xl sm:text-5xl font-light text-gradient-gold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    5.0
                  </span>
                  <div className="flex items-center gap-1 text-gold">
                    <Star className="w-3 h-3 fill-current animate-pulse text-gold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]" />
                    <Star className="w-3 h-3 fill-current animate-pulse text-gold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)] [animation-delay:0.1s]" />
                    <Star className="w-3 h-3 fill-current animate-pulse text-gold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)] [animation-delay:0.2s]" />
                    <Star className="w-3 h-3 fill-current animate-pulse text-gold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)] [animation-delay:0.3s]" />
                    <Star className="w-3 h-3 fill-current animate-pulse text-gold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)] [animation-delay:0.4s]" />
                  </div>
                </div>
                <span className="font-inter text-[9px] tracking-[0.25em] font-semibold text-champagne/60 group-hover:text-white transition-colors duration-300 uppercase mt-1.5">
                  Client Satisfaction
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Bouncing Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          const el = document.getElementById("trust-bar");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-inter text-[10px] text-champagne/50 uppercase tracking-[0.2em] font-light">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
