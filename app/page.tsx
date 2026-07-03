import Nav from "@/components/Nav";
import ScrollDots from "@/components/ScrollDots";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyMeSection from "@/components/WhyMeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollDots />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <WhyMeSection />
        <HowItWorksSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
