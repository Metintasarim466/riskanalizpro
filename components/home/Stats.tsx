"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  Clock3,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "98%",
    title: "Doğru Risk Tahmini",
  },
  {
    icon: Building2,
    value: "24+",
    title: "Anlaşmalı Banka",
  },
  {
    icon: FileCheck2,
    value: "150K+",
    title: "Analiz",
  },
  {
    icon: Clock3,
    value: "7/24",
    title: "AI Destek Sistemi",
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "KVKK Uyumlu",
    description: "Tüm analizler güvenli altyapıda gerçekleştirilmektedir.",
  },
  {
    icon: LockKeyhole,
    title: "256-bit Şifreleme",
    description: "Kişisel bilgiler modern güvenlik standartlarıyla korunur.",
  },
  {
    icon: BrainCircuit,
    title: "AI Motoru",
    description: "Gerçek zamanlı finansal analiz.",
  },
];

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050b18] py-28 text-white sm:py-32">
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.34, 0.66, 0.34],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-16 -z-10 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -28, 0],
          y: [0, 18, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-36 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,233,.13),transparent_32%),linear-gradient(180deg,#050b18_0%,#081321_48%,#050b18_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:78px_78px] opacity-20"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl">
            <ShieldCheck size={18} className="text-cyan-300" />
            Risk Analiz Güven Endeksi
          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Rakamlarla Risk Analiz
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Kullanıcılarımızın finansal kararlarını güçlendiren platform.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.title} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-300/24 via-white/10 to-blue-500/18 p-px shadow-[0_32px_100px_rgba(8,47,73,.3)]"
        >
          <div className="grid gap-4 rounded-[1.95rem] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-2xl lg:grid-cols-3 lg:p-6">
            {trustItems.map((item, index) => (
              <TrustItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: {
    icon: LucideIcon;
    value: string;
    title: string;
  };
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cyan-300/25 via-white/10 to-blue-500/20 p-px"
    >
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.18, 0.44, 0.18],
          scale: [1, 1.14, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        className="absolute right-6 top-6 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl"
      />

      <div className="relative h-full rounded-[1.7rem] border border-white/10 bg-slate-950/72 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-2xl transition group-hover:border-cyan-300/30 group-hover:bg-slate-950/58 group-hover:shadow-[0_24px_80px_rgba(8,145,178,.2)]">
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.16,
          }}
          className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 shadow-[0_18px_45px_rgba(34,211,238,.13)]"
        >
          <Icon size={30} />
        </motion.div>

        <h3 className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-5xl font-black text-transparent">
          {stat.value}
        </h3>

        <p className="mt-4 text-base font-bold text-slate-300">
          {stat.title}
        </p>
      </div>
    </motion.article>
  );
}

function TrustItem({
  item,
  index,
}: {
  item: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
          <Icon size={26} />
        </div>

        <div>
          <h3 className="text-lg font-black text-white">{item.title}</h3>
          <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
