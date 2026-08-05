"use client";

import type { ReactNode } from "react";

interface HeroInfoProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function HeroInfo({
  icon,
  title,
  subtitle,
}: HeroInfoProps) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500/20">

        {icon}

      </div>

      <div>

        <h3 className="text-lg font-bold text-white">

          {title}

        </h3>

        <p className="text-sm text-slate-400">

          {subtitle}

        </p>

      </div>

    </div>
  );
}