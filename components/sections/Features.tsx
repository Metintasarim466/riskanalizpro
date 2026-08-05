"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  BadgeCheck,
  BarChart3,
  Clock3,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Yapay Zeka Analizi",
    description:
      "Gelişmiş AI algoritmaları finansal durumunuzu saniyeler içinde analiz eder.",
  },
  {
    icon: BadgeCheck,
    title: "Yüksek Doğruluk",
    description:
      "Çoklu analiz sistemi sayesinde daha güvenilir sonuçlar elde edilir.",
  },
  {
    icon: BarChart3,
    title: "Risk Skoru",
    description:
      "Finansal profiliniz detaylı olarak değerlendirilir ve puanlanır.",
  },
  {
    icon: ShieldCheck,
    title: "KVKK Uyumlu",
    description:
      "Tüm bilgileriniz güvenli altyapımızda korunur.",
  },
  {
    icon: Clock3,
    title: "Anında Sonuç",
    description:
      "Dakikalar değil saniyeler içerisinde analiz sonucu alın.",
  },
  {
    icon: Sparkles,
    title: "Modern Teknoloji",
    description:
      "Yeni nesil finans teknolojileri ile geliştirilmiştir.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#020617] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Neden Risk Analiz?
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Güçlü Özellikler
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Yapay zekâ destekli analiz motorumuz sayesinde
            finansal durumunuzu daha doğru değerlendirin.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-white/10 bg-slate-900 p-8 transition-all hover:border-cyan-500/30"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon
                    className="text-cyan-400"
                    size={30}
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-400">

                  {feature.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}