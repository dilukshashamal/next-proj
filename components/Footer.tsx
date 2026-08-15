"use client";

import React, { useState } from "react";
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  ShieldCheck,
  Globe,
  Share2,
  CheckCircle2
} from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#04070d] text-slate-300 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top VIP Newsletter Registration Strip */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-10 mb-16 border border-[#d4af37]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#d4af37] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Privileged Correspondence</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Subscribe to The Saliot Gazette
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Receive private invitations, seasonal preview rates, and an
              instant $100 spa voucher directly to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {isSubscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-6 py-3.5 rounded-full text-xs font-semibold flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you! Your $100 VIP Voucher code has been sent.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2 max-w-md w-full"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-[#0b1320] border border-white/15 rounded-full px-5 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest text-[#070b12] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg flex items-center justify-center space-x-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10 text-xs">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37]/50 flex items-center justify-center bg-[#d4af37]/10">
                <Compass className="w-4 h-4 text-[#d4af37]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                SALIOT
              </span>
            </div>
            <p className="text-slate-400 font-light leading-relaxed max-w-sm">
              Saliot Luxury Hotels & Resorts represents the highest echelon of
              tropical hospitality in Sri Lanka. Blending coastal serenity,
              highland grandeur, and bespoke butler service.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full glass-panel hover:bg-[#d4af37]/20 hover:text-[#d4af37] flex items-center justify-center transition-colors text-slate-300"
                aria-label="Social Media"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full glass-panel hover:bg-[#d4af37]/20 hover:text-[#d4af37] flex items-center justify-center transition-colors text-slate-300"
                aria-label="Global Network"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full glass-panel hover:bg-[#d4af37]/20 hover:text-[#d4af37] flex items-center justify-center transition-colors text-slate-300"
                aria-label="Verified Security"
              >
                <ShieldCheck className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Properties Col */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Our Resorts
            </h4>
            <ul className="space-y-2 text-slate-400 font-light">
              <li>
                <a
                  href="#destinations"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Saliot Ocean Mirage (Mirissa)
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Saliot Highland Sanctuary (Nuwara Eliya)
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Saliot Royal Heritage (Kandy)
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Saliot Forest Sanctuary (Sigiriya)
                </a>
              </li>
            </ul>
          </div>

          {/* Experiences Col */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Experiences
            </h4>
            <ul className="space-y-2 text-slate-400 font-light">
              <li>
                <a href="#suites" className="hover:text-[#d4af37] transition-colors">
                  Suites & Private Villas
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#d4af37] transition-colors">
                  Michelin Oceanfront Dining
                </a>
              </li>
              <li>
                <a href="#spa" className="hover:text-[#d4af37] transition-colors">
                  Ayurvedic Wellness Spa
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#d4af37] transition-colors">
                  Honeymoon & VIP Offers
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Club Saliot Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Concierge Contact Col */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              24/7 Concierge
            </h4>
            <ul className="space-y-2.5 text-slate-400 font-light">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>reservations@saliothotels.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>Mirissa Coastal Avenue, Southern Province, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Saliot Luxury Hotels & Resorts. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Stay
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Sustainability Charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
