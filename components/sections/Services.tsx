"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Landmark,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: BrainCircuit,
    title: "Yapay Zeka Risk Analizi",
    description:
      "Finansal durumunuzu saniyeler içinde analiz ederek risk skorunuzu oluşturur.",
  },
  {
    icon: Landmark,
    title: "Banka Karşılaştırması",
    description:
      "Birden fazla bankanın kredi uygunluk kriterlerini tek ekranda karşılaştırın.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Başvuru",
    description:
      "KVKK uyumlu altyapımız ile bilgileriniz güvenle korunur.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-900 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Hizmetlerimiz
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Size Neler Sunuyoruz?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Risk Analiz Pro, kredi başvurularınızı daha bilinçli
            yapmanız için gelişmiş analiz araçları sunar.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-white/10 bg-slate-800 p-8 transition hover:border-cyan-500/30"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>

                <Link
                  href="/basvuru"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Detaylı İncele

                  <ArrowRight size={18} />
                </Link>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}