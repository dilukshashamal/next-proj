"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Star, Sparkles, ArrowRight, Waves, Trees, Castle, Compass } from "lucide-react";

interface PropertiesShowcaseProps {
  onSelectProperty: (propertyKey: string) => void;
}

export default function PropertiesShowcase({
  onSelectProperty,
}: PropertiesShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const properties = [
    {
      id: "saliot-ocean",
      category: "coastal",
      name: "Saliot Ocean Mirage",
      location: "Mirissa Beachfront, Southern Coast",
      tagline: "Tropical Oceanfront Grandeur & Coral Reef Haven",
      image: "/images/hero_resort.jpg",
      startingPrice: 420,
      highlights: [
        "Direct Private Golden Sand Beach",
        "Dual-Tier Infinity Ocean Pool",
        "Rooftop Sunset Lounge & Oyster Bar",
        "Private Yacht Whale Watching Charters",
      ],
      rating: "5.0 / 5.0 (Forbes Verified)",
    },
    {
      id: "saliot-highland",
      category: "highland",
      name: "Saliot Highland Sanctuary",
      location: "Nuwara Eliya, Emerald Tea Country",
      tagline: "Misty Mountain Splendour & Heated Glass Horizon",
      image: "/images/property_highland.jpg",
      startingPrice: 380,
      highlights: [
        "Surrounded by 150-year Ceylon Tea Terraces",
        "Heated Mountain-Edge Infinity Pool",
        "Artisanal Tea Sommelier Tastings",
        "Colonial Fireplace Suites & Helicopter Pad",
      ],
      rating: "4.9 / 5.0 (World Luxury Hotel Award)",
    },
    {
      id: "saliot-heritage",
      category: "cultural",
      name: "Saliot Royal Heritage",
      location: "Kandy, Royal Sanctuary",
      tagline: "Regal Elegance in the Cultural Heart of Ceylon",
      image: "/images/suite_ocean_villa.jpg",
      startingPrice: 350,
      highlights: [
        "Panoramic Royal Lake & Mountain Views",
        "Palatial Teak & Granite Architecture",
        "Ancient Royal Ayurvedic Healing Sanctuary",
        "Private Candlelit Botanical Garden Dining",
      ],
      rating: "4.9 / 5.0 (TripAdvisor Best of Best)",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  return (
    <section id="destinations" className="py-24 relative bg-[#070b12] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#d4af37] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The Saliot Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Iconic Destinations, <span className="text-gold-gradient italic">Unrivalled</span> Luxury
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Each Saliot property is a masterpiece crafted into Sri Lanka’s most
            spectacular landscapes — from turquoise Indian Ocean shores to
            emerald mountain peaks.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Properties", icon: Compass },
              { id: "coastal", label: "Coastal Escapes", icon: Waves },
              { id: "highland", label: "Highland Retreats", icon: Trees },
              { id: "cultural", label: "Cultural Sanctuaries", icon: Castle },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                    activeCategory === tab.id
                      ? "bg-gold-gradient text-[#070b12] shadow-lg shadow-[#d4af37]/20 scale-105"
                      : "glass-panel text-slate-300 hover:text-white hover:border-[#d4af37]/40"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Property Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/10"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass-panel text-xs text-[#fce08b] font-semibold px-3 py-1 rounded-full border border-[#d4af37]/40">
                      {property.rating}
                    </span>
                  </div>

                  {/* Starting price badge */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <span className="text-[10px] text-slate-300 uppercase tracking-wider block">
                      From
                    </span>
                    <span className="text-xl font-bold font-serif text-[#fce08b]">
                      ${property.startingPrice}
                    </span>
                    <span className="text-[11px] text-slate-300 font-light">
                      {" "}/ night
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center space-x-1.5 text-xs text-[#d4af37] font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#fce08b] transition-colors mb-2">
                    {property.name}
                  </h3>
                  <p className="text-xs text-slate-300 mb-6 italic font-light">
                    "{property.tagline}"
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                    {property.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 text-xs text-slate-300"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 flex items-center space-x-3">
                <button
                  onClick={() => onSelectProperty(property.id)}
                  className="flex-1 py-3 px-4 rounded-xl font-sans font-bold text-xs uppercase tracking-wider text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover transition-all shadow-md flex items-center justify-center space-x-1.5"
                >
                  <span>Book This Property</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
