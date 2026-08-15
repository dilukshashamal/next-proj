"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import PropertiesShowcase from "@/components/PropertiesShowcase";
import SuitesSection from "@/components/SuitesSection";
import DiningAndSpa from "@/components/DiningAndSpa";
import OffersAndExperiences from "@/components/OffersAndExperiences";
import ReviewsAndAwards from "@/components/ReviewsAndAwards";
import Footer from "@/components/Footer";
import BookingModal, { BookingData } from "@/components/BookingModal";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  // Handlers for interactive actions
  const handleOpenBooking = (initialData?: BookingData) => {
    setBookingData(initialData || null);
    setIsBookingOpen(true);
  };

  const handleBookingBarSearch = (data: {
    destination: string;
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    roomType: string;
    promoCode: string;
  }) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  const handleSelectProperty = (propertyKey: string) => {
    setBookingData({
      destination: propertyKey,
      roomType: "ocean-villa",
    });
    setIsBookingOpen(true);
  };

  const handleBookSuite = (suiteKey: string) => {
    setBookingData({
      roomType: suiteKey,
    });
    setIsBookingOpen(true);
  };

  const handleClaimOffer = (promoCode: string) => {
    setBookingData({
      promoCode,
      isMemberRegister: promoCode === "CLUBSALIOT",
    });
    setIsBookingOpen(true);
  };

  return (
    <div className="relative bg-[#070b12] text-white min-h-screen selection:bg-[#d4af37]/30 selection:text-[#fce08b]">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Visual Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Quick Reservation & Registration Bar */}
      <BookingBar onSearch={handleBookingBarSearch} />

      {/* Resort Destinations Collection */}
      <PropertiesShowcase onSelectProperty={handleSelectProperty} />

      {/* Luxury Suites & Villas */}
      <SuitesSection onBookSuite={handleBookSuite} />

      {/* Gastronomy & Ayurvedic Wellness Spa */}
      <DiningAndSpa onOpenBooking={() => handleOpenBooking()} />

      {/* Curated Offers & Club Saliot VIP Membership */}
      <OffersAndExperiences onClaimOffer={handleClaimOffer} />

      {/* Verified Reviews & International Accolades */}
      <ReviewsAndAwards />

      {/* Comprehensive Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Hotel Registration & Reservation Engine Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingData}
      />
    </div>
  );
}
