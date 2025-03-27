import HeroSection from "@/components/ui/HeroSection";
import ProductShowcase from "@/components/ui/ProductShowcase";
import WhyUs from "@/components/ui/WhyUs";
import OurProducts from "@/components/ui/OurProducts";
import IngredientGallery from "@/components/ui/IngredientGallery";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <WhyUs />
      <OurProducts />
      <IngredientGallery />
    </>
  );
}
