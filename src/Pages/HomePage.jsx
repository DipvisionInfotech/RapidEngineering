import React from "react";
import HeroSection       from "../components/HeroSection";
import BrandsBar         from "../components/BrandsBar";
import AboutSection      from "../components/AboutSection";
import ServicesSection   from "../components/ServicesSection";
import ProductsPreview   from "../components/ProductsPreview";
import IndustriesSection from "../components/IndustriesSection";
import ContactSection    from "../components/ContactSection";

/* HomePage only renders the core homepage sections.
   WhyUs / Stats / Certs live on their dedicated pages (About, etc.). */
const HomePage = () => (
  <>
    <HeroSection />
    <BrandsBar />
    <AboutSection />
    <ServicesSection />
    <ProductsPreview />
    <IndustriesSection />
    <ContactSection />
  </>
);

export default HomePage;
