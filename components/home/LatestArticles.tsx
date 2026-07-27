"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock3,
} from "lucide-react";

const articles = [
  {
    category: "Kredi Notu",
    title: "Kredi Notunuzu 30 Günde Nasıl Yükseltebilirsiniz?",
    date: "15 Ocak 2026",
    time: "6 dk",
  },
  {
    category: "Finans",
    title: "2026'da Kredi Başvurusu Yapmadan Önce Bilmeniz Gerekenler",
    date: "11 Ocak 2026",
    time: "8 dk",
  },
  {
    category: "Risk Analizi",
    title: "Risk Skoru Nedir? Finansal Geleceğinizi Nasıl Etkiler?",
    date: "5 Ocak 2026",
    time: "7 dk",
  },
];

export default function LatestArticles() {
  return (
    <section className="bg-[#081321] py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Blog
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Finans Dünyasından
            <span className="text-cyan-400"> Güncel Yazılar</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Finansal okuryazarlığınızı artıracak rehberler, kredi notu
            ipuçları ve bankacılık dünyasındaki gelişmeleri takip edin.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {articles.map((article, index) => (

            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <div className="h-56 bg-gradient-to-br from-cyan-600 via-sky-600 to-indigo-700" />

              <div className="p-8">

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                  {article.category}
                </span>

                <h3 className="mt-6 text-2xl font-bold leading-9 text-white">
                  {article.title}
                </h3>

                <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {article.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {article.time}
                  </div>

                </div>

                <button className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-4">
                  Devamını Oku
                  <ArrowRight size={18} />
                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}