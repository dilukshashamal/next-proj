"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Tag,
  ArrowRight,
  Sparkles,
  BedDouble
} from "lucide-react";

interface BookingBarProps {
  onSearch: (data: {
    destination: string;
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    roomType: string;
    promoCode: string;
  }) => void;
}

export default function BookingBar({ onSearch }: BookingBarProps) {
  // Default to today and 3 days later
  const todayStr = new Date().toISOString().split("T")[0];
  const nextWeek = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const [destination, setDestination] = useState("saliot-ocean");
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(nextWeek);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState("ocean-villa");
  const [promoCode, setPromoCode] = useState("CLUBSALIOT");

  const [showGuestPopup, setShowGuestPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      destination,
      checkIn,
      checkOut,
      adults,
      children,
      roomType,
      promoCode,
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative z-30 -mt-16 sm:-mt-20 md:-mt-24">
      <div className="glass-panel-gold rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-[#d4af37]/30 backdrop-blur-xl">
        <form onSubmit={handleSubmit}>
          {/* Quick Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-medium text-emerald-400">
                Direct Booking Privilege:
              </span>
              <span>Complimentary Airport VIP Transfer & High Tea</span>
            </div>
            <div className="flex items-center space-x-1 text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider">
                Member Rate Guarantee
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 items-end">
            {/* 1. Destination */}
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Destination</span>
              </label>
              <div className="relative">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-[#0d1624]/90 border border-white/15 rounded-xl px-3.5 py-3 text-xs md:text-sm text-white font-medium focus:outline-none focus:border-[#d4af37] transition-colors appearance-none cursor-pointer"
                >
                  <option value="saliot-ocean">
                    Saliot Ocean Mirage (Mirissa)
                  </option>
                  <option value="saliot-highland">
                    Saliot Highland Sanctuary (Nuwara Eliya)
                  </option>
                  <option value="saliot-heritage">
                    Saliot Royal Heritage (Kandy)
                  </option>
                  <option value="saliot-wilderness">
                    Saliot Forest Retreat (Sigiriya)
                  </option>
                </select>
              </div>
            </div>

            {/* 2. Check-In & Check-Out */}
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Dates (In / Out)</span>
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#0d1624]/90 border border-white/15 rounded-xl px-2.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#d4af37] cursor-pointer"
                />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#0d1624]/90 border border-white/15 rounded-xl px-2.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#d4af37] cursor-pointer"
                />
              </div>
            </div>

            {/* 3. Guests / Rooms Popover */}
            <div className="space-y-1.5 text-left relative">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] flex items-center space-x-1">
                <Users className="w-3.5 h-3.5" />
                <span>Guests & Rooms</span>
              </label>
              <button
                type="button"
                onClick={() => setShowGuestPopup(!showGuestPopup)}
                className="w-full bg-[#0d1624]/90 border border-white/15 rounded-xl px-3.5 py-3 text-xs md:text-sm text-white font-medium text-left flex items-center justify-between hover:border-[#d4af37] transition-colors"
              >
                <span>
                  {adults} {adults === 1 ? "Adult" : "Adults"}
                  {children > 0 ? `, ${children} Child` : ""}
                </span>
                <span className="text-[10px] text-[#d4af37] uppercase bg-[#d4af37]/10 px-2 py-0.5 rounded">
                  Edit
                </span>
              </button>

              {showGuestPopup && (
                <div className="absolute left-0 bottom-full mb-2 w-64 glass-panel-gold p-4 rounded-2xl shadow-2xl border border-[#d4af37]/40 z-50 animate-fade-scale text-slate-200">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span>Adults (12+ yrs)</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-sm"
                      >
                        -
                      </button>
                      <span className="font-semibold text-white">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span>Children (0-11 yrs)</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-sm"
                      >
                        -
                      </button>
                      <span className="font-semibold text-white">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowGuestPopup(false)}
                    className="w-full mt-2 py-1.5 rounded-lg bg-gold-gradient text-[#070b12] text-xs font-bold uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* 4. Room Tier & Promo Code */}
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] flex items-center space-x-1">
                <Tag className="w-3.5 h-3.5" />
                <span>VIP / Promo Code</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  placeholder="CLUBSALIOT"
                  className="w-full bg-[#0d1624]/90 border border-white/15 rounded-xl px-3.5 py-3 text-xs md:text-sm text-[#fce08b] font-semibold tracking-wider placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* 5. Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-sans font-bold text-xs md:text-sm tracking-wider uppercase text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-xl hover:shadow-[#d4af37]/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Check Rates & Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
