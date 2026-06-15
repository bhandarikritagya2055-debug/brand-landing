import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import WhatYouGet from "@/components/WhatYouGet";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyMe from "@/components/WhyMe";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <WhatYouGet />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <WhyMe />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Closing />
      </main>
    </>
  );
}
