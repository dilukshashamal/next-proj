"use client";

import React, { useState } from "react";
import { Star, Award, ShieldCheck, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsAndAwards() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      author: "Lord Henry & Lady Eleanor Cavendish",
      origin: "London, United Kingdom",
      stay: "Stayed at Saliot Ocean Mirage (Royal Villa)",
      rating: 5,
      quote:
        "An experience beyond words. Saliot has set a standard of hospitality that outshines even the finest European palaces. From our private infinity pool watching the sunset to the extraordinary Michelin dining by candlelight, every second was pure poetry.",
    },
    {
      author: "Dr. Kenji & Maya Takahashi",
      origin: "Tokyo, Japan",
      stay: "Stayed at Saliot Highland Sanctuary (Heritage Suite)",
      rating: 5,
      quote:
        "The misty mountain sunrise over 150-year-old tea plantations viewed from the heated infinity pool is something we will treasure forever. The Ayurvedic healing treatments rejuvenated mind and spirit completely.",
    },
    {
      author: "Charlotte Von Berg",
      origin: "Zurich, Switzerland",
      stay: "Stayed at Saliot Presidential Sky Penthouse",
      rating: 5,
      quote:
        "The bespoke butler service is genuinely flawless. They anticipated every desire before we even voiced it. If you seek world-class opulence wrapped in authentic Sri Lankan warmth, Saliot is the definitive destination.",
    },
  ];

  const awards = [
    {
      title: "World's Leading Luxury Beach Resort 2025",
      org: "World Luxury Hotel Awards",
    },
    {
      title: "Best Luxury Spa & Wellness Sanctuary",
      org: "Condé Nast Traveler Readers' Choice",
    },
    {
      title: "Forbes 5-Star Distinction 2026",
      org: "Forbes Travel Guide Verified",
    },
    {
      title: "Excellence in Sustainable Eco-Luxury",
      org: "Global Eco-Tourism Council",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-[#070b12] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Awards Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-20 border-b border-white/10">
          {awards.map((award, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-2xl bg-[#0d1522]/60 border border-white/5 flex flex-col items-center justify-center space-y-2 hover:border-[#d4af37]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xs sm:text-sm text-[#fce08b]">
                {award.title}
              </h4>
              <p className="text-[11px] text-slate-400 font-light uppercase tracking-wider">
                {award.org}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mt-20 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#d4af37] mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Patron Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Words of <span className="text-gold-gradient italic">Admiration</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Reflections from global travelers who have experienced the magic of
            Saliot.
          </p>
        </div>

        {/* Testimonials Carousel Card */}
        <div className="max-w-4xl mx-auto glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 relative shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="flex text-[#d4af37] space-x-1">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>

          <blockquote className="text-center font-serif text-lg sm:text-2xl text-slate-100 font-light italic leading-relaxed mb-8">
            "{reviews[currentReview].quote}"
          </blockquote>

          <div className="text-center border-t border-white/10 pt-6">
            <h4 className="font-serif font-bold text-base sm:text-lg text-white">
              {reviews[currentReview].author}
            </h4>
            <p className="text-xs text-[#d4af37] uppercase tracking-wider mt-0.5">
              {reviews[currentReview].origin}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {reviews[currentReview].stay}
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
            <button
              onClick={prevReview}
              className="p-2.5 rounded-full glass-panel hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentReview === idx
                      ? "bg-[#d4af37] w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2.5 rounded-full glass-panel hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
