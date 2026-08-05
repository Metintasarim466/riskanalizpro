"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Building2,
  CheckCircle2,
} from "lucide-react";

const analysis = [
  {
    title: "Gelir Analizi",
    value: "Güçlü",
    color: "text-emerald-400",
  },
  {
    title: "Borç Analizi",
    value: "Kontrol Altında",
    color: "text-cyan-400",
  },
  {
    title: "Risk Durumu",
    value: "Düşük",
    color: "text-green-400",
  },
  {
    title: "Kredi Uygunluğu",
    value: "%91",
    color: "text-blue-400",
  },
];

const banks = [
  {
    bank: "Akbank",
    rate: "%94",
  },
  {
    bank: "Garanti BBVA",
    rate: "%92",
  },
  {
    bank: "Yapı Kredi",
    rate: "%90",
  },
  {
    bank: "QNB",
    rate: "%88",
  },
];

export default function AIAnalysis() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">

            Yapay Zeka Motoru

          </span>

          <h2 className="mt-6 text-5xl font-black text-white">

            AI Finans Analizi

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

            Yapay zekamız gelir, gider, kredi geçmişi ve finansal
            alışkanlıklarınızı analiz ederek en doğru sonucu üretir.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* SOL */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="mb-8 flex items-center gap-3">

              <BrainCircuit
                className="text-cyan-400"
                size={34}
              />

              <h3 className="text-2xl font-bold text-white">

                AI Analiz Sonucu

              </h3>

            </div>

            <div className="space-y-5">

              {analysis.map((item) => (

                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-5"
                >

                  <span className="text-slate-300">

                    {item.title}

                  </span>

                  <span className={`font-bold ${item.color}`}>

                    {item.value}

                  </span>

                </div>

              ))}

            </div>

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <div className="flex items-center gap-3">

                <Sparkles className="text-cyan-400" />

                <span className="font-bold text-cyan-400">

                  AI Yorumu

                </span>

              </div>

              <p className="mt-4 leading-8 text-slate-300">

                Finansal profiliniz güçlü görünüyor.

                Gelir seviyeniz ve mevcut borç oranınız,
                kredi kullanımı açısından olumlu değerlendirilmektedir.

                Kredi başvurusu yapmanız halinde
                ön onay alma ihtimaliniz yüksektir.

              </p>

            </div>

          </motion.div>

          {/* SAĞ */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="mb-8 flex items-center gap-3">

              <Building2
                size={34}
                className="text-cyan-400"
              />

              <h3 className="text-2xl font-bold text-white">

                Banka Ön Onay Tahmini

              </h3>

            </div>

            <div className="space-y-5">

              {banks.map((bank) => (

                <div
                  key={bank.bank}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
                >

                  <div className="mb-3 flex items-center justify-between">

                    <span className="font-semibold text-white">

                      {bank.bank}

                    </span>

                    <span className="font-bold text-cyan-400">

                      {bank.rate}

                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-800">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: bank.rate }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className="h-full rounded-full bg-cyan-400"
                    />

                  </div>

                </div>

              ))}

            </div>

            <div className="mt-8 grid gap-5">

              <Info
                icon={<TrendingUp className="text-green-400" />}
                title="Tahmini Başarı"
                value="%91"
              />

              <Info
                icon={<ShieldCheck className="text-cyan-400" />}
                title="Risk Durumu"
                value="Düşük"
              />

              <Info
                icon={<CheckCircle2 className="text-emerald-400" />}
                title="AI Güven Skoru"
                value="%96"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-5">

      <div className="flex items-center gap-3">

        {icon}

        <span className="text-slate-300">

          {title}

        </span>

      </div>

      <span className="font-bold text-white">

        {value}

      </span>

    </div>
  );
}