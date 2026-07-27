"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Banknote,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileCheck2,
  Gauge,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

const analysisCards = [
  {
    icon: Banknote,
    title: "Gelir Dengesi",
    value: 86,
    description: "Gelir ve gider oranınız sağlıklı seviyede ilerliyor.",
  },
  {
    icon: WalletCards,
    title: "Borç Yönetimi",
    value: 72,
    description: "Borç yükünüz yönetilebilir, fakat optimizasyon alanı var.",
  },
  {
    icon: CreditCard,
    title: "Kredi Geçmişi",
    value: 91,
    description: "Ödeme geçmişiniz güçlü bir kredi profili oluşturuyor.",
  },
  {
    icon: Target,
    title: "Finansal Disiplin",
    value: 84,
    description: "Düzenli ödeme davranışınız risk skorunu destekliyor.",
  },
];

const recommendations = [
  "Kredi kartı limit kullanımını %30'un altına düşür",
  "Borç/gelir oranını azalt",
  "Düzenli ödeme geçmişini koru",
  "Yeni kredi başvurusunu 30 gün ertele",
  "Acil durum fonu oluştur",
];

const strengths = [
  "Gelir akışı istikrarlı",
  "Kredi geçmişi güçlü",
  "Ödeme alışkanlığı düzenli",
];

const weaknesses = [
  "Kart kullanım oranı yüksek",
  "Borç yoğunluğu izlenmeli",
];

const timeline = ["AI Analizi", "Banka Eşleşmesi", "Teklif Hazır", "Başvuru"];

export default function AIAnalysis() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050b18] py-28 text-white sm:py-32">
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.32, 0.66, 0.32], scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-16 -z-10 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-36 bottom-16 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
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
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl">
            <BrainCircuit size={18} className="text-cyan-300" />
            AI Karar Motoru
          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            AI Finansal Analiz
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Yapay zeka finansal durumunuzu analiz etti ve size özel öneriler
            hazırladı.
          </p>
        </motion.header>

        <TiltCard
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.18 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-300/24 via-white/10 to-blue-500/18 p-px shadow-[0_34px_120px_rgba(8,47,73,.36)]"
        >
          <div className="rounded-[1.95rem] border border-white/10 bg-slate-950/72 p-5 backdrop-blur-2xl lg:p-8">
            <div className="grid gap-6 xl:grid-cols-[.86fr_1.18fr_.96fr]">
              <ProfilePanel />

              <div className="grid gap-5 sm:grid-cols-2">
                {analysisCards.map((card, index) => (
                  <AnalysisCard key={card.title} card={card} index={index} />
                ))}
              </div>

              <RecommendationPanel />
            </div>

            <Timeline />
          </div>
        </TiltCard>
      </div>
    </section>
  );
}

function ProfilePanel() {
  return (
    <GlassPanel className="min-h-full">
      <div className="flex flex-col items-center text-center">
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.88, 1, 0.88] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,.28),inset_0_1px_0_rgba(255,255,255,.14)]"
        >
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-200/20 via-blue-400/10 to-transparent" />
          <BrainCircuit className="relative text-cyan-200" size={42} />
        </motion.div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <CheckCircle2 size={16} />
          </motion.span>
          Analiz tamamlandı
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        <ScoreRow icon={ShieldCheck} label="Risk seviyesi" value="Düşük" />
        <ScoreRow icon={Gauge} label="Finansal sağlık puanı" value="92/100" />
      </div>

      <div className="mt-7 grid gap-5">
        <InsightList title="Güçlü yönler" items={strengths} positive />
        <InsightList title="Zayıf yönler" items={weaknesses} />
      </div>
    </GlassPanel>
  );
}

function AnalysisCard({
  card,
  index,
}: {
  card: {
    icon: LucideIcon;
    title: string;
    value: number;
    description: string;
  };
  index: number;
}) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-2xl transition hover:border-cyan-300/30 hover:shadow-[0_24px_70px_rgba(8,145,178,.16)]"
    >
      <div className="flex items-start justify-between gap-4">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.16,
          }}
          className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300"
        >
          <Icon size={25} />
        </motion.div>

        <span className="text-2xl font-black text-cyan-300">
          %{card.value}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black text-white">{card.title}</h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">
        {card.description}
      </p>

      <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${card.value}%` }}
          transition={{ delay: 0.18 + index * 0.08, duration: 0.9 }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_24px_rgba(34,211,238,.34)]"
        />
      </div>
    </motion.article>
  );
}

function RecommendationPanel() {
  return (
    <GlassPanel className="min-h-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-cyan-300">AI Önerileri</p>
          <h3 className="mt-2 text-2xl font-black text-white">
            Öncelikli aksiyonlar
          </h3>
        </div>
        <Sparkles className="text-cyan-300" size={26} />
      </div>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, duration: 0.48 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300 transition hover:border-cyan-300/30"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                delay: index * 0.18,
              }}
              className="mt-0.5 text-emerald-300"
            >
              <CheckCircle2 size={18} />
            </motion.span>
            {item}
          </motion.div>
        ))}
      </div>
    </GlassPanel>
  );
}

function Timeline() {
  return (
    <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl">
      <div className="grid gap-4 md:grid-cols-4">
        {timeline.map((item, index) => (
          <div
            key={item}
            className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:flex-col md:items-start"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950 shadow-[0_16px_45px_rgba(34,211,238,.25)]">
              {index === 0 ? "Bugün" : index + 1}
            </div>

            <div>
              <p className="text-sm font-black text-white">{item}</p>
              <p className="mt-1 text-xs text-slate-500">Aşama {index + 1}</p>
            </div>

            {index !== timeline.length - 1 && (
              <div className="ml-auto text-cyan-300 md:absolute md:right-[-20px] md:top-1/2 md:z-10 md:-translate-y-1/2 md:rotate-[-90deg]">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
          <Icon size={20} />
        </span>
        <span className="text-sm font-bold text-slate-300">{label}</span>
      </div>
      <span className="font-black text-cyan-300">{value}</span>
    </div>
  );
}

function InsightList({
  title,
  items,
  positive = false,
}: {
  title: string;
  items: string[];
  positive?: boolean;
}) {
  return (
    <div>
      <h4 className="text-sm font-black text-white">{title}</h4>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
            {positive ? (
              <BadgeCheck size={16} className="text-emerald-300" />
            ) : (
              <FileCheck2 size={16} className="text-orange-300" />
            )}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-2xl transition hover:border-cyan-300/30 hover:shadow-[0_24px_70px_rgba(8,145,178,.16)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({
  children,
  className,
  ...motionProps
}: {
  children: ReactNode;
  className?: string;
} & React.ComponentProps<typeof motion.div>) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 4;
    const rotateX = (0.5 - y / rect.height) * 4;

    setTilt({ rotateX, rotateY });
  }

  return (
    <motion.div
      {...motionProps}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      animate={{
        ...(typeof motionProps.animate === "object" ? motionProps.animate : {}),
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      style={{
        transformStyle: "preserve-3d",
        ...(motionProps.style ?? {}),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
