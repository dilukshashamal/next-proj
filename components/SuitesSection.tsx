"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BedDouble,
  Maximize2,
  Users,
  Eye,
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface SuitesSectionProps {
  onBookSuite: (suiteKey: string) => void;
}

export default function SuitesSection({ onBookSuite }: SuitesSectionProps) {
  const [selectedSuiteIndex, setSelectedSuiteIndex] = useState(0);

  const suites = [
    {
      id: "ocean-villa",
      name: "Royal Oceanfront Villa with Private Infinity Pool",
      category: "Signature Luxury Villa",
      size: "2,400 sq.ft / 223 m²",
      occupancy: "Up to 3 Guests (1 King Bed)",
      view: "Panoramic 180° Indian Ocean Frontline",
      price: 650,
      image: "/images/suite_ocean_villa.jpg",
      description:
        "The zenith of coastal luxury. Featuring an expansive teak deck, private sunken lounge, heated saltwater plunge pool, outdoor rain shower, and dedicated round-the-clock butler service.",
      amenities: [
        "Private Oceanfront Saltwater Infinity Pool",
        "24-Hour Personal Butler & In-Villa Dining",
        "Hermès Paris Luxury Bath Amenities",
        "Complimentary Bottle of Veuve Clicquot Champagne",
        "Daily Sunset Canape & High Tea Service",
        "Marble Bathroom with Deep Freestanding Soaking Tub",
      ],
    },
    {
      id: "presidential-suite",
      name: "Presidential Panoramic Sky Penthouse",
      category: "Penthouse Suite",
      size: "3,100 sq.ft / 288 m²",
      occupancy: "Up to 6 Guests (2 Master King Suites)",
      view: "360° Ocean & Coconut Palm Canopy",
      price: 980,
      image: "/images/hero_resort.jpg",
      description:
        "Perched atop the highest elevation of the resort, this palatial residence offers unmatched privacy, a private jacuzzi terrace, curated wine cellar, and private chef capabilities.",
      amenities: [
        "Private Rooftop Jacuzzi & Stargazing Lounge",
        "Two Master King Bedrooms with En-suite Spas",
        "Private Sommelier & Personal Chef on Demand",
        "Complimentary Helicopter Transfer from CMB Airport",
        "Bang & Olufsen Acoustic Sound System",
        "Exclusive VIP Cabana at Beach Club",
      ],
    },
    {
      id: "royal-pavilion",
      name: "Highland Tea Sanctuary Heritage Suite",
      category: "Mountain Heritage Pavilion",
      size: "1,850 sq.ft / 172 m²",
      occupancy: "Up to 2 Guests (1 King Bed)",
      view: "Misty Tea Plantations & Mountain Ridge",
      price: 490,
      image: "/images/property_highland.jpg",
      description:
        "An idyllic colonial haven warmed by a genuine stone fireplace, antique Ceylon craftsmanship, private sunroom, and breathtaking views across ancient emerald tea hills.",
      amenities: [
        "Carved Teak Fireplace with Evening Fire-Lighting Service",
        "Private Sunroom overlooking Misty Terraces",
        "Artisanal Ceylon Single-Estate Tea Bar",
        "Heated Hydrotherapy Jacuzzi Tub",
        "Complimentary Morning Tea Estate Guided Trek",
        "Cashmere Robes & Herbal Sleep Rituals",
      ],
    },
  ];

  const currentSuite = suites[selectedSuiteIndex];

  return (
    <section id="suites" className="py-24 bg-[#090e18] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#d4af37] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanctuaries of Indulgence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Suites & Private <span className="text-gold-gradient italic">Villas</span>
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm font-light max-w-md mt-4 md:mt-0">
            Crafted for discerning travelers seeking peerless privacy, tailored
            elegance, and sweeping horizon vistas.
          </p>
        </div>

        {/* Suite Selector Tabs */}
        <div className="flex space-x-2 sm:space-x-4 border-b border-white/10 pb-4 mb-8 overflow-x-auto">
          {suites.map((suite, idx) => (
            <button
              key={suite.id}
              onClick={() => setSelectedSuiteIndex(idx)}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all whitespace-nowrap ${
                selectedSuiteIndex === idx
                  ? "bg-[#d4af37]/20 text-[#fce08b] border border-[#d4af37]/50 shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {suite.name.split("with")[0]}
            </button>
          ))}
        </div>

        {/* Featured Suite Display Card */}
        <div className="glass-card rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Image with Overlays */}
          <div className="relative lg:col-span-7 min-h-[360px] sm:min-h-[440px] lg:min-h-full">
            <Image
              src={currentSuite.image}
              alt={currentSuite.name}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0b1320]" />

            <div className="absolute top-4 left-4">
              <span className="glass-panel text-xs text-[#fce08b] font-semibold px-3 py-1.5 rounded-full border border-[#d4af37]/40">
                {currentSuite.category}
              </span>
            </div>
          </div>

          {/* Right: Suite Details & Specs */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-[#0b1320]">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                  Signature Accommodation
                </span>
                <div className="text-right">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#fce08b]">
                    ${currentSuite.price}
                  </span>
                  <span className="text-xs text-slate-400"> / night</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                {currentSuite.name}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {currentSuite.description}
              </p>

              {/* Specs Badge Bar */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#121c2e] border border-white/10 text-center mb-6 text-xs">
                <div>
                  <Maximize2 className="w-4 h-4 mx-auto text-[#d4af37] mb-1" />
                  <span className="text-[11px] text-slate-300 block">
                    {currentSuite.size.split("/")[0]}
                  </span>
                </div>
                <div>
                  <Users className="w-4 h-4 mx-auto text-[#d4af37] mb-1" />
                  <span className="text-[11px] text-slate-300 block">
                    {currentSuite.occupancy.split("(")[0]}
                  </span>
                </div>
                <div>
                  <Eye className="w-4 h-4 mx-auto text-[#d4af37] mb-1" />
                  <span className="text-[11px] text-slate-300 block">
                    Ocean View
                  </span>
                </div>
              </div>

              {/* Amenities List */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  Suite Privileges & Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {currentSuite.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span className="text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reserve Button */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="text-[11px] text-emerald-400 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Best Member Rate Guarantee</span>
              </div>
              <button
                onClick={() => onBookSuite(currentSuite.id)}
                className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-xl flex items-center space-x-2"
              >
                <span>Reserve Suite</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
