"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Calendar, Mail, MapPin, Send, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  budget: string;
  location: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "wedding",
    eventDate: "",
    budget: "25-50L",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const eventTypes = [
    { value: "wedding", label: "Wedding" },
    { value: "destination", label: "Destination Wedding" },
    { value: "engagement", label: "Engagement Ceremony" },
    { value: "corporate", label: "Corporate Gala" },
    { value: "celebration", label: "Private Soirée" },
  ];

  const budgetRanges = [
    { value: "15-25L", label: "₹15L - ₹25L" },
    { value: "25-50L", label: "₹25L - ₹50L" },
    { value: "50L-1C", label: "₹50L - ₹1 Crore" },
    { value: "1C+", label: "₹1 Crore+" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors: Partial<FormData> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.location.trim()) tempErrors.location = "Target location is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#B8860B", "#F7F3EC"],
      });
    }, 1500);
  };

  // Build WhatsApp prefilled message
  const triggerWhatsApp = () => {
    const baseMsg = `Hello Spize, I'd like to book a consultation.\n\nName: ${formData.name}\nEvent Type: ${formData.eventType}\nDate: ${formData.eventDate}\nBudget: ${formData.budget}\nLocation: ${formData.location}\nMessage: ${formData.message}`;
    const urlEncoded = encodeURIComponent(baseMsg);
    window.open(`https://wa.me/919999999999?text=${urlEncoded}`, "_blank");
  };

  return (
    <section id="contact" className="w-full py-12 md:py-16 bg-white relative">
      {/* Accent frame decoration */}
      <div className="absolute inset-8 border border-zinc-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <span className="font-cormorant italic text-gold text-2xl font-light font-medium">Begin the Curation</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-rich-black tracking-wide">
            Book Your Consultation
          </h2>
          <div className="h-[1px] w-16 bg-gold/50 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Info Desk (Left) */}
          <div className="lg:col-span-5 space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl text-rich-black font-light leading-snug">
                Let’s co-author your legacy event.
              </h3>
              <p className="font-inter text-xs text-text-dark/70 font-light leading-relaxed">
                Contact our production offices directly or submit your event brief on the right. A project director will respond within 24 hours.
              </p>
            </div>

            {/* Inclusions */}
            <div className="space-y-4 pt-6 border-t border-zinc-100">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 bg-gold/5 text-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm text-rich-black font-semibold">Production Offices</h4>
                  <p className="font-inter text-xs text-zinc-500 font-light leading-relaxed mt-0.5">
                    • Bandra West, Mumbai, MH<br />
                    • Lake Palace Road, Udaipur, RJ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 bg-gold/5 text-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm text-rich-black font-semibold">Direct Email</h4>
                  <a href="mailto:hello@spizeevents.com" className="font-inter text-xs text-gold hover:text-gold-dark font-light block mt-0.5">
                    hello@spizeevents.com
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-zinc-100 space-y-3">
              <span className="font-inter text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-1">Instant Booking</span>
              
              <button
                onClick={() => window.open("https://calendly.com", "_blank")}
                className="w-full py-3.5 border border-zinc-200 hover:border-gold text-rich-black hover:text-gold uppercase text-[10px] tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                data-hover="luxury"
              >
                <Calendar className="w-4 h-4" />
                Book via Calendly
              </button>

              <button
                onClick={triggerWhatsApp}
                className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white uppercase text-[10px] tracking-widest font-bold transition-colors flex items-center justify-center gap-2"
                data-hover="luxury"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Form / Success Screen (Right) */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-8 md:p-10 relative">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <label className="text-[10px] font-inter uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                          errors.name ? "border-red-500" : "border-zinc-200"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-inter mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="text-[10px] font-inter uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                          errors.email ? "border-red-500" : "border-zinc-200"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-inter mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="relative">
                      <label className="text-[10px] font-inter uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                          errors.phone ? "border-red-500" : "border-zinc-200"
                        }`}
                        placeholder="+91 99999 99999"
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-inter mt-1 block">{errors.phone}</span>}
                    </div>

                    {/* Target location */}
                    <div className="relative">
                      <label className="text-[10px] font-inter uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">Target Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className={`w-full bg-white border px-4 py-3 text-xs focus:outline-none focus:border-gold ${
                          errors.location ? "border-red-500" : "border-zinc-200"
                        }`}
                        placeholder="e.g. Udaipur, Goa, Dubai"
                      />
                      {errors.location && <span className="text-[10px] text-red-500 font-inter mt-1 block">{errors.location}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Event Type */}
                    <div>
                      <label className="text-[10px] font-inter uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">Event Scope</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs focus:outline-none focus:border-gold"
                      >
                        {eventTypes.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="text-[10px] font-inter uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">Preferred Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  {/* Budget Ranges */}
                  <div>
                    <label className="text-[10px] font-inter uppercase tracking-wider text-zinc-400 block mb-2 font-semibold">Estimated Budget Range</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => (
                        <label
                          key={b.value}
                          className={`border text-center py-2.5 text-xs font-semibold cursor-pointer transition-colors block ${
                            formData.budget === b.value
                              ? "bg-gold border-gold text-rich-black"
                              : "bg-white border-zinc-200 text-zinc-500 hover:border-gold/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name="budget"
                            value={b.value}
                            checked={formData.budget === b.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          {b.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[10px] font-inter uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">Your Vision details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs focus:outline-none focus:border-gold resize-none"
                      placeholder="Share your dreams, themes, specific floral needs, guest count details..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gold hover:bg-gold-dark text-rich-black hover:text-white uppercase text-xs tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-zinc-300 disabled:text-zinc-500"
                    data-hover="luxury"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Locking Details...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Submit Request Brief
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6 flex flex-col justify-center items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold text-gold flex items-center justify-center scale-110">
                    <Check className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-playfair text-3xl text-rich-black font-light">
                      Brief Captured
                    </h3>
                    <p className="font-inter text-xs text-zinc-500 font-light leading-relaxed max-w-sm">
                      Thank you for trusting Spize. Your event parameters have been logged. A project director will review your brief and contact you shortly.
                    </p>
                  </div>

                  {/* Optional immediate WhatsApp trigger */}
                  <button
                    onClick={triggerWhatsApp}
                    className="px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white uppercase text-[10px] tracking-widest font-bold transition-colors flex items-center justify-center gap-2"
                    data-hover="luxury"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open Chat On WhatsApp
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
