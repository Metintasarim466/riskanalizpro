"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  BadgeCheck,
  Landmark,
  TrendingUp,
  Users,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  GlassCard,
  Section,
  SectionGlow,
  SectionHeader,
  SectionBadge,
} from "./shared";

const stats = [
  {
    icon: Users,
    value: 25000,
    suffix: "+",
    title: "Başvuru",
    description: "Platform üzerinden oluşturulan analiz",
  },
  {
    icon: BadgeCheck,
    value: 98,
    suffix: "%",
    title: "Başarı Oranı",
    description: "Doğru risk analizi doğruluğu",
  },
  {
    icon: TrendingUp,
    value: 81,
    suffix: "",
    title: "Ort. Risk Skoru",
    description: "Kullanıcı memnuniyet ortalaması",
  },
  {
    icon: Landmark,
    value: 25,
    suffix: "+",
    title: "Banka",
    description: "Desteklenen finans kuruluşu",
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "KVKK Uyumlu Altyapı" },
  { icon: LockKeyhole, label: "256-bit Şifreleme" },
  { icon: BadgeCheck, label: "BDDK Standartları" },
];

export default function Stats() {
  return (
    <Section>
      <SectionGlow className="left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge={
            <SectionBadge>
              Güvenilir Finansal Analiz
            </SectionBadge>
          }
          title="Rakamlarla"
          highlight="Risk Analiz Pro"
          description="Binlerce kullanıcı finansal risklerini banka başvurusu yapmadan önce analiz etti."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-5 backdrop-blur-xl"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <span
                key={item.label}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <Icon size={16} className="text-cyan-400" />
                {item.label}
              </span>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

function StatCard({
  item,
  index,
}: {
  item: (typeof stats)[0];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <GlassCard delay={index * 0.1} className="text-center sm:text-left">
      <div className="mb-5 inline-flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
        <Icon size={28} className="text-cyan-400" />
      </div>
      <p className="text-4xl font-black text-white lg:text-5xl">
        <CountUp end={item.value} duration={2} enableScrollSpy scrollSpyOnce />
        {item.suffix}
      </p>
      <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
    </GlassCard>
  );
}
