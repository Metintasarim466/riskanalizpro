"use client";

import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-10 pt-40 pb-32">

        <div className="grid items-center gap-16 lg:grid-cols-[58%_42%]">

          <HeroContent />

          <HeroCard />

        </div>

      </div>

    </section>
  );
}
