"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/BrandIcons";

interface FounderProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  expertise: string[];
  instagram: string;
  linkedin: string;
  isEven: boolean;
}

function FounderCard({ name, role, image, bio, experience, expertise, instagram, linkedin, isEven }: FounderProps) {
  const badgeText = role.toLowerCase().includes("co-founder") ? "CO-FOUNDER" : "FOUNDER";

  return (
    <div className={`group flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} w-full bg-zinc-900/60 border border-white/5 hover:border-gold/30 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 ease-out backdrop-blur-md`}>
      
      {/* Large Image Side */}
      <div className="w-full md:w-[45%] aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden relative z-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-1000 ease-out scale-100 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
        />
        {/* Dynamic golden gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950/80 via-zinc-950/20 to-transparent opacity-80 z-10" />
      </div>

      {/* Details Side (Horizontal layout) */}
      <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-between relative z-10 space-y-5">
        
        {/* Top Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-block px-3 py-0.5 border border-gold/35 rounded-full text-[9px] tracking-[0.25em] font-inter uppercase text-gold font-medium bg-gold/5">
              {badgeText}
            </span>
            <span className="text-[10px] text-zinc-400 font-inter uppercase tracking-widest">{experience}</span>
          </div>

          <div className="space-y-1">
            <h3 className="font-playfair text-xl md:text-2xl text-white font-light tracking-wide">{name}</h3>
            <p className="font-cormorant italic text-gold text-base md:text-lg font-light">{role}</p>
          </div>

          <p className="font-inter text-[12px] md:text-[13px] text-zinc-300 font-light leading-relaxed pt-1">
            {bio}
          </p>
        </div>

        {/* Bottom Details */}
        <div className="space-y-4 pt-3 border-t border-white/5">
          {/* Expertise */}
          <div className="space-y-1.5">
            <span className="text-zinc-500 font-inter uppercase tracking-wider text-[8px]">Areas of Expertise</span>
            <div className="flex flex-wrap gap-1">
              {expertise.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-white/5 px-2.5 py-0.5 text-[9px] text-champagne/85 border border-white/10 rounded-full font-inter"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Socials & Action */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <a 
                href={instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-gold transition-all duration-300 hover:scale-110 p-1 bg-white/5 rounded-full border border-white/5 hover:border-gold/20"
                data-hover="luxury"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-gold transition-all duration-300 hover:scale-110 p-1 bg-white/5 rounded-full border border-white/5 hover:border-gold/20"
                data-hover="luxury"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href={`mailto:hello@spizeevents.com`} 
                className="text-zinc-400 hover:text-gold transition-all duration-300 hover:scale-110 p-1 bg-white/5 rounded-full border border-white/5 hover:border-gold/20"
                data-hover="luxury"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <a 
              href="mailto:hello@spizeevents.com"
              className="flex items-center gap-1 text-[11px] text-gold hover:text-white transition-colors group/btn font-inter tracking-wider uppercase font-light"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Founders() {
  const founders = [
    {
      name: "Reema Thakkar Tiwari",
      role: "Founder & Creative Director",
      image: "/founder-reema.png",
      bio: "A visionary creator, Reema combines her passion for high fashion and spatial architecture to orchestrate visual masterpieces for luxury weddings and corporate galas alike.",
      experience: "14+ Years in Luxury Design",
      expertise: ["Spatial Architecture", "Creative Direction", "Bespoke Styling", "Brand Partnerships"],
      instagram: "https://www.instagram.com/thakkar.reema?igsh=MW1nN3NlejhlMWExNg%3D%3D",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Atreya Tiwari",
      role: "Co-Founder & Operations Lead",
      image: "/founder-atreya.png",
      bio: "The operational backbone of Spize, Atreya translates grand visual plans into structurally sound, flawlessly timed, and perfectly executed real-world wonders.",
      experience: "10+ Years in Scaled Operations",
      expertise: ["Logistics & Production", "Technical Scaffolding", "Hospitality Management", "Budget Optimization"],
      instagram: "https://www.instagram.com/atreyatiwari?igsh=MWxqM2owOHF5a2w4eg%3D%3D",
      linkedin: "https://www.linkedin.com",
    },
  ];

  return (
    <section id="founders" className="w-full py-12 md:py-14 bg-zinc-950 relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-5 filter blur-[150px] bg-gold rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-10 md:mb-12">
          <span className="font-cormorant italic text-gold text-2xl font-light">The Visionaries</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-white tracking-wide">
            Meet the Directors
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Cards Stack */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="w-full"
            >
              <FounderCard {...founder} isEven={idx % 2 === 0} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
