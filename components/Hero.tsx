"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Sparkles, Compass, Play } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_resort.jpg"
          alt="Saliot Luxury Resort Oceanfront"
          fill
          priority
          quality={95}
          className="object-cover object-center scale-105 animate-pulse duration-10000"
        />
        {/* Multilayer Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/50 to-black/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070b12]/30 to-[#070b12]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 md:mt-12">
        {/* Top Luxury Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-[#d4af37]/40 shadow-lg mb-6 animate-fade-scale">
          <div className="flex text-[#d4af37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#fce08b]">
            World Luxury Hotel Awards 2025 Winner
          </span>
        </div>

        {/* Grand Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
          Where Timeless <span className="text-gold-gradient italic">Luxury</span>
          <br className="hidden sm:inline" /> Meets Serene Paradise
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8 drop-shadow">
          Immerse yourself in Sri Lanka’s most breathtaking coastal havens and
          misty highland sanctuaries. Private infinity villas, Michelin-calibre
          gastronomy, and bespoke butler hospitality.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            Reserve Your Private Sanctuary
          </button>
          <a
            href="#destinations"
            className="w-full sm:w-auto px-7 py-4 rounded-full font-sans font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase text-white glass-panel hover:bg-white/15 border border-white/20 hover:border-[#d4af37]/50 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Properties</span>
          </a>
        </div>

        {/* Mini Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="p-3">
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#fce08b]">
              4 Premier
            </p>
            <p className="text-xs text-slate-400 font-medium">
              Resort Destinations
            </p>
          </div>
          <div className="p-3">
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#fce08b]">
              100% Ocean & Hill
            </p>
            <p className="text-xs text-slate-400 font-medium">Panoramic Views</p>
          </div>
          <div className="p-3">
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#fce08b]">
              24/7 Butler
            </p>
            <p className="text-xs text-slate-400 font-medium">
              Bespoke Concierge
            </p>
          </div>
          <div className="p-3">
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#fce08b]">
              Forbes 5-Star
            </p>
            <p className="text-xs text-slate-400 font-medium">
              Hospitality Standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
