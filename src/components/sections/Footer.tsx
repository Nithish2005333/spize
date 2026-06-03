"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/BrandIcons";
import { useState, useEffect } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [logoExists, setLogoExists] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/logo.png";
    img.onload = () => setLogoExists(true);
    img.onerror = () => setLogoExists(false);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-rich-black text-white pt-20 pb-8 border-t border-gold/10 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute left-[10%] bottom-[10%] w-[400px] h-[400px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Col 1 - Brand block */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              {logoExists ? (
                <img 
                  src="/logo.png" 
                  alt="Spize Logo" 
                  className="h-10 w-auto object-contain" 
                />
              ) : (
                <h3 className="font-playfair text-3xl font-light text-gold tracking-widest">
                  SPIZE
                </h3>
              )}
            </div>
            <p className="font-inter text-xs text-champagne/70 font-light leading-relaxed max-w-sm">
              We design and orchestrate extraordinary weddings, elite corporate galas, and bespoke destination events across the globe. Turning dreams into legacy experiences.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/spizeweddingsandevents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-none border border-white/10 hover:border-gold text-zinc-400 hover:text-gold flex items-center justify-center transition-colors"
                data-hover="luxury"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-none border border-white/10 hover:border-gold text-zinc-400 hover:text-gold flex items-center justify-center transition-colors"
                data-hover="luxury"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:hello@spizeevents.com" 
                className="w-8 h-8 rounded-none border border-white/10 hover:border-gold text-zinc-400 hover:text-gold flex items-center justify-center transition-colors"
                data-hover="luxury"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-playfair text-sm text-gold font-semibold uppercase tracking-wider">
              Offerings
            </h4>
            <ul className="space-y-2.5 font-inter text-xs text-zinc-400 font-light">
              <li><a href="#services" className="hover:text-gold transition-colors">Wedding Planning</a></li>
              <li><a href="#destinations" className="hover:text-gold transition-colors">Destinations</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Corporate Galas</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Luxury Decor</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Hospitality desks</a></li>
            </ul>
          </div>

          {/* Col 3 - Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-playfair text-sm text-gold font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 font-inter text-xs text-zinc-400 font-light">
              <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#founders" className="hover:text-gold transition-colors">The Founders</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Inquiries</a></li>
            </ul>
          </div>

          {/* Col 4 - Newsletter subscription */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2.5">
              <h4 className="font-playfair text-sm text-gold font-semibold uppercase tracking-wider">
                Newsletter
              </h4>
              <p className="font-inter text-xs text-zinc-400 font-light leading-relaxed">
                Subscribe to receive elite wedding inspirations, luxury venue reviews, and Spize news.
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="bg-white/5 border border-white/10 px-4 py-2 text-xs focus:outline-none focus:border-gold w-full text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-rich-black hover:text-white px-4 text-xs font-bold uppercase transition-colors"
                  data-hover="luxury"
                >
                  Join
                </button>
              </form>
            ) : (
              <div className="bg-gold/10 border border-gold/20 p-3 text-center">
                <span className="font-inter text-xs text-gold font-semibold tracking-wider block">
                  Welcome to the Club!
                </span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 font-inter text-[10px] text-zinc-500 tracking-wider">
          <span>
            © {new Date().getFullYear()} Spize Weddings & Events. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
