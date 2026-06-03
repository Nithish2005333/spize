"use client";

import { motion } from "framer-motion";
import { Check, X, Heart, Shield, Sparkles, DollarSign, Award, Smile } from "lucide-react";

interface BenefitItem {
  title: string;
  icon: any;
  spizeValue: string;
  othersValue: string;
  description: string;
}

export default function WhyChooseUs() {
  const benefits: BenefitItem[] = [
    {
      title: "Bespoke Curation",
      icon: Heart,
      spizeValue: "100% custom conceptual spatial designs matching your unique vision.",
      othersValue: "Recycled templates, pre-packaged catalogs, and generic themes.",
      description: "We don't repeat layouts. Every floral arc, drapery color, and lighting tone is selected specifically to manifest your personal vision."
    },
    {
      title: "Vetted Premium Vendors",
      icon: Award,
      spizeValue: "Direct ties to celebrity caterers, award-winning florists, and global artists.",
      othersValue: "Third-party random vendors, unvetted freelancers, and middleman markups.",
      description: "Our vendor partners represent the absolute pinnacle of luxury events, ensuring 100% reliability and elite execution."
    },
    {
      title: "End-to-End Orchestration",
      icon: Shield,
      spizeValue: "Complete coverage from initial concept drawing to post-event cleanups.",
      othersValue: "Partial management, leaving teardown logistics and cleanup to families.",
      description: "We take entire ownership. You and your family simply show up as guests of honor to enjoy the magic."
    },
    {
      title: "Honest Budget Optimization",
      icon: DollarSign,
      spizeValue: "100% transparent fee structures, direct vendor invoices, and zero kickbacks.",
      othersValue: "Hidden charges, inflated markups, and forced vendor package deals.",
      description: "We optimize your allocation, directing investments toward visual impact and high-value guest experiences."
    },
    {
      title: "Flawless Stress-Free Execution",
      icon: Smile,
      spizeValue: "Dedicated hospitality desks, 24/7 guest hotline, and timeline directors.",
      othersValue: "Chaotic calling, delayed sequences, and last-minute venue panic.",
      description: "Our rigorous production desks keep everything running like clockwork behind the scenes while you make memories."
    }
  ];

  return (
    <section id="why-choose-us" className="w-full py-12 md:py-16 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background design accents */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <span className="font-cormorant italic text-gold text-2xl font-light">The Spize Standard</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-white tracking-wide">
            Why Discerning Clients Choose Us
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Matrix Comparison layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 border border-white/10 hover:border-gold/30 p-8 rounded-none transition-colors duration-300 relative"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left block - Icon & Benefit Name */}
                  <div className="md:col-span-3 flex items-center gap-4">
                    <div className="w-12 h-12 border border-gold/30 bg-gold/5 text-gold flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg text-white font-medium">
                        {benefit.title}
                      </h3>
                      <p className="font-inter text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">
                        Differentiator
                      </p>
                    </div>
                  </div>

                  {/* Mid block - Spize Value */}
                  <div className="md:col-span-5 bg-gold/5 border border-gold/10 p-4 relative">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-inter text-[10px] text-gold font-bold uppercase tracking-widest block mb-0.5">
                          Spize Standard
                        </span>
                        <p className="font-inter text-[11px] text-champagne/90 leading-relaxed font-light">
                          {benefit.spizeValue}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right block - Others Value */}
                  <div className="md:col-span-4 border border-white/5 p-4 opacity-40 hover:opacity-60 transition-opacity">
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-zinc-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-inter text-[10px] text-zinc-500 font-bold uppercase tracking-widest block mb-0.5">
                          Standard Planners
                        </span>
                        <p className="font-inter text-[11px] text-zinc-400 leading-relaxed font-light">
                          {benefit.othersValue}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Subtext description below */}
                <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-inter font-light text-zinc-400 leading-relaxed">
                  {benefit.description}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
