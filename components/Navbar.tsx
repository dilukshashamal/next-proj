"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Menu,
  X,
  Compass,
  Sparkles,
  Calendar,
  Globe,
  ChevronDown,
  ShieldCheck
} from "lucide-react";

interface NavbarProps {
  onOpenBooking: (initialData?: any) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "Suites & Villas", href: "#suites" },
    { name: "Dining & Bars", href: "#dining" },
    { name: "Ayurveda & Spa", href: "#spa" },
    { name: "Offers & Experiences", href: "#offers" },
    { name: "Club Saliot", href: "#membership" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-panel py-3 shadow-2xl border-b border-[#d4af37]/20"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      {/* Top micro bar for direct contact & currency */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex items-center justify-between text-xs tracking-wider text-slate-300 border-b border-white/10 pb-2 mb-2">
        <div className="flex items-center space-x-6">
          <a
            href="tel:+94112345678"
            className="flex items-center space-x-1.5 hover:text-[#d4af37] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Direct Reservations: +94 11 234 5678</span>
          </a>
          <a
            href="mailto:concierge@saliothotels.com"
            className="flex items-center space-x-1.5 hover:text-[#d4af37] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>concierge@saliothotels.com</span>
          </a>
          <span className="inline-flex items-center space-x-1 text-[#d4af37] font-medium bg-[#d4af37]/10 px-2 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3" />
            <span>Best Rate Guarantee</span>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdown(!currencyDropdown)}
              className="flex items-center space-x-1 hover:text-[#d4af37] transition-colors uppercase font-medium"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {currencyDropdown && (
              <div className="absolute right-0 mt-2 w-24 glass-panel rounded-md shadow-xl py-1 z-50 text-slate-200">
                {["USD", "EUR", "GBP", "LKR", "AUD"].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setCurrencyDropdown(false);
                    }}
                    className="block w-full text-left px-3 py-1.5 text-xs hover:bg-[#d4af37]/20 hover:text-[#d4af37]"
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="text-white/30">|</span>
          <button
            onClick={() => onOpenBooking({ isMemberRegister: true })}
            className="text-slate-300 hover:text-[#d4af37] transition-colors font-medium flex items-center space-x-1"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Club Saliot VIP Sign In</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col items-start group">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full border border-[#d4af37]/50 flex items-center justify-center bg-[#d4af37]/10 group-hover:scale-105 transition-transform">
              <Compass className="w-4 h-4 text-[#d4af37]" />
            </div>
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-white group-hover:text-[#f3e5ab] transition-colors">
              SALIOT
            </span>
          </div>
          <span className="text-[9px] tracking-[0.35em] text-[#d4af37] uppercase font-semibold pl-10 -mt-1">
            Hotels & Resorts • Sri Lanka
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wider uppercase text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-[#d4af37] transition-colors duration-200 py-1 group text-xs tracking-widest"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => onOpenBooking()}
            className="relative px-6 py-2.5 rounded-full font-sans font-semibold text-xs tracking-widest uppercase text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Your Stay</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#070b12] bg-gold-gradient"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel-gold mt-3 mx-4 p-6 rounded-2xl shadow-2xl animate-fade-scale">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif tracking-wider text-slate-200 hover:text-[#d4af37] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-semibold text-xs uppercase tracking-widest text-[#070b12] bg-gold-gradient shadow-lg"
              >
                Reserve Suite or Villa
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking({ isMemberRegister: true });
                }}
                className="w-full py-2.5 rounded-xl text-xs font-medium text-slate-300 border border-[#d4af37]/30 hover:bg-[#d4af37]/10"
              >
                Join Club Saliot VIP (Save 15%)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
