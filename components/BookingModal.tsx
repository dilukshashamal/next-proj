"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  Calendar,
  Users,
  MapPin,
  ShieldCheck,
  Sparkles,
  BedDouble,
  CreditCard,
  Phone,
  Mail,
  User,
  Coffee,
  PlaneTakeoff,
  Award,
  ArrowRight,
  Download,
  Share2
} from "lucide-react";

export interface BookingData {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  roomType?: string;
  promoCode?: string;
  isMemberRegister?: boolean;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: BookingData | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialData,
}: BookingModalProps) {
  const [step, setStep] = useState<"details" | "guest" | "confirmed">("details");

  // Form State
  const [destination, setDestination] = useState(
    initialData?.destination || "saliot-ocean"
  );
  const [checkIn, setCheckIn] = useState(
    initialData?.checkIn ||
      new Date().toISOString().split("T")[0]
  );
  const [checkOut, setCheckOut] = useState(
    initialData?.checkOut ||
      new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0]
  );
  const [adults, setAdults] = useState(initialData?.adults || 2);
  const [children, setChildren] = useState(initialData?.children || 0);
  const [roomType, setRoomType] = useState(
    initialData?.roomType || "ocean-villa"
  );
  const [mealPlan, setMealPlan] = useState("champagne-breakfast");

  // Guest Details & Registration State
  const [title, setTitle] = useState("Mr.");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [specialRequests, setSpecialRequests] = useState("");
  const [joinClubSaliot, setJoinClubSaliot] = useState(true);
  const [promoCode, setPromoCode] = useState(
    initialData?.promoCode || "CLUBSALIOT"
  );

  // Add-on perks
  const [addSpaPackage, setAddSpaPackage] = useState(true);
  const [addAirportTransfer, setAddAirportTransfer] = useState(false);

  // Booking Confirmation Code
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    if (initialData) {
      if (initialData.destination) setDestination(initialData.destination);
      if (initialData.checkIn) setCheckIn(initialData.checkIn);
      if (initialData.checkOut) setCheckOut(initialData.checkOut);
      if (initialData.adults) setAdults(initialData.adults);
      if (initialData.children !== undefined) setChildren(initialData.children);
      if (initialData.roomType) setRoomType(initialData.roomType);
      if (initialData.promoCode) setPromoCode(initialData.promoCode);
      if (initialData.isMemberRegister) {
        setStep("guest");
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Pricing based on room type
  const roomRates: Record<string, { name: string; rate: number }> = {
    "ocean-villa": {
      name: "Royal Oceanfront Villa with Private Infinity Pool",
      rate: 650,
    },
    "presidential-suite": {
      name: "Presidential Panoramic Sky Penthouse",
      rate: 980,
    },
    "royal-pavilion": {
      name: "Highland Tea Sanctuary Heritage Suite",
      rate: 490,
    },
    "deluxe-terrace": {
      name: "Deluxe Oceanview Grand Terrace Room",
      rate: 340,
    },
  };

  const selectedRoom = roomRates[roomType] || roomRates["ocean-villa"];
  const baseTotal = selectedRoom.rate * nights;
  const spaCost = addSpaPackage ? 120 : 0;
  const transferCost = addAirportTransfer ? 80 : 0;
  const discountRate = joinClubSaliot || promoCode === "CLUBSALIOT" ? 0.15 : 0;
  const discountAmount = Math.round(baseTotal * discountRate);
  const taxes = Math.round((baseTotal - discountAmount) * 0.12);
  const grandTotal = baseTotal - discountAmount + taxes + spaCost + transferCost;

  const handleCompleteReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBookingRef(`SLT-${randomNum}-2026`);
    setStep("confirmed");
  };

  const propertyNames: Record<string, string> = {
    "saliot-ocean": "Saliot Ocean Mirage (Mirissa Beachfront)",
    "saliot-highland": "Saliot Highland Sanctuary (Nuwara Eliya)",
    "saliot-heritage": "Saliot Royal Heritage (Kandy Palatial)",
    "saliot-wilderness": "Saliot Forest Retreat (Sigiriya)",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-scale">
      <div className="relative w-full max-w-4xl glass-panel-gold rounded-3xl shadow-2xl border border-[#d4af37]/40 text-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0b1320]/90">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white">
                {step === "confirmed"
                  ? "Reservation & VIP Registration Confirmed"
                  : "Hotel Registration & Suite Reservation"}
              </h3>
              <p className="text-xs text-[#d4af37]">
                Saliot Luxury Hotels & Resorts • Direct Guest Privilege
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progression indicator */}
        {step !== "confirmed" && (
          <div className="grid grid-cols-2 bg-[#090e18] text-xs font-semibold uppercase tracking-wider text-center border-b border-white/10">
            <button
              onClick={() => setStep("details")}
              className={`py-3 transition-colors flex items-center justify-center space-x-2 ${
                step === "details"
                  ? "text-[#d4af37] border-b-2 border-[#d4af37] bg-[#d4af37]/5"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>1. Stay & Suite Selection</span>
            </button>
            <button
              onClick={() => setStep("guest")}
              className={`py-3 transition-colors flex items-center justify-center space-x-2 ${
                step === "guest"
                  ? "text-[#d4af37] border-b-2 border-[#d4af37] bg-[#d4af37]/5"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>2. Guest Registration & VIP Membership</span>
            </button>
          </div>
        )}

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: STAY & SUITE SELECTION */}
          {step === "details" && (
            <div className="space-y-6 animate-fade-scale">
              {/* Destination & Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>Select Saliot Property</span>
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="saliot-ocean">
                      Saliot Ocean Mirage (Mirissa Beachfront)
                    </option>
                    <option value="saliot-highland">
                      Saliot Highland Sanctuary (Nuwara Eliya)
                    </option>
                    <option value="saliot-heritage">
                      Saliot Royal Heritage (Kandy Palatial)
                    </option>
                    <option value="saliot-wilderness">
                      Saliot Forest Retreat (Sigiriya)
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>Stay Duration ({nights} Nights)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-3 py-3 text-xs sm:text-sm text-white"
                    />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-3 py-3 text-xs sm:text-sm text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Suite Selection Cards */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center space-x-1.5">
                  <BedDouble className="w-4 h-4" />
                  <span>Choose Your Accommodation</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(roomRates).map(([key, info]) => (
                    <div
                      key={key}
                      onClick={() => setRoomType(key)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                        roomType === key
                          ? "border-[#d4af37] bg-[#d4af37]/15 shadow-lg shadow-[#d4af37]/10"
                          : "border-white/10 bg-[#0e1726]/70 hover:border-white/25"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-serif font-bold text-sm text-white">
                            {info.name}
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            King Bed • Panoramic Terrace • 24/7 Butler
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-[#fce08b]">
                            ${info.rate}
                          </p>
                          <p className="text-[10px] text-slate-400">/ night</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meal Plan & Addons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center space-x-1.5">
                    <Coffee className="w-4 h-4" />
                    <span>Curated Dining Experience</span>
                  </label>
                  <select
                    value={mealPlan}
                    onChange={(e) => setMealPlan(e.target.value)}
                    className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="champagne-breakfast">
                      Complimentary Daily Champagne Breakfast (Included)
                    </option>
                    <option value="half-board">
                      Half Board (Gourmet Breakfast & 5-Course Dinner)
                    </option>
                    <option value="all-inclusive">
                      Ultra-Luxury All-Inclusive Sommelier Package
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Exclusive Stay Enhancements</span>
                  </label>
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center space-x-2 bg-[#0e1726] p-2.5 rounded-xl border border-white/10 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addSpaPackage}
                        onChange={(e) => setAddSpaPackage(e.target.checked)}
                        className="rounded text-[#d4af37] focus:ring-[#d4af37] w-4 h-4"
                      />
                      <span>
                        Ayurvedic Couple's Wellness Spa Journey (+$120)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 bg-[#0e1726] p-2.5 rounded-xl border border-white/10 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addAirportTransfer}
                        onChange={(e) => setAddAirportTransfer(e.target.checked)}
                        className="rounded text-[#d4af37] focus:ring-[#d4af37] w-4 h-4"
                      />
                      <span>
                        VIP Airport Luxury Chauffeur Mercedes Transfer (+$80)
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Price Summary Strip */}
              <div className="glass-panel p-4 rounded-2xl border border-[#d4af37]/30 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">
                    Estimated Total ({nights} nights, {adults} Adults):
                  </p>
                  <p className="text-2xl font-serif font-bold text-[#fce08b]">
                    ${grandTotal.toLocaleString()}{" "}
                    <span className="text-xs text-slate-400 font-sans font-normal">
                      (Includes Taxes & Service)
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep("guest")}
                  className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg flex items-center space-x-2"
                >
                  <span>Proceed to Guest Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: GUEST REGISTRATION & VIP ENROLLMENT */}
          {step === "guest" && (
            <form
              onSubmit={handleCompleteReservation}
              className="space-y-6 animate-fade-scale"
            >
              {/* VIP Member Callout */}
              <div className="bg-[#d4af37]/10 border border-[#d4af37]/40 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Award className="w-7 h-7 text-[#d4af37]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#fce08b]">
                      Club Saliot VIP Registration Included
                    </p>
                    <p className="text-xs text-slate-300">
                      Enjoy instant 15% savings ($
                      {discountAmount.toLocaleString()} saved), early check-in,
                      and a $100 resort spa credit.
                    </p>
                  </div>
                </div>
                <label className="flex items-center space-x-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={joinClubSaliot}
                    onChange={(e) => setJoinClubSaliot(e.target.checked)}
                    className="w-4 h-4 rounded text-[#d4af37] focus:ring-[#d4af37]"
                  />
                  <span>Enrolled</span>
                </label>
              </div>

              {/* Guest Information Form Fields */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] flex items-center space-x-1.5">
                  <User className="w-4 h-4" />
                  <span>Primary Guest & Registration Details</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="sm:col-span-1">
                    <label className="text-[11px] text-slate-400 font-medium block mb-1">
                      Title
                    </label>
                    <select
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Dr.">Dr.</option>
                      <option value="Prof.">Prof.</option>
                      <option value="Lord">Lord</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1.5">
                    <label className="text-[11px] text-slate-400 font-medium block mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. Alexander"
                      className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div className="sm:col-span-1.5">
                    <label className="text-[11px] text-slate-400 font-medium block mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="e.g. Sterling"
                      className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 font-medium block mb-1">
                      Email Address (For Confirmation Voucher) *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alexander@luxurytravel.com"
                        className="w-full bg-[#0e1726] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 font-medium block mb-1">
                      Phone / WhatsApp (For Concierge Updates) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7911 123456"
                        className="w-full bg-[#0e1726] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 font-medium block mb-1">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 font-medium block mb-1">
                      Promo / VIP Privilege Code
                    </label>
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-[#fce08b] font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 font-medium block mb-1">
                    Special Requests, Dietary Preferences or Arrival Time
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. High floor ocean view, gluten-free dining, celebrating 10th anniversary."
                    className="w-full bg-[#0e1726] border border-white/15 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Guarantees & Final Confirmation button */}
              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <p className="flex items-center space-x-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Free Cancellation up to 48 Hours Prior</span>
                  </p>
                  <p>No upfront payment required today. Pay upon check-in.</p>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setStep("details")}
                    className="px-4 py-2.5 rounded-xl text-xs text-slate-300 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-xl flex items-center justify-center space-x-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Complete VIP Registration</span>
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* STEP 3: CONFIRMED RESERVATION VOUCHER VIEW */}
          {step === "confirmed" && (
            <div className="text-center py-4 space-y-6 animate-fade-scale">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full">
                  Registration Successful
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                  Welcome to Saliot, {title} {lastName || "Guest"}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1">
                  Your luxury reservation and VIP Club Saliot membership profile
                  have been registered.
                </p>
              </div>

              {/* Booking Reference Card */}
              <div className="max-w-md mx-auto glass-panel-gold rounded-2xl p-5 border border-[#d4af37]/40 text-left space-y-3">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-xs text-slate-400">
                    Booking Reference ID:
                  </span>
                  <span className="font-mono font-bold text-base text-[#fce08b]">
                    {bookingRef}
                  </span>
                </div>

                <div className="text-xs space-y-1.5">
                  <p>
                    <span className="text-slate-400">Resort: </span>
                    <span className="text-white font-medium">
                      {propertyNames[destination]}
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-400">Accommodation: </span>
                    <span className="text-white font-medium">
                      {selectedRoom.name}
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-400">Dates: </span>
                    <span className="text-white font-medium">
                      {checkIn} to {checkOut} ({nights} Nights)
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-400">Guests: </span>
                    <span className="text-white font-medium">
                      {adults} Adults {children > 0 ? `, ${children} Children` : ""}
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-400">Registered Email: </span>
                    <span className="text-white font-medium">{email || "alexander@luxurytravel.com"}</span>
                  </p>
                  <p>
                    <span className="text-slate-400">Total Amount: </span>
                    <span className="text-[#fce08b] font-bold text-sm">
                      ${grandTotal.toLocaleString()} USD
                    </span>
                  </p>
                </div>

                <div className="bg-[#0b1320] p-2.5 rounded-xl border border-white/5 text-[11px] text-[#d4af37] flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>
                    VIP Privilege: $100 Spa Credit + Daily Champagne Breakfast
                    Activated!
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => alert(`Confirmation voucher ${bookingRef} downloaded!`)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold glass-panel hover:bg-white/15 border border-white/20 flex items-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Download Voucher</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
