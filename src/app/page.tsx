import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AlwaysOn } from "@/components/AlwaysOn";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyHireUs } from "@/components/WhyHireUs";
import { Security } from "@/components/Security";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { BuiltFor } from "@/components/BuiltFor";
import { ServiceAreas } from "@/components/ServiceAreas";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <AlwaysOn />
      <Services />
      <HowItWorks />
      <WhyHireUs />
      <Security />
      <Pricing />
      <BuiltFor />
      <ServiceAreas />
      <FAQ />
      <Footer />
    </>
  );
}
