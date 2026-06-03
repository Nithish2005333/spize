"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Calendar, MapPin, Compass, HelpCircle, 
  MessageSquare, User, Home, Sparkles, Calculator, 
  Menu, X, Landmark, ClipboardList, PenTool, MessageCircle
} from "lucide-react";

// Loading Pre-loader
import LoadingScreen from "@/components/ui/LoadingScreen";

// Core Sections
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Founders from "@/components/sections/Founders";
import Services from "@/components/sections/Services";
import Reels from "@/components/sections/Reels";
import Portfolio from "@/components/sections/Portfolio";
import Destinations from "@/components/sections/Destinations";
import Testimonials from "@/components/sections/Testimonials";
import Journey from "@/components/sections/Journey";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InstagramFeed from "@/components/sections/InstagramFeed";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Extra Premium Features
import Countdown from "@/components/features/Countdown";
import BudgetCalculator from "@/components/features/BudgetCalculator";
import ThemeRecommender from "@/components/features/ThemeRecommender";
import TransformationSlider from "@/components/features/TransformationSlider";
import Moodboard from "@/components/features/Moodboard";

export default function HomeLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atelierTab, setAtelierTab] = useState("theme"); // theme, calculator, slider, moodboard, countdown
  const [showStickyBtn, setShowStickyBtn] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [logoExists, setLogoExists] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/logo.png";
    img.onload = () => setLogoExists(true);
    img.onerror = () => setLogoExists(false);
  }, []);

  // Lock scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  // Scroll listener to toggle sticky button visibility
  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const [activeSection, setActiveSection] = useState("");

  // Intersection Observer to track scroll positions for active nav state
  useEffect(() => {
    if (isLoading) return;

    const sections = ["hero", "about", "founders", "services", "portfolio", "destinations", "faq"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (id === "hero") {
              setActiveSection("");
            } else {
              setActiveSection(id);
            }
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [isLoading]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Founders", href: "#founders" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Destinations", href: "#destinations" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen bg-white">
          
          {/* 1. STICKY GLASSMORPHIC TOP NAVBAR (Desktop) */}
          <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="fixed top-4 left-4 right-4 md:left-8 md:right-8 h-16 bg-white/80 backdrop-blur-md border border-zinc-200/50 shadow-md z-[999] px-6 md:px-8 flex justify-between items-center"
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              {logoExists ? (
                <img 
                  src="/logo.png" 
                  alt="Spize Logo" 
                  className="h-9 md:h-10 w-auto object-contain drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.3)] filter brightness-[0.85] contrast-[1.1]" 
                />
              ) : (
                <span className="font-playfair text-2xl tracking-[0.2em] font-light text-rich-black hover:text-gold transition-colors">
                  SPIZE
                </span>
              )}
            </a>

            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`nav-link-luxury ${isActive ? "active" : ""}`}
                  >
                    <span className="nav-link-wrapper">
                      <span className="nav-link-text">{link.label}</span>
                      <span className="nav-link-text-hover">{link.label}</span>
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* CTA Book consultation */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden sm:inline-flex bg-gold hover:bg-gold-dark text-rich-black hover:text-white px-5 py-2.5 font-bold uppercase text-[10px] tracking-widest transition-colors rounded-none border border-gold"
                data-hover="luxury"
              >
                Inquire Now
              </a>
              
              {/* Mobile Burger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-rich-black p-1 hover:text-gold transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </motion.header>

          {/* Mobile Fullscreen Navigation Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-x-4 top-20 bg-white border border-zinc-200 shadow-2xl z-[998] p-6 lg:hidden flex flex-col gap-4"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-playfair text-lg text-rich-black hover:text-gold py-2 border-b border-zinc-100 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-gold text-rich-black uppercase text-xs font-bold tracking-widest"
                >
                  Book Consultation
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. MAIN SECTIONS COMPILATION */}
          <main className="w-full">
            <Hero />
            <TrustBar />
            <About />
            <Founders />
            <Services />
            <Reels />
            <Portfolio />
            <Destinations />

            {/* 3. INTERACTIVE LUXURY ATELIER (Premium Features Tab Showcase) */}
            <section id="atelier" className="w-full py-12 bg-zinc-50 border-t border-zinc-200 relative">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Section title */}
                <div className="text-center space-y-3 mb-8">
                  <span className="font-cormorant italic text-gold text-2xl font-light">Interactive Experience</span>
                  <h2 className="font-playfair text-3xl md:text-5xl font-light text-rich-black tracking-wide">
                    Design Atelier
                  </h2>
                  <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-3" />
                </div>

                {/* Atelier tab headers */}
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8 max-w-4xl mx-auto border-b border-zinc-250 pb-6">
                  {[
                    { id: "theme", name: "AI Theme Quiz", icon: Sparkles },
                    { id: "calculator", name: "Budget Calculator", icon: Calculator },
                    { id: "slider", name: "Transformation Slider", icon: Landmark },
                    { id: "moodboard", name: "Style Curator", icon: PenTool },
                    { id: "countdown", name: "Season Clock", icon: Calendar },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setAtelierTab(tab.id)}
                        className="relative px-4 py-2.5 transition-colors"
                        data-hover="luxury"
                      >
                        <span className={`flex items-center gap-1.5 font-inter text-xs tracking-wider uppercase font-semibold ${
                          atelierTab === tab.id ? "text-gold" : "text-zinc-400 hover:text-rich-black"
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                          {tab.name}
                        </span>
                        {atelierTab === tab.id && (
                          <motion.div
                            layoutId="activeAtelierTab"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Atelier content display */}
                <div className="max-w-4xl mx-auto min-h-[400px]">
                  <AnimatePresence mode="wait">
                    {atelierTab === "theme" && (
                      <motion.div
                        key="theme-recommender"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ThemeRecommender />
                      </motion.div>
                    )}

                    {atelierTab === "calculator" && (
                      <motion.div
                        key="budget-calc"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <BudgetCalculator />
                      </motion.div>
                    )}

                    {atelierTab === "slider" && (
                      <motion.div
                        key="trans-slider"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <TransformationSlider />
                      </motion.div>
                    )}

                    {atelierTab === "moodboard" && (
                      <motion.div
                        key="style-moodboard"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Moodboard />
                      </motion.div>
                    )}

                    {atelierTab === "countdown" && (
                      <motion.div
                        key="countdown-clock"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Countdown />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </section>

            <Testimonials />
            <Journey />
            <WhyChooseUs />
            <InstagramFeed />
            <FAQ />
            <Contact />
          </main>

          <Footer />

          {/* 4. PREMIUM FLOATING WIDGETS */}
          {/* Vertical button stack — anchored bottom-right */}
          <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[990] flex flex-col items-center gap-3">

            {/* Scroll to top button — slides in after 500px scroll */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="w-11 h-11 bg-white border border-gold/40 text-gold hover:bg-gold hover:text-rich-black transition-colors duration-300 flex items-center justify-center rounded-full shadow-lg"
                  title="Back to Top"
                  data-hover="luxury"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7"/>
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>

            {/* WhatsApp floating button — tooltip absolutely placed to the left */}
            <div className="relative group/wa">
              {/* Tooltip — absolutely positioned, won't affect button layout */}
              <span className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-rich-black/95 text-champagne border border-gold/40 px-3.5 py-1.5 text-[9px] uppercase tracking-widest font-semibold font-inter shadow-2xl opacity-0 group-hover/wa:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
                Inquire via WhatsApp
              </span>

              <motion.a
                href="https://wa.me/919999999999?text=Hello%20Spize%20Weddings,%20I'd%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 bg-rich-black hover:bg-gold text-gold hover:text-rich-black rounded-full shadow-2xl flex items-center justify-center border border-gold/40 transition-colors duration-300"
                title="Chat on WhatsApp"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -2, 2, -2, 2, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.12 }}
              >
                {/* Subtle pulsing background wave */}
                <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: "3s" }} />

                <svg 
                  viewBox="0 0 24 24" 
                  className="w-7 h-7 fill-current stroke-none relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14 M19.1,4.9C15.2,1,8.9,1,5,4.9c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9C22,9.3,20.9,6.8,19.1,4.9 M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Sticky consultation CTA (Bottom left desktop, hidden mobile where bottom navigation covers) */}
          <AnimatePresence>
            {showStickyBtn && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[990] hidden md:block"
              >
                <a
                  href="#contact"
                  className="bg-rich-black hover:bg-gold text-white hover:text-rich-black px-6 py-3 text-[10px] tracking-widest font-bold uppercase transition-colors border border-gold flex items-center gap-2 shadow-2xl"
                  data-hover="luxury"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold group-hover:text-rich-black" />
                  Book Consult
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 5. MOBILE BOTTOM NAVIGATION MENU (100/100 Mobile UX) */}
          <motion.div 
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 inset-x-0 h-14 bg-white/95 backdrop-blur-md border-t border-zinc-200 z-[990] lg:hidden flex justify-around items-center px-4"
          >
            <a href="#" className="flex flex-col items-center justify-center text-zinc-500 hover:text-gold transition-colors">
              <Home className="w-4 h-4" />
              <span className="font-inter text-[8px] uppercase tracking-wider font-semibold mt-1">Home</span>
            </a>
            <a href="#services" className="flex flex-col items-center justify-center text-zinc-500 hover:text-gold transition-colors">
              <ClipboardList className="w-4 h-4" />
              <span className="font-inter text-[8px] uppercase tracking-wider font-semibold mt-1">Services</span>
            </a>
            <a href="#portfolio" className="flex flex-col items-center justify-center text-zinc-500 hover:text-gold transition-colors">
              <Compass className="w-4 h-4" />
              <span className="font-inter text-[8px] uppercase tracking-wider font-semibold mt-1">Works</span>
            </a>
            <a href="#contact" className="flex flex-col items-center justify-center text-zinc-500 hover:text-gold transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="font-inter text-[8px] uppercase tracking-wider font-semibold mt-1">Consult</span>
            </a>
          </motion.div>

        </div>
      )}
    </>
  );
}
