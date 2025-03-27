import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import OfferHeader from "../components/ui/OfferHeader";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import ProductShowcase from "@/components/ui/ProductShowcase";
import WhyUs from "@/components/ui/WhyUs";
import OurProducts from "@/components/ui/OurProducts";
import IngredientGallery from "@/components/ui/IngredientGallery";
import Footer from "@/components/ui/Footer";

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
  // This needs to be a Client Component to use usePathname
  // Since layout components can't use "use client", you'll need to create a separate client component
  return (
    <html lang="en">
      <body className={manrope.className}>
        <OfferHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
