"use client";

import React from "react";
import {
  Gift,
  Heart,
  Calendar,
  Compass,
  Ship,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface OffersAndExperiencesProps {
  onClaimOffer: (promoCode: string) => void;
}

export default function OffersAndExperiences({
  onClaimOffer,
}: OffersAndExperiencesProps) {
  const offers = [
    {
      id: "honeymoon",
      badge: "Romance & Honeymoon",
      title: "Enchanted Ocean Romance Package",
      discount: "Save 25% + Champagne & Spa",
      description:
        "Includes a candlelit private beach dinner, 90-minute couples Ayurvedic massage, chilled bottle of vintage Moët champagne, and daily breakfast in bed.",
      code: "HONEYMOON25",
      validTill: "Valid for Stays Through 2026",
      icon: Heart,
    },
    {
      id: "earlybird",
      badge: "Advance Purchase",
      title: "The Saliot Privilege Summer Retreat",
      discount: "Save 30% on All Villas",
      description:
        "Book 30 days in advance to unlock exclusive preferential rates, complimentary airport luxury Mercedes transfer, and $150 culinary credit.",
      code: "SUMMER30",
      validTill: "Book by 31 August 2026",
      icon: Gift,
    },
    {
      id: "wellness",
      badge: "Ayurveda & Healing",
      title: "7-Day Holistic Renewal Journey",
      discount: "All-Inclusive Wellness Immersion",
      description:
        "Full doctor consultation, customized daily herbal therapies, organic wellness cuisine, private sunrise yoga sessions, and mindful tea ceremonies.",
      code: "WELLNESS7",
      validTill: "Year-Round Availability",
      icon: Sparkles,
    },
  ];

  return (
    <section id="offers" className="py-24 bg-[#090e18] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#d4af37] mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>Curated Privileges</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Exclusive Packages & <span className="text-gold-gradient italic">Offers</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Elevate your journey with our hand-crafted seasonal escapes and
            curated luxury inclusions.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className="glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between group hover:border-[#d4af37]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                      {offer.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#d4af37]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#fce08b] transition-colors mb-2">
                    {offer.title}
                  </h3>

                  <p className="text-xs font-bold text-[#fce08b] uppercase tracking-wider mb-3">
                    {offer.discount}
                  </p>

                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                    {offer.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Promo Code:</span>
                    <span className="font-mono font-bold text-[#fce08b] bg-[#0b1320] px-2 py-0.5 rounded border border-white/10">
                      {offer.code}
                    </span>
                  </div>

                  <button
                    onClick={() => onClaimOffer(offer.code)}
                    className="w-full py-2.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Claim Privilege</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Club Saliot VIP Membership Banner */}
        <div id="membership" className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#d4af37]">
                <ShieldCheck className="w-4 h-4" />
                <span>Club Saliot VIP Hospitality Society</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Register as a Member & Enjoy <span className="text-gold-gradient italic">15% Off Guaranteed</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                Become a registered Club Saliot patron today. Gain immediate
                access to member-only rates, complimentary room upgrades, priority
                table bookings at Michelin restaurants, and exclusive seasonal
                invitations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Complimentary Late Check-out</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>$100 Spa & Dining Credit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>VIP Airport Fast-Track</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                onClick={() => onClaimOffer("CLUBSALIOT")}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-2xl hover:shadow-[#d4af37]/40 transition-transform transform hover:-translate-y-1"
              >
                Register & Claim 15% VIP
              </button>
              <p className="text-[11px] text-slate-400 mt-2">
                Instant registration • No annual membership fee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
