import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import RiskCalculator from "@/components/sections/RiskCalculator";
import AIAnalysis from "@/components/sections/AIAnalysis";
import Banks from "@/components/sections/Banks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

        <Hero />

        <div className="space-y-28">

          <Stats />

          <Services />

          <Features />

          <RiskCalculator />

          <AIAnalysis />

          <Banks />

          <Testimonials />

          <FAQ />

          <CTA />

        </div>

      </main>

      <Footer />
    </>
  );
}