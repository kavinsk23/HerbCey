import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import OfferHeader from "../components/ui/OfferHeader";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";

// Configure the font
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "HerbCey",
  description: "Natural wellness products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <OfferHeader />
        <Header />
        <div>
          <HeroSection />
        </div>
        {children}
      </body>
    </html>
  );
}
