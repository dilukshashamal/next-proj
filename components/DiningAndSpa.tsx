"use client";

import React from "react";
import Image from "next/image";
import {
  Utensils,
  Sparkles,
  Flower2,
  Clock,
  Wine,
  Flame,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface DiningAndSpaProps {
  onOpenBooking: () => void;
}

export default function DiningAndSpa({ onOpenBooking }: DiningAndSpaProps) {
  return (
    <section className="py-24 bg-[#070b12] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* PART 1: FINE DINING & GASTRONOMY */}
        <div id="dining" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#d4af37]">
              <Utensils className="w-3.5 h-3.5" />
              <span>Epicurean Journeys</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Culinary Artistry by the <span className="text-gold-gradient italic">Oceanfront</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Indulge in Michelin-inspired dining that fuses fresh-caught Indian
              Ocean seafood with rare Ceylon organic spices and vintage world
              wines. From sunset cliffside tables to starlit sandbank dining.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0f1726] border border-white/10">
                <div className="flex items-center space-x-2 text-[#d4af37] text-xs font-bold uppercase mb-1">
                  <Wine className="w-4 h-4" />
                  <span>The Amber Horizon</span>
                </div>
                <p className="text-xs text-slate-300">
                  Open-air ocean restaurant featuring 7-course degustation menus
                  and grand sommelier cellar.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f1726] border border-white/10">
                <div className="flex items-center space-x-2 text-[#d4af37] text-xs font-bold uppercase mb-1">
                  <Flame className="w-4 h-4" />
                  <span>Private Beach Cabana</span>
                </div>
                <p className="text-xs text-slate-300">
                  Bespoke candlelit dining on powdery white sands with personal
                  butler and acoustic cello soloist.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg flex items-center space-x-2"
              >
                <span>Reserve Dining Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dining Image */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden glass-card border border-[#d4af37]/30 shadow-2xl">
            <Image
              src="/images/dining_sunset.jpg"
              alt="Luxury Fine Dining Saliot"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-gold flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  Sunset Tasting Menu
                </p>
                <p className="text-[11px] text-[#d4af37]">
                  Served daily from 6:30 PM • Cellar Pairings Available
                </p>
              </div>
              <span className="text-xs font-bold text-[#fce08b] bg-[#d4af37]/20 px-3 py-1 rounded-full border border-[#d4af37]/40">
                3 Michelin Mentored
              </span>
            </div>
          </div>
        </div>

        {/* PART 2: AYURVEDIC WELLNESS & SPA */}
        <div id="spa" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Spa Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden glass-card border border-[#d4af37]/30 shadow-2xl">
            <Image
              src="/images/spa_sanctuary.jpg"
              alt="Ayurvedic Wellness Spa Sanctuary"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-gold flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  Lotus Ayurvedic Sanctuary
                </p>
                <p className="text-[11px] text-[#d4af37]">
                  Over-water Pavilions • Certified Ayurvedic Doctors
                </p>
              </div>
              <span className="text-xs font-bold text-[#fce08b] bg-[#d4af37]/20 px-3 py-1 rounded-full border border-[#d4af37]/40">
                Holistic Rejuvenation
              </span>
            </div>
          </div>

          {/* Spa Details */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#d4af37]">
              <Flower2 className="w-3.5 h-3.5" />
              <span>Ancient Healing Arts</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Revitalize Your Soul with <span className="text-gold-gradient italic">Ayurveda</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Step into an oasis of tranquility where 5,000-year-old Ceylon
              Ayurvedic traditions unite with modern hydrotherapy. Inhale the
              essence of rare botanicals and let master therapists restore your
              inner balance.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#0f1726] border border-white/10">
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">
                    Shirodhara & Herbal Oil Therapy
                  </h4>
                  <p className="text-xs text-slate-400">
                    Warm medicated herbal oils gently poured over the forehead to
                    induce deep meditative relaxation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#0f1726] border border-white/10">
                <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">
                    Bespoke 3 to 7-Day Wellness Retreats
                  </h4>
                  <p className="text-xs text-slate-400">
                    Personalized pulse diagnosis, organic dosha meals, daily sunrise
                    yoga, and sound therapy.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg flex items-center space-x-2"
              >
                <span>Book Spa Ritual (+$100 Credit Included)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
