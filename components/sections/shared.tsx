"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionGlow({
  className,
  color = "cyan",
}: {
  className?: string;
  color?: "cyan" | "blue" | "violet";
}) {
  const colors = {
    cyan: "bg-cyan-400/10",
    blue: "bg-blue-500/10",
    violet: "bg-violet-500/10",
  };

  return (
    <motion.div
      aria-hidden
      animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.12, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full blur-[140px]",
        colors[color],
        className
      )}
    />
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:72px_72px]",
        className
      )}
    />
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden bg-[#030712] py-24 sm:py-28 lg:py-32",
        className
      )}
    >
      <GridPattern />
      {children}
    </section>
  );
}

export function SectionBadge({
  icon,
  children,
}: {
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl"
    >
      {icon}
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: {
  badge?: ReactNode;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {badge}
      <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
        {highlight && (
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {" "}
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
      )}
    </motion.header>
  );
}

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-xl transition-colors hover:border-cyan-400/25 hover:bg-white/[0.06]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
