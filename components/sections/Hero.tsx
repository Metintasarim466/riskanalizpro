"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { GridPattern, SectionGlow } from "./shared";

const metrics = [
  { label: "Risk Skoru", value: "87", trend: "+12" },
  { label: "Banka Uyumu", value: "94%", trend: "Yüksek" },
  { label: "AI Güven", value: "98%", trend: "Premium" },
];

const chartBars = [42, 58, 51, 72, 68, 85, 92];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#030712] pt-28 pb-20 lg:pt-32">
      <GridPattern className="opacity-40" />
      <SectionGlow className="left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2" />
      <SectionGlow
        color="blue"
        className="right-0 top-1/3 h-[400px] w-[400px] translate-x-1/3"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
            <Sparkles size={16} />
            Yapay Zeka Destekli Finans Platformu
          </div>

          <h1 className="mt-8 text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Kredi Riskinizi{" "}
            <span className="text-gradient">Başvurmadan</span> Önce Öğrenin
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Risk Analiz Pro, banka başvurusu yapmadan önce finansal durumunuzu
            analiz eder, yapay zekâ destekli risk skorunuzu oluşturur ve size
            en uygun bankaları önerir.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/basvuru"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
            >
              Ücretsiz Analiz Başlat
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              Risk Skoru Hesapla
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              KVKK Uyumlu
            </span>
            <span className="flex items-center gap-2">
              <BrainCircuit size={16} className="text-cyan-400" />
              AI Destekli
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp size={16} className="text-blue-400" />
              25+ Banka
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20 blur-2xl" />

          <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-2xl glow-cyan">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Canlı AI Dashboard
                </p>
                <p className="text-lg font-black text-white">Risk Analiz Pro</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Aktif
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl"
                >
                  <p className="text-[10px] text-slate-500">{m.label}</p>
                  <p className="text-xl font-black text-white">{m.value}</p>
                  <p className="text-[10px] font-semibold text-cyan-400">
                    {m.trend}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>Haftalık Risk Trendi</span>
                <span className="font-semibold text-emerald-400">+24%</span>
              </div>
              <div className="flex h-24 items-end gap-2">
                {chartBars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500/40 to-cyan-400"
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3">
              <BrainCircuit size={20} className="shrink-0 text-cyan-400" />
              <p className="text-xs leading-5 text-slate-300">
                AI önerisi: Kredi kartı limit kullanımını %30 altına düşürerek
                skorunuzu 8 puan artırabilirsiniz.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
