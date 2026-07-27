"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BrainCircuit,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050b18] py-32 text-white">
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-16 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[140px]"
      />

      {/* Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="overflow-hidden rounded-[38px] border border-cyan-400/20 bg-white/[0.05] p-px shadow-[0_35px_120px_rgba(34,211,238,.18)]"
        >
          <div className="rounded-[36px] border border-white/10 bg-slate-950/75 px-8 py-20 backdrop-blur-3xl lg:px-20">

            {/* Badge */}

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200">
                <Sparkles size={18} />
                Premium AI Destekli Finans Platformu
              </div>
            </div>

            {/* Title */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .15 }}
              className="mx-auto mt-10 max-w-4xl bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-center text-5xl font-black leading-tight text-transparent lg:text-6xl"
            >
              Finansal Riskinizi
              <br />
              Bugün Öğrenin
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .3 }}
              viewport={{ once: true }}
              className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-slate-300"
            >
              Risk Analiz, yapay zekâ destekli finans motoru ile
              risk skorunuzu hesaplar, banka uyumluluğunuzu analiz eder
              ve size özel finansal öneriler sunar.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .45 }}
              viewport={{ once: true }}
              className="mt-14 flex flex-col justify-center gap-5 sm:flex-row"
            >
              <Link
                href="/risk-analizi"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-5 text-lg font-black text-slate-950 transition hover:scale-105 hover:shadow-[0_20px_60px_rgba(34,211,238,.45)]"
              >
                Analize Başla

                <ArrowRight
                  size={22}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/5 px-10 py-5 text-lg font-bold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
              >
                Daha Fazla Bilgi
              </Link>
            </motion.div>

            {/* Bottom Features */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .65 }}
              viewport={{ once: true }}
              className="mt-20 grid gap-6 md:grid-cols-3"
            >
              <Feature
                icon={ShieldCheck}
                title="256-bit Güvenlik"
                text="KVKK uyumlu altyapı ile tüm verileriniz korunur."
              />

              <Feature
                icon={BrainCircuit}
                title="AI Risk Motoru"
                text="Yapay zekâ destekli gelişmiş finansal analiz sistemi."
              />

              <Feature
                icon={Sparkles}
                title="Gerçek Zamanlı Sonuç"
                text="Saniyeler içerisinde risk skorunuzu görüntüleyin."
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        <Icon size={30} />
      </div>

      <h3 className="text-xl font-black text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {text}
      </p>
    </motion.div>
  );
}