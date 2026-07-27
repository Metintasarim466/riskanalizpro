"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Banknote,
  BrainCircuit,
  Building2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Gauge,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { LucideIcon } from "lucide-react";

const summaryItems = [
  {
    icon: TrendingUp,
    label: "Gelir",
    value: "82.400 ₺",
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
  {
    icon: WalletCards,
    label: "Gider",
    value: "34.800 ₺",
    color: "text-orange-300",
    bg: "bg-orange-400/10",
  },
  {
    icon: CreditCard,
    label: "Borç",
    value: "145.000 ₺",
    color: "text-red-300",
    bg: "bg-red-400/10",
  },
];

const bankCompatibility = [
  { name: "Ziraat", value: 96 },
  { name: "İş Bankası", value: 94 },
  { name: "Garanti", value: 91 },
  { name: "Akbank", value: 90 },
];

const chartData = [
  { day: "Pzt", risk: 68 },
  { day: "Sal", risk: 72 },
  { day: "Çar", risk: 76 },
  { day: "Per", risk: 82 },
  { day: "Cum", risk: 86 },
  { day: "Cmt", risk: 89 },
  { day: "Paz", risk: 92 },
];

const floatingCards = [
  {
    icon: BrainCircuit,
    title: "AI Motoru",
    value: "Aktif",
    detail: "Live",
  },
  {
    icon: ShieldCheck,
    title: "Finansal Sağlık",
    value: "AAA",
    detail: "Premium",
  },
  {
    icon: Building2,
    title: "Banka Önerisi",
    value: "3 teklif hazır",
    detail: "Uygun",
  },
];

export default function DashboardPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050b18] py-28 text-white sm:py-32">
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.32, 0.64, 0.32],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-20 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -28, 0], y: [0, 18, 0] }}
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
            <Gauge size={18} className="text-cyan-300" />
            Premium Finans Paneli
          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Yapay Zeka Destekli Finans Paneli
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Finansal verilerinizi tek panel üzerinden analiz edin, banka
            uyumluluğunuzu görüntüleyin ve risk skorunuzu gerçek zamanlı takip
            edin.
          </p>
        </motion.header>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-300/24 via-white/10 to-blue-500/18 p-px shadow-[0_34px_120px_rgba(8,47,73,.36)]"
          >
            <div className="rounded-[1.95rem] border border-white/10 bg-slate-950/72 p-5 backdrop-blur-2xl sm:p-7">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-bold text-cyan-300">
                    Risk Analiz Komuta Merkezi
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Canlı Finansal Görünüm
                  </h3>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Veri akışı aktif
                </div>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-[300px_1fr]">
                <RiskScoreCard />

                <div className="grid gap-5">
                  <FinancialSummary />
                  <BankCompatibility />
                </div>
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_320px]">
                <WeeklyRiskChart />
                <RecentAnalysis />
              </div>
            </div>
          </motion.div>

          <aside className="space-y-5">
            {floatingCards.map((card, index) => (
              <FloatingInfoCard key={card.title} card={card} index={index} />
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

function RiskScoreCard() {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const score = 92;
  const offset = circumference - (score / 100) * circumference;

  return (
    <GlassPanel className="flex min-h-[330px] flex-col items-center justify-center text-center">
      <p className="text-sm font-bold text-slate-400">Risk Score</p>

      <div className="relative mt-7 h-44 w-44">
        <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="rgba(255,255,255,.09)"
            strokeWidth="16"
            fill="none"
          />
          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            stroke="url(#riskGradient)"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.45, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient id="riskGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="55%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-white"
          >
            92
          </motion.span>
          <span className="mt-1 text-sm font-bold text-cyan-300">
            Düşük Risk
          </span>
        </div>
      </div>

      <p className="mt-6 max-w-56 text-sm leading-6 text-slate-400">
        Profiliniz güçlü ödeme disiplini ve sağlıklı gelir dengesi gösteriyor.
      </p>
    </GlassPanel>
  );
}

function FinancialSummary() {
  return (
    <GlassPanel>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-cyan-300">
            Financial Summary
          </p>
          <h4 className="mt-1 text-xl font-black text-white">
            Aylık finansal özet
          </h4>
        </div>
        <CircleDollarSign className="text-cyan-300" size={24} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {summaryItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
              >
                <Icon size={21} />
              </div>
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className={`mt-2 text-xl font-black ${item.color}`}>
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </GlassPanel>
  );
}

function BankCompatibility() {
  return (
    <GlassPanel>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-cyan-300">
            Bank Compatibility
          </p>
          <h4 className="mt-1 text-xl font-black text-white">
            Banka uyumluluğu
          </h4>
        </div>
        <Building2 className="text-cyan-300" size={24} />
      </div>

      <div className="space-y-4">
        {bankCompatibility.map((bank, index) => (
          <div key={bank.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-bold text-slate-300">{bank.name}</span>
              <span className="font-black text-cyan-300">%{bank.value}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${bank.value}%` }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.9,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_24px_rgba(34,211,238,.35)]"
              />
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}

function WeeklyRiskChart() {
  return (
    <GlassPanel className="min-h-[310px]">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-cyan-300">
            Weekly Risk Chart
          </p>
          <h4 className="mt-1 text-xl font-black text-white">
            7 günlük risk trendi
          </h4>
        </div>
        <Banknote className="text-cyan-300" size={24} />
      </div>

      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ left: -24, right: 8 }}>
            <defs>
              <linearGradient id="riskArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.55} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              domain={[60, 100]}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(2, 6, 23, .92)",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "16px",
                color: "#fff",
              }}
              cursor={{ stroke: "rgba(34,211,238,.22)", strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="risk"
              stroke="#22d3ee"
              strokeWidth={3}
              fill="url(#riskArea)"
              isAnimationActive
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassPanel>
  );
}

function RecentAnalysis() {
  return (
    <GlassPanel className="min-h-[310px]">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-cyan-300">
            Recent AI Analysis
          </p>
          <h4 className="mt-1 text-xl font-black text-white">
            Son analiz durumu
          </h4>
        </div>
        <Sparkles className="text-cyan-300" size={24} />
      </div>

      <div className="rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1.5 text-sm font-black text-emerald-300">
          <BadgeCheck size={16} />
          Son analiz başarılı
        </div>

        <div className="mt-6 space-y-4">
          <AnalysisRow label="Tarih" value="Bugün, 14:32" />
          <AnalysisRow label="Risk seviyesi" value="Düşük Risk" highlight />
          <AnalysisRow label="Banka uyumu" value="Yüksek" />
          <AnalysisRow label="Öneri" value="3 teklif hazır" />
        </div>
      </div>
    </GlassPanel>
  );
}

function FloatingInfoCard({
  card,
  index,
}: {
  card: {
    icon: LucideIcon;
    title: string;
    value: string;
    detail: string;
  };
  index: number;
}) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, x: 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        opacity: { delay: index * 0.12, duration: 0.55 },
        x: { delay: index * 0.12, duration: 0.55 },
        y: {
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cyan-300/24 via-white/10 to-blue-500/18 p-px shadow-[0_24px_80px_rgba(8,47,73,.24)]"
    >
      <div className="rounded-[1.7rem] border border-white/10 bg-slate-950/72 p-6 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-5">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
            <Icon size={28} />
          </span>

          <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">
            {card.detail}
          </span>
        </div>

        <p className="mt-6 text-sm font-bold text-slate-400">{card.title}</p>
        <h3 className="mt-2 text-2xl font-black text-white">{card.value}</h3>
      </div>
    </motion.article>
  );
}

function AnalysisRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm text-slate-400">{label}</span>
      <span
        className={`text-sm font-black ${
          highlight ? "text-emerald-300" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function GlassPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
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
