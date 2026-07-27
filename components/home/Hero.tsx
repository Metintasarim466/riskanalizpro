"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const metrics = [
  {
    label: "Risk Skoru",
    value: "92",
    change: "+14%",
  },
  {
    label: "Onay Olasılığı",
    value: "%94",
    change: "+8%",
  },
  {
    label: "Varlık Sağlığı",
    value: "AAA",
    change: "Premium",
  },
];

const insights = [
  "Gelir ve borç dengesi güçlü",
  "Kredi profili düşük riskli",
  "3 uygun banka teklifi hazır",
];

const chartBars = [44, 58, 52, 76, 68, 86, 92];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,.22),transparent_34%),linear-gradient(135deg,#020617_0%,#07111f_42%,#020617_100%)] px-6 py-24 text-white sm:px-8 lg:py-32">
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.45, 0.75, 0.45],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.35, 0.65, 0.35],
          x: [0, -24, 0],
          y: [0, 18, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
              <Sparkles size={18} />
            </span>
            <span className="text-sm font-semibold tracking-wide text-cyan-100">
              Yapay zeka destekli finansal karar platformu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75, ease: "easeOut" }}
            className="mt-8 max-w-5xl text-5xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl"
          >
            Finansal geleceğinizi
            <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              kurumsal zeka ile yönetin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-9 text-slate-300 sm:text-xl"
          >
            Risk Analiz, gelir, borç, kredi geçmişi ve piyasa sinyallerini tek
            panelde değerlendirerek size özel risk skoru, banka uyumluluğu ve
            aksiyon önerileri üretir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.65 }}
            className="mt-11 flex flex-col gap-4 sm:flex-row"
          >
            <button className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-7 py-4 text-base font-black text-slate-950 shadow-[0_22px_70px_rgba(34,211,238,.28)] transition hover:-translate-y-1 hover:bg-cyan-300">
              Ücretsiz Analize Başla
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-4 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.09]">
              Platformu İncele
              <ChevronRight size={20} className="text-cyan-300" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.65 }}
            className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <TrustItem icon={<ShieldCheck size={18} />} text="KVKK uyumlu" />
            <TrustItem icon={<LockKeyhole size={18} />} text="Şifreli analiz" />
            <TrustItem icon={<BrainCircuit size={18} />} text="AI skor motoru" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 58, rotateX: 8 }}
          animate={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ delay: 0.28, duration: 0.85, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 -top-7 z-20 hidden rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-5 py-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-cyan-400/15 p-2 text-cyan-300">
                <TrendingUp size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-400">Canlı Skor</p>
                <p className="text-lg font-black text-white">+18.4%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 -left-5 z-20 hidden rounded-2xl border border-blue-300/20 bg-slate-950/70 px-5 py-4 shadow-2xl shadow-blue-950/40 backdrop-blur-xl md:block"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-blue-400/15 p-2 text-blue-300">
                <Landmark size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-400">Banka Eşleşmesi</p>
                <p className="text-lg font-black text-white">3 teklif</p>
              </div>
            </div>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_30px_120px_rgba(8,47,73,.46)] backdrop-blur-2xl">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-cyan-200">
                    Finansal Komuta Paneli
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    Risk Analiz AI
                  </h2>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-sm font-bold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Aktif
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.45 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <p className="text-xs text-slate-400">{metric.label}</p>
                    <div className="mt-3 flex items-end justify-between gap-3">
                      <span className="text-2xl font-black text-white">
                        {metric.value}
                      </span>
                      <span className="text-xs font-bold text-cyan-300">
                        {metric.change}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Skor gelişimi</p>
                      <p className="mt-1 text-xl font-black text-white">
                        Güçlü yükseliş trendi
                      </p>
                    </div>
                    <BarChart3 className="text-cyan-300" />
                  </div>

                  <div className="mt-8 flex h-44 items-end gap-3">
                    {chartBars.map((height, index) => (
                      <motion.div
                        key={height}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: 0.62 + index * 0.08,
                          duration: 0.7,
                          ease: "easeOut",
                        }}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 via-cyan-500 to-cyan-200 shadow-[0_0_28px_rgba(34,211,238,.22)]"
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
                      <WalletCards size={22} />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">AI önerileri</p>
                      <p className="font-black text-white">Hazır aksiyonlar</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {insights.map((insight, index) => (
                      <motion.div
                        key={insight}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.72 + index * 0.1 }}
                        className="flex items-start gap-3 rounded-2xl bg-white/[0.04] p-3 text-sm leading-6 text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-cyan-300"
                        />
                        {insight}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl">
      <span className="text-cyan-300">{icon}</span>
      {text}
    </div>
  );
}
