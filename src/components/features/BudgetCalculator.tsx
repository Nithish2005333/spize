"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Landmark, Sparkles, Utensils, Award, Calculator, Info } from "lucide-react";

export default function BudgetCalculator() {
  const [guests, setGuests] = useState(150);
  const [venueTier, setVenueTier] = useState("resort"); // palace, resort, banquet
  const [decorTier, setDecorTier] = useState("grand"); // editorial, grand, minimalist
  const [cateringTier, setCateringTier] = useState("elite"); // michelin, elite, premium

  const [costs, setCosts] = useState({
    venue: 0,
    decor: 0,
    catering: 0,
    logistics: 0,
    planningFee: 0,
    total: 0,
  });

  const venueDetails = {
    palace: { name: "Historic Fort / Palace", baseCost: 1500000, perGuest: 2000 },
    resort: { name: "Five-Star Beach Resort", baseCost: 800000, perGuest: 1500 },
    banquet: { name: "Luxury Hotel Ballroom", baseCost: 400000, perGuest: 1000 },
  };

  const decorDetails = {
    editorial: { name: "Royal Editorial Theme", baseCost: 1200000, scale: 1.5 },
    grand: { name: "Grand Floral Staging", baseCost: 600000, scale: 1.2 },
    minimalist: { name: "Sophisticated Minimalist", baseCost: 300000, scale: 1.0 },
  };

  const cateringDetails = {
    michelin: { name: "Michelin-Style Curation", costPerPlate: 6500 },
    elite: { name: "Elite Indian Gastronomy", costPerPlate: 4000 },
    premium: { name: "Premium Fine Dining", costPerPlate: 2500 },
  };

  useEffect(() => {
    // 1. Calculate Venue Cost
    const vInfo = venueDetails[venueTier as keyof typeof venueDetails];
    const venueCost = vInfo.baseCost + (guests * vInfo.perGuest);

    // 2. Calculate Catering Cost
    const cInfo = cateringDetails[cateringTier as keyof typeof cateringDetails];
    const cateringCost = guests * cInfo.costPerPlate;

    // 3. Calculate Decor Cost
    const dInfo = decorDetails[decorTier as keyof typeof decorDetails];
    const decorCost = dInfo.baseCost * dInfo.scale;

    // 4. Logistics & Entertainment (Simulated base + fraction of size)
    const logisticsCost = 250000 + (guests * 500);

    // 5. Spize Planning fee (10% or base minimum)
    const baseTotal = venueCost + cateringCost + decorCost + logisticsCost;
    const planningFee = Math.max(250000, Math.floor(baseTotal * 0.10));

    const total = baseTotal + planningFee;

    setCosts({
      venue: venueCost,
      decor: decorCost,
      catering: cateringCost,
      logistics: logisticsCost,
      planningFee: planningFee,
      total: total,
    });
  }, [guests, venueTier, decorTier, cateringTier]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const costBreakdowns = [
    { label: "Venue Rental & Lodging", value: costs.venue, color: "bg-gold" },
    { label: "Bespoke Decor & Styling", value: costs.decor, color: "bg-gold-light" },
    { label: "Catering & Fine Dining", value: costs.catering, color: "bg-champagne" },
    { label: "Logistics & Entertainment", value: costs.logistics, color: "bg-white/30" },
    { label: "Spize Custom Planning Fee", value: costs.planningFee, color: "bg-gold-dark" },
  ];

  const handleApplyToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // We can append parameters to form or notify user
      setTimeout(() => {
        alert("Enter your name and details to submit this estimated budget!");
      }, 800);
    }
  };

  return (
    <div className="w-full bg-rich-black border border-gold/20 p-6 md:p-10 shadow-2xl relative">
      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] text-zinc-500 font-inter tracking-wider">
        <Calculator className="w-3.5 h-3.5 text-gold" />
        ESTIMATION TOOL
      </div>

      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Sliders and Controls (Left) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-2">
            <h3 className="font-playfair text-xl md:text-2xl text-white font-light">
              Interactive Event Estimator
            </h3>
            <p className="font-inter text-xs text-zinc-400 font-light leading-relaxed">
              Adjust parameters to preview cost metrics. All values are direct vendor base projections and subject to seasonal adjustments.
            </p>
          </div>

          {/* Guest slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-inter uppercase tracking-widest text-zinc-400">
              <span>Guest Count</span>
              <span className="text-gold font-cormorant font-bold text-sm tracking-wide">{guests} Guests</span>
            </div>
            <input
              type="range"
              min="50"
              max="1000"
              step="10"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold"
            />
          </div>

          {/* Venue Selection */}
          <div className="space-y-2.5">
            <span className="text-xs font-inter uppercase tracking-widest text-zinc-400 block">Venue Category</span>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(venueDetails).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setVenueTier(key)}
                  className={`border p-3 text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-none ${
                    venueTier === key
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-white/5 bg-white/5 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <Landmark className="w-4 h-4" />
                  <span className="text-[9px] font-inter uppercase tracking-wider font-semibold">
                    {key}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Decor Complexity */}
          <div className="space-y-2.5">
            <span className="text-xs font-inter uppercase tracking-widest text-zinc-400 block">Decor & Design Level</span>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(decorDetails).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setDecorTier(key)}
                  className={`border p-3 text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-none ${
                    decorTier === key
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-white/5 bg-white/5 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[9px] font-inter uppercase tracking-wider font-semibold">
                    {key}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Food and Dining */}
          <div className="space-y-2.5">
            <span className="text-xs font-inter uppercase tracking-widest text-zinc-400 block">Gastronomy & Plate Curation</span>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(cateringDetails).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setCateringTier(key)}
                  className={`border p-3 text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-none ${
                    cateringTier === key
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-white/5 bg-white/5 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <Utensils className="w-4 h-4" />
                  <span className="text-[9px] font-inter uppercase tracking-wider font-semibold">
                    {key}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculation summary (Right) */}
        <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-between h-full relative">
          
          <div className="space-y-4">
            <div>
              <span className="font-inter text-[9px] text-zinc-500 uppercase tracking-widest block font-semibold">Estimated Total</span>
              <motion.div
                key={costs.total}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="font-cormorant text-3xl md:text-4xl text-gold font-light tracking-tight mt-1"
              >
                {formatCurrency(costs.total)}
              </motion.div>
            </div>

            {/* Inclusions parameters list */}
            <div className="text-[10px] font-inter text-zinc-400 uppercase tracking-wider space-y-1 bg-white/5 p-2">
              <div>• {venueDetails[venueTier as keyof typeof venueDetails].name}</div>
              <div>• {decorDetails[decorTier as keyof typeof decorDetails].name}</div>
              <div>• {cateringDetails[cateringTier as keyof typeof cateringDetails].name}</div>
            </div>

            {/* Breakdown bars */}
            <div className="space-y-3.5 pt-2">
              {costBreakdowns.map((item, idx) => {
                const percentage = costs.total > 0 ? (item.value / costs.total) * 100 : 0;

                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-inter text-zinc-400">
                      <span>{item.label}</span>
                      <span className="text-champagne font-cormorant font-semibold text-xs tracking-wide">{formatCurrency(item.value)}</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 overflow-hidden relative">
                      <motion.div
                        className={`h-full ${item.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleApplyToContact}
              className="w-full py-3.5 bg-gold hover:bg-gold-dark text-rich-black hover:text-white uppercase text-[10px] tracking-widest font-bold transition-all duration-300"
              data-hover="luxury"
            >
              Inquire With This Budget
            </button>
            <div className="flex justify-center items-center gap-1 mt-3 text-[9px] text-zinc-500 font-inter">
              <Info className="w-3 h-3 text-gold" />
              Estimator excludes lodging tax, permit charges and artist travel.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
