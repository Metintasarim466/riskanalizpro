"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600/15 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-12 shadow-2xl backdrop-blur-xl"
        >

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Sol */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-400">

                <Sparkles size={16} />

                Risk Analiz Pro v15.0.0

              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white">

                Finansal Geleceğinizi
                <br />

                Bugün Planlayın.

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

                Yapay zeka destekli analiz sistemi ile
                kredi uygunluğunuzu, finansal riskinizi
                ve banka ön değerlendirme sonuçlarını
                saniyeler içinde öğrenin.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-cyan-400"
                >
                  Hemen Başvur

                  <ArrowRight size={20} />

                </Link>

                <Link
                  href="https://wa.me/905432107058"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-green-500 bg-green-500/10 px-8 py-4 font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
                >

                  <MessageCircle size={20} />

                  WhatsApp Destek

                </Link>

              </div>

            </div>

            {/* Sağ */}

            <div className="grid gap-6">

              <Card
                value="25.000+"
                title="Tamamlanan Analiz"
              />

              <Card
                value="%98"
                title="Müşteri Memnuniyeti"
              />

              <Card
                value="27+"
                title="Banka Karşılaştırması"
              />

              <Card
                value="7/24"
                title="Online Destek"
              />

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="mt-4 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6"
              >

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    className="text-cyan-400"
                  />

                  <span className="font-bold text-cyan-400">

                    Güvenli Platform

                  </span>

                </div>

                <p className="mt-4 leading-8 text-slate-300">

                  KVKK uyumlu altyapımız sayesinde
                  tüm kişisel bilgileriniz güvenle
                  korunmaktadır.

                </p>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function Card({
  value,
  title,
}: {
  value: string;
  title: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >

      <div className="text-4xl font-black text-cyan-400">

        {value}

      </div>

      <div className="mt-2 text-slate-400">

        {title}

      </div>

    </motion.div>
  );
}