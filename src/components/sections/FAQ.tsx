"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the typical budget required for a wedding managed by Spize?",
      answer: "Spize Weddings & Events specializes in bespoke, premium curation. Typical project scales range from ₹15 Lakhs to ₹1 Crore+ depending on the guest size, floral staging intensity, and destination logistics. We customize our structures to optimize visual impact while preventing unnecessary markup fees.",
    },
    {
      question: "How far in advance should we begin planning our destination wedding?",
      answer: "For premium heritage fort venues (like Udaipur or Jaipur) or tropical beachfront resorts (Goa, Bali, Thailand), we recommend starting the planning process 8 to 12 months in advance. This ensures securing prime dates during the peak wedding season and early flights/lodging coordination for guests.",
    },
    {
      question: "Do you coordinate with preferred vendors we have already sourced?",
      answer: "Absolutely. While we maintain a gold-tier network of elite vendors (celebrity caterers, lighting stages, floral imports), we serve as your unified logistics desk. We will coordinate with your preferred artists, managing their rider specifications, schedules, and technical requirements on-site.",
    },
    {
      question: "What destinations do you currently operate in?",
      answer: "We support a wide array of domestic and global destinations. Domestically, our active hotspots are Udaipur, Jaipur, Jodhpur, Goa, and Mumbai. Internationally, we frequently manage events and guest hospitality services in Dubai, Thailand, Bali, and the Maldives.",
    },
    {
      question: "Can we preview our event decor design before execution?",
      answer: "Yes, this is a signature step of our journey. We construct complete 3D digital floor maps, floral swatches, and lighting profiles. You will receive custom spatial renders of your mandap, entrance walkway, and reception stages to review and sign off on every detail.",
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-12 bg-zinc-50 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-cormorant italic text-gold text-2xl font-light">Clarifications</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-rich-black tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`border bg-white transition-all duration-300 ${
                  isOpen ? "border-gold shadow-lg" : "border-zinc-200"
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full py-6 px-6 md:px-8 text-left flex justify-between items-center gap-4"
                  data-hover="luxury"
                >
                  <span className="font-playfair text-base md:text-lg text-rich-black font-light leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Icon indicator */}
                  <div className={`w-8 h-8 flex items-center justify-center border transition-colors flex-shrink-0 ${
                    isOpen ? "border-gold bg-gold/5 text-gold" : "border-zinc-200 text-zinc-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-xs md:text-sm font-inter text-text-dark/80 font-light leading-relaxed border-t border-zinc-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
