// src/app/page.tsx
import Header from "@/app/homepage/Header";
import Footer from "@/app/homepage/Footer";
import ServiceFeatures from "@/app/homepage/ServiceFeatures";
import Banner from "@/app/homepage/Banner";
import HeroSection from "@/app/homepage/HeroSection";
import HeroSection_2 from "@/app/homepage/HeroSection_2";
import FeaturedProducts from "@/app/products/FeaturedProducts";
import TileProductList from "@/app/homepage/TileProductList";

export default function HomePage() {
  return (
    <>
    <Header />
    <Banner />
    <ServiceFeatures />
    <HeroSection />
    <FeaturedProducts />
    <HeroSection_2 />
    <TileProductList />
    <Footer />
    </>
  );
}
