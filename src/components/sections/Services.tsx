"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, MapPin, Briefcase, Gift, Sparkles, 
  Map, Camera, Music, ConciergeBell, Check, ChevronDown 
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  icon: any;
  shortDesc: string;
  details: string[];
  highlight: string;
}

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: "wedding",
      title: "Wedding Planning",
      icon: Heart,
      shortDesc: "End-to-end orchestration of your fairy-tale wedding, ensuring seamless perfection.",
      details: [
        "Budget formulation & allocation mapping",
        "Vendor scouting, vetting & contracting",
        "Detailed checklists & itinerary curation",
        "On-day coordination & checklist managers"
      ],
      highlight: "Full Customization"
    },
    {
      id: "destination",
      title: "Destination Weddings",
      icon: MapPin,
      shortDesc: "Bespoke celebrations in exotic international coordinates and royal domestic palaces.",
      details: [
        "Global venue inspection & booking",
        "Multilingual logistics & travel desks",
        "Local regulatory clearance management",
        "Destination-specific event styling"
      ],
      highlight: "Global Partners"
    },
    {
      id: "corporate",
      title: "Corporate Events",
      icon: Briefcase,
      shortDesc: "High-end corporate galas, milestone celebrations, and product launches.",
      details: [
        "Sponsor & stakeholder hospitality alignment",
        "Cutting-edge AV, lighting & sound staging",
        "Keynote speaker & celebrity logistics",
        "Brand identity styling integrations"
      ],
      highlight: "Precision Executed"
    },
    {
      id: "birthday",
      title: "Birthday Celebrations",
      icon: Gift,
      shortDesc: "Extravagant theme parties, milestone birthdays, and private dinner soirées.",
      details: [
        "Concept development & thematic layouts",
        "Custom confectionery & menu design",
        "Bespoke invitations & guest favors",
        "Exclusive entertainment bookings"
      ],
      highlight: "Creative Themes"
    },
    {
      id: "engagement",
      title: "Engagement Ceremonies",
      icon: Sparkles,
      shortDesc: "Chic, intimate ring exchange ceremonies ahead of the grand vows.",
      details: [
        "Exquisite floral backdrop setups",
        "E-invite designs & RSVP tracking",
        "Curated background musician setups",
        "Pre-event family dinner coordination"
      ],
      highlight: "Elegant Inception"
    },
    {
      id: "decor",
      title: "Luxury Decor",
      icon: Sparkles,
      shortDesc: "Editorial-grade floral installations, ceiling hangings, and mood lighting.",
      details: [
        "3D spatial layouts & mood boards",
        "Imported floral structures & arrangements",
        "Bespoke furniture & fabric drapes",
        "Atmospheric lighting & candle staging"
      ],
      highlight: "Editorial Grade"
    },
    {
      id: "venue",
      title: "Venue Planning",
      icon: Map,
      shortDesc: "Exclusive access to private estates, premium heritage forts, and luxury retreats.",
      details: [
        "Site viability & utility assessment",
        "Exclusive booking negotiations",
        "Permits & event insurance management",
        "Layout engineering & guest flow maps"
      ],
      highlight: "Premium Access"
    },
    {
      id: "photography",
      title: "Photography Coordination",
      icon: Camera,
      shortDesc: "Sourcing world-class editorial photographers and cinematographers.",
      details: [
        "Photographer portfolio matching",
        "Pre-wedding shoot styling & logistics",
        "Same-day-edit video timeline check",
        "Luxury wedding album production"
      ],
      highlight: "Visual Legacy"
    },
    {
      id: "entertainment",
      title: "Entertainment Management",
      icon: Music,
      shortDesc: "Orchestrating live bands, Sufi ensembles, and global DJs.",
      details: [
        "Artist curation & contract negotiations",
        "Sound rider & technical specs setup",
        "Choreographer hire for family dances",
        "Celebrity performance logistics"
      ],
      highlight: "Elite Talent"
    },
    {
      id: "hospitality",
      title: "Hospitality Management",
      icon: ConciergeBell,
      shortDesc: "Five-star guest logistics, airport desks, and room detailing.",
      details: [
        "Custom welcome hampers & key cards",
        "24/7 dedicated guest helpline desk",
        "Local transport & luxury car fleet",
        "Pillow gifts & hangover kit design"
      ],
      highlight: "5-Star Standard"
    }
  ];

  const handleToggle = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="services" className="w-full py-12 md:py-16 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <span className="font-cormorant italic text-gold text-2xl font-light">Bespoke Offerings</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-rich-black tracking-wide">
            Our Curated Services
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className={`bg-white border transition-all duration-300 rounded-none overflow-hidden h-fit flex flex-col justify-between ${
                  isExpanded ? "border-gold shadow-2xl ring-1 ring-gold/30" : "border-zinc-200 hover:border-gold/40 hover:shadow-xl"
                }`}
              >
                <div className="p-8 space-y-4">
                  {/* Icon & Title */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-champagne text-gold flex items-center justify-center border border-gold/15 rounded-none">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-inter tracking-wider text-gold-dark font-medium border border-gold/20 px-2 py-0.5 bg-gold/5">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl text-rich-black font-semibold tracking-wide pt-2">
                    {service.title}
                  </h3>

                  <p className="font-inter text-sm text-zinc-900 font-medium leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 border-t border-zinc-150"
                      >
                        <ul className="space-y-2.5">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                              <span className="font-inter text-xs text-zinc-950 font-semibold">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Expand trigger bar */}
                <button
                  onClick={() => handleToggle(service.id)}
                  className={`w-full py-3.5 px-8 text-left flex justify-between items-center text-xs font-inter uppercase tracking-wider font-extrabold border-t transition-colors ${
                    isExpanded ? "bg-gold text-rich-black border-gold" : "bg-zinc-100 text-zinc-950 hover:bg-zinc-200 border-zinc-200"
                  }`}
                  data-hover="luxury"
                >
                  <span>{isExpanded ? "Collapse Details" : "Expand Details"}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
