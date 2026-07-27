"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Bilgilerinizi Girin",
    description:
      "Gelir, gider ve finansal bilgilerinizi güvenli şekilde sisteme girin.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analizi",
    description: "Yapay zeka finansal verilerinizi analiz eder.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Motoru",
    description:
      "Risk skorunuz onlarca finansal parametre kullanılarak hesaplanır.",
  },
  {
    icon: Building2,
    title: "24+ Banka Analizi",
    description: "Bankaların kriterleriyle eşleştirme yapılır.",
  },
  {
    icon: BadgeCheck,
    title: "Sonuç ve Öneriler",
    description: "Size en uygun finansal öneriler oluşturulur.",
  },
];

const particles = [
  "left-[15%] top-[18%]",
  "right-[16%] top-[22%]",
  "left-[20%] bottom-[18%]",
  "right-[22%] bottom-[16%]",
  "left-1/2 top-[8%]",
  "left-[46%] bottom-[5%]",
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="relative isolate overflow-hidden bg-[#050b18] py-28 text-white sm:py-32"
    >
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.42, 0.72, 0.42],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-16 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -30, 0],
          y: [0, 24, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-1/4 -z-10 h-[440px] w-[440px] rounded-full bg-blue-500/12 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,.14),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,.14),transparent_30%),linear-gradient(180deg,#050b18_0%,#081321_46%,#050b18_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl">
            <BrainCircuit size={18} className="text-cyan-300" />
            AI Destekli Süreç
          </div>

          <h2
            id="how-it-works-title"
            className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Nasıl Çalışır?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Risk Analiz birkaç dakika içinde finansal durumunuzu analiz ederek
            size özel risk skorunu ve en uygun finansal önerileri sunar.
          </p>
        </motion.header>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent lg:left-0 lg:top-1/2 lg:h-px lg:w-full lg:-translate-y-1/2"
          />

          <div className="relative z-10 grid gap-6 lg:grid-cols-5">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={step}
                number={index + 1}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>

          <AICore />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <button
            type="button"
            aria-label="Risk analizini şimdi başlat"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 text-base font-black text-slate-950 shadow-[0_22px_70px_rgba(34,211,238,.26)] transition focus:outline-none focus:ring-4 focus:ring-cyan-300/30 hover:-translate-y-1 hover:bg-cyan-300"
          >
            Risk Analizini Şimdi Başlat
            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  number,
  isLast,
}: {
  step: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  number: number;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: number * 0.08, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -10 }}
      tabIndex={0}
      className="group relative rounded-[1.75rem] bg-gradient-to-br from-cyan-300/30 via-white/10 to-blue-500/20 p-px outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/25"
    >
      <div className="relative h-full rounded-[1.7rem] border border-white/10 bg-slate-950/72 p-6 shadow-[0_26px_80px_rgba(8,47,73,.24),inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-2xl transition group-hover:bg-slate-950/58">
        <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-0 transition group-hover:opacity-100" />

        <div className="flex items-start justify-between gap-4">
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: number * 0.16,
            }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 shadow-[0_18px_45px_rgba(34,211,238,.13)]"
          >
            <Icon size={28} aria-hidden="true" />
          </motion.div>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-sm font-black text-cyan-200 ring-1 ring-white/10">
            {number}
          </span>
        </div>

        <h3 className="mt-7 text-xl font-black text-white">{step.title}</h3>

        <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-400">
          {step.description}
        </p>

        {!isLast && (
          <div
            aria-hidden="true"
            className="mt-6 text-2xl font-black text-cyan-300 lg:absolute lg:-right-4 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:-rotate-90"
          >
            ↓
          </div>
        )}
      </div>
    </motion.article>
  );
}

function AICore() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto mt-12 flex h-56 w-56 items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:z-20 lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute h-52 w-52 rounded-full border border-cyan-300/25 border-t-cyan-200/80"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute h-40 w-40 rounded-full border border-blue-300/25 border-b-blue-300/80"
      />

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-32 w-32 rounded-full bg-cyan-300/15 blur-2xl"
      />

      {particles.map((position, index) => (
        <motion.span
          key={position}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.85, 1.2, 0.85],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3 + index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.22,
          }}
          className={`absolute h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,.9)] ${position}`}
        />
      ))}

      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] shadow-[0_0_90px_rgba(34,211,238,.35),inset_0_1px_0_rgba(255,255,255,.22)] backdrop-blur-2xl">
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-200/20 via-blue-400/10 to-transparent" />
        <BrainCircuit className="relative text-cyan-200" size={36} />
      </div>
    </div>
  );
}
