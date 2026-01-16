import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import AboutSection from "../components/AboutSection";
import HowItWorks from "../components/howitwork";
import WorkProcess from "../components/industry";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import Testimonials from "../components/Testimonials";
import Marq from "../components/Marq";
import PortfolioSection from "../components/PortfolioSection";


export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <ServicesSection />
      <AboutSection />
      <Marq />
      <PortfolioSection/>
      <HowItWorks />
      <WhyChooseUs/>
      <WorkProcess/>
      
      {/* <FAQSection/> */}
      <Testimonials/>
      <Footer />
    </div>
  );
}
