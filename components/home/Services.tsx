"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Destekli Risk Analizi",
    description:
      "Gelir, borç, ödeme alışkanlıkları ve finansal geçmişinizi yapay zeka modelleriyle analiz ederek net bir risk görünümü sunar.",
  },
  {
    icon: BadgeCheck,
    title: "Kredi Uygunluk Tahmini",
    description:
      "Başvuru yapmadan önce kredi alma olasılığınızı, güçlü ve zayıf finansal sinyallerinizle birlikte öngörür.",
  },
  {
    icon: Building2,
    title: "24+ Banka Karşılaştırması",
    description:
      "Farklı banka, kredi ve finansman seçeneklerini tek ekranda karşılaştırarak profilinize en uygun alternatifleri listeler.",
  },
  {
    icon: TrendingUp,
    title: "Gerçek Zamanlı Finansal Skor",
    description:
      "Finansal durumunuzdaki değişimleri dinamik olarak takip eder ve skor hareketlerini anlaşılır göstergelerle sunar.",
  },
  {
    icon: LockKeyhole,
    title: "KVKK Uyumlu Güvenlik",
    description:
      "Kişisel verilerinizi modern şifreleme, kontrollü erişim ve KVKK uyumlu süreçlerle güvenli şekilde işler.",
  },
  {
    icon: Sparkles,
    title: "Kişiselleştirilmiş Finansal Öneriler",
    description:
      "Risk skorunuzu iyileştirmek, borç dengenizi güçlendirmek ve daha sağlıklı kararlar almak için özel aksiyonlar üretir.",
  },
];

const timeline = [
  "Bilgileri Gir",
  "Risk Analizi",
  "AI Hesaplama",
  "Banka Eşleşmesi",
  "Sonuç",
];

export default function Services() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050b18] py-28 sm:py-32">
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.35, 0.62, 0.35],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-10 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 28, 0],
          y: [0, -18, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-16 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,233,.14),transparent_32%),linear-gradient(180deg,#050b18_0%,#081321_48%,#050b18_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl">
            <ShieldCheck size={18} className="text-cyan-300" />
            Kurumsal Finansal Zeka
          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Neden Risk Analiz?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Finansal riskleri görünür kılan, banka uyumluluğunu ölçen ve karar
            süreçlerinizi yapay zeka ile güçlendiren premium analiz deneyimi.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(8,47,73,.28)] backdrop-blur-2xl sm:p-7"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {timeline.map((item, index) => (
              <TimelineStep
                key={item}
                label={item}
                number={index + 1}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cyan-300/30 via-white/10 to-blue-500/20 p-px"
    >
      <div className="relative h-full rounded-[1.7rem] border border-white/10 bg-slate-950/70 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-2xl transition duration-300 group-hover:bg-slate-950/55">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-0 transition group-hover:opacity-100" />

        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.18,
          }}
          className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 shadow-[0_18px_45px_rgba(34,211,238,.12)]"
        >
          <Icon size={31} />
        </motion.div>

        <h3 className="text-2xl font-black text-white">{feature.title}</h3>

        <p className="mt-5 text-base leading-8 text-slate-400">
          {feature.description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm font-bold text-cyan-300">
          <CheckCircle2 size={17} />
          Premium analiz modülü
        </div>
      </div>
    </motion.article>
  );
}

function TimelineStep({
  label,
  number,
  isLast,
}: {
  label: string;
  number: number;
  isLast: boolean;
}) {
  return (
    <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:flex-col md:items-start md:gap-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-base font-black text-slate-950 shadow-[0_16px_45px_rgba(34,211,238,.25)]">
        {number}
      </div>

      <div>
        <p className="text-sm font-black text-white">{label}</p>
        <p className="mt-1 text-xs text-slate-500">Aşama {number}</p>
      </div>

      {!isLast && (
        <div className="ml-auto text-cyan-300 md:absolute md:right-[-20px] md:top-1/2 md:z-10 md:-translate-y-1/2 md:rotate-[-90deg]">
          ↓
        </div>
      )}
    </div>
  );
}
