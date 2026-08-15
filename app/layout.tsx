import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saliot Luxury Hotels & Resorts | Sri Lanka's Premier Sanctuary",
  description:
    "Experience the pinnacle of tropical opulence and bespoke hospitality at Saliot Luxury Hotels & Resorts. Discover oceanfront suites, world-class dining, and restorative wellness.",
  keywords: [
    "Saliot",
    "Luxury Resort Sri Lanka",
    "Araliya Resorts style",
    "5 star hotel booking",
    "oceanfront villa",
    "luxury wellness spa",
  ],
  openGraph: {
    title: "Saliot Luxury Hotels & Resorts | Redefining Tropical Hospitality",
    description:
      "Where timeless luxury meets serene paradise. Book your private villa or presidential suite with exclusive Club Saliot privileges.",
    images: [{ url: "/images/hero_resort.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070b12] text-[#f2f4f8] font-sans antialiased selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]">
        {children}
      </body>
    </html>
  );
}
