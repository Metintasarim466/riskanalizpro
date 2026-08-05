"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import HeroProgress from "./HeroProgress";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_0_60px_rgba(6,182,212,.18)]">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-400 text-sm uppercase tracking-wider">

              AI Risk Score

            </p>

            <h2 className="mt-2 text-7xl font-black text-cyan-400">

              86

            </h2>

            <p className="mt-2 text-slate-500">

              Finansal Güven Seviyesi

            </p>

          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10">

            <TrendingUp
              size={42}
              className="text-cyan-400"
            />

          </div>

        </div>

        <div className="mt-12 space-y-7">

          <HeroProgress
            title="Gelir Durumu"
            value={92}
          />

          <HeroProgress
            title="Borç Oranı"
            value={38}
          />

          <HeroProgress
            title="Kredi Uygunluğu"
            value={89}
          />

          <HeroProgress
            title="Finansal Güven"
            value={94}
          />

        </div>

        <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={22}
              className="text-cyan-400"
            />

            <span className="font-bold text-cyan-400">

              AI Finans Yorumu

            </span>

          </div>

          <p className="mt-4 leading-8 text-slate-300">

            Finansal profiliniz güçlü görünüyor.
            Gelir ve mevcut borç oranınıza göre
            kredi alma olasılığınız yüksektir.
            Başvuru öncesinde risk skorunuzu
            daha da yükseltmek için öneriler
            sunulacaktır.

          </p>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-slate-800/70 p-5 text-center">

            <h4 className="text-3xl font-black text-cyan-400">

              %94

            </h4>

            <p className="mt-2 text-sm text-slate-400">

              Güven Skoru

            </p>

          </div>

          <div className="rounded-2xl bg-slate-800/70 p-5 text-center">

            <h4 className="text-3xl font-black text-cyan-400">

              27+

            </h4>

            <p className="mt-2 text-sm text-slate-400">

              Banka Analizi

            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}