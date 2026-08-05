"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import HeroInfo from "./HeroInfo";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">

        <Sparkles
          size={16}
          className="text-cyan-400"
        />

        <span className="text-sm font-semibold text-cyan-400">
          Yapay Zeka Destekli Finans Platformu
        </span>

      </div>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

        Kredi Başvurusu

        <br />

        Yapmadan Önce

        <span className="mt-3 block text-cyan-400">
          Riskinizi Analiz Edin
        </span>

      </h1>

      <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">

        Risk Analiz Pro; gelir, kredi geçmişi ve finansal
        verilerinizi yapay zekâ ile değerlendirerek
        saniyeler içerisinde risk skorunuzu oluşturur.

      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <Link
          href="/basvuru"
          className="rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-cyan-400"
        >
          Ücretsiz Analiz Yap
        </Link>

        <Link
          href="#services"
          className="flex items-center gap-2 rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-cyan-400"
        >
          Nasıl Çalışıyor?

          <ArrowRight size={18} />

        </Link>

      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">

        <HeroInfo
          icon={<ShieldCheck className="text-cyan-400" />}
          title="KVKK"
          subtitle="Güvenli Altyapı"
        />

        <HeroInfo
          icon={<BrainCircuit className="text-cyan-400" />}
          title="AI"
          subtitle="Akıllı Analiz"
        />

        <HeroInfo
          icon={<Landmark className="text-cyan-400" />}
          title="27+"
          subtitle="Banka"
        />

      </div>

    </motion.div>
  );
}