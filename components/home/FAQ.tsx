"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  ChevronDown,
  HelpCircle,
  MessageCircleMore,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Risk Analiz nedir?",
    answer:
      "Risk Analiz, finansal verilerinizi gelişmiş algoritmalar ile analiz ederek kişisel risk profilinizi oluşturan ve size en uygun finansal çözümleri sunan dijital analiz platformudur.",
  },
  {
    question: "Risk skoru nasıl hesaplanır?",
    answer:
      "Gelir, gider, kredi notu, borç durumu, ödeme alışkanlıkları ve onlarca finansal parametre yapay zeka tarafından birlikte değerlendirilerek hesaplanır.",
  },
  {
    question: "Kredi notumu etkiler mi?",
    answer:
      "Hayır. Platformumuz yalnızca analiz yapar. Risk Analiz üzerinden gerçekleştirilen hesaplamalar kredi notunuzu etkilemez.",
  },
  {
    question: "Verilerim güvende mi?",
    answer:
      "Tüm bilgiler KVKK uyumlu altyapıda, modern şifreleme standartları ile korunmaktadır.",
  },
  {
    question: "Analiz ücretli mi?",
    answer:
      "Sunulan hizmete göre farklı paketler bulunmaktadır. Uzman destekli analizlerde ücretlendirme başvuru detaylarına göre belirlenmektedir.",
  },
  {
    question: "Hangi bankalar destekleniyor?",
    answer:
      "Platform birçok banka ve finans kuruluşuna uygun analiz üretebilmektedir. Desteklenen kurumlar sürekli güncellenmektedir.",
  },
  {
    question: "Analiz ne kadar sürüyor?",
    answer:
      "Temel analizler birkaç saniye içerisinde tamamlanır. Uzman destekli değerlendirmeler ise çok daha kapsamlı şekilde hazırlanır.",
  },
  {
    question: "Sonuçlar ne kadar doğrudur?",
    answer:
      "Yapay zeka modeli binlerce finansal veri üzerinden eğitilmiştir. Sonuçlar yüksek doğruluk oranıyla tahmini değerlendirme sunar.",
  },
];

const trustStats = [
  {
    value: "150.000+",
    label: "Risk Analizi",
  },
  {
    value: "24+",
    label: "Anlaşmalı Banka",
  },
  {
    value: "98%",
    label: "Memnuniyet",
  },
  {
    value: "4.9/5",
    label: "Ortalama Puan",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative isolate overflow-hidden bg-[#050b18] py-28 text-white sm:py-32">

      {/* Glow */}

      <motion.div
        aria-hidden
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-10 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[170px]"
      />

      <motion.div
        aria-hidden
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-10 -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,233,.13),transparent_32%),linear-gradient(180deg,#050b18_0%,#081321_50%,#050b18_100%)]"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:78px_78px] opacity-20"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-cyan-100 backdrop-blur-xl">

            <HelpCircle
              size={18}
              className="text-cyan-300"
            />

            Sık Sorulan Sorular

          </div>

          <h2 className="mt-8 text-4xl font-black sm:text-5xl lg:text-6xl">

            Merak Ettikleriniz

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">

            Risk Analiz hakkında en çok merak edilen soruların cevaplarını burada bulabilirsiniz.

          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_340px]">
                    <div className="space-y-5">

            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-2xl transition hover:border-cyan-300/30 hover:shadow-[0_24px_70px_rgba(8,145,178,.16)]"
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 p-6 text-left"
                >
                  <div className="flex items-center gap-4">

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                      <HelpCircle size={22} />
                    </span>

                    <span className="text-lg font-black text-white">
                      {faq.question}
                    </span>

                  </div>

                  <motion.span
                    animate={{
                      rotate: open === index ? 180 : 0,
                    }}
                    transition={{
                      duration: .3,
                    }}
                    className="text-cyan-300"
                  >
                    <ChevronDown size={24} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>

                  {open === index && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        filter: "blur(8px)",
                      }}
                      transition={{
                        duration: .35,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-6 pb-6 pt-5 leading-8 text-slate-400">
                        {faq.answer}
                      </div>
                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            ))}

          </div>

          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.05] p-6 backdrop-blur-2xl"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
              <BrainCircuit size={34} />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              AI Destek
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Yapay zeka destekli analiz sistemimiz 7/24 çalışır ve finansal durumunuzu saniyeler içinde değerlendirir.
            </p>

            <div className="mt-8 space-y-4">

              {trustStats.map((item) => (

                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="text-slate-400">
                    {item.label}
                  </span>

                  <span className="font-black text-cyan-300">
                    {item.value}
                  </span>

                </div>

              ))}

            </div>

          </motion.aside>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 via-sky-400/10 to-blue-500/10 p-10 text-center backdrop-blur-2xl"
        >

          <MessageCircleMore
            className="mx-auto text-cyan-300"
            size={42}
          />

          <h3 className="mt-6 text-3xl font-black">
            Sorunu Bulamadın?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Uzman ekibimiz sana yardımcı olmaktan memnuniyet duyar.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .96,
            }}
            className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-8 py-4 font-black text-slate-950 shadow-[0_20px_60px_rgba(34,211,238,.25)]"
          >
            İletişime Geç
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}
