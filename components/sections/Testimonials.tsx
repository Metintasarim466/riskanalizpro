"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  CheckCircle2,
} from "lucide-react";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    city: "İstanbul",
    score: "94",
    comment:
      "Risk Analiz Pro sayesinde kredi başvurusu yapmadan önce durumumu öğrendim. Süreç çok hızlı ve anlaşılırdı.",
  },
  {
    name: "Ayşe Demir",
    city: "Ankara",
    score: "91",
    comment:
      "AI analiz sistemi gerçekten başarılı. Banka uygunluk oranlarını tek ekranda görmek büyük kolaylık sağladı.",
  },
  {
    name: "Mehmet Kaya",
    city: "İzmir",
    score: "96",
    comment:
      "Finansal raporlar oldukça detaylı. Kredi planlamamı yaparken çok faydasını gördüm.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-28">
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
            Müşteri Deneyimleri
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Kullanıcılarımız Ne Diyor?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Risk Analiz Pro ile finansal analiz yapan kullanıcılarımızın
            değerlendirmeleri.
          </p>
        </motion.div>

        {/* İstatistikler */}
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Stat value="25.000+" label="Analiz" />
          <Stat value="%98" label="Memnuniyet" />
          <Stat value="27+" label="Banka" />
          <Stat value="4.9/5" label="Ortalama Puan" />
        </div>

        {/* Kartlar */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <Quote
                size={42}
                className="text-cyan-400"
              />

              <div className="mt-6 flex">

                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-slate-300">
                "{item.comment}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {item.city}
                    </p>

                  </div>

                  <div className="rounded-xl bg-cyan-500/10 px-4 py-2 text-center">

                    <div className="text-lg font-bold text-cyan-400">
                      {item.score}
                    </div>

                    <div className="text-xs text-slate-400">
                      Risk Skoru
                    </div>

                  </div>

                </div>

                <div className="mt-5 flex items-center gap-2 text-emerald-400">

                  <CheckCircle2 size={18} />

                  <span className="text-sm">
                    Doğrulanmış Kullanıcı
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
      <div className="text-4xl font-black text-cyan-400">
        {value}
      </div>

      <div className="mt-2 text-slate-400">
        {label}
      </div>
    </div>
  );
}