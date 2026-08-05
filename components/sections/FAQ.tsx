"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Risk Analiz Pro nedir?",
    answer:
      "Risk Analiz Pro, finansal verilerinizi analiz ederek kredi uygunluğunuzu, risk skorunuzu ve banka ön değerlendirme sonuçlarını tahmini olarak sunan yapay zeka destekli bir finans platformudur.",
  },
  {
    question: "Risk skorumu nasıl hesaplıyorsunuz?",
    answer:
      "Gelir, aylık borç, kredi talebi, çalışma durumu ve konut bilgileri gibi birçok finansal kriter birlikte değerlendirilerek tahmini bir risk skoru oluşturulur.",
  },
  {
    question: "Sonuçlar bankalar tarafından garanti edilir mi?",
    answer:
      "Hayır. Sistem yalnızca ön analiz ve tahmini değerlendirme sunar. Nihai karar ilgili banka tarafından verilir.",
  },
  {
    question: "Bilgilerim güvende mi?",
    answer:
      "Evet. Tüm veriler SSL ile şifrelenir ve KVKK kapsamında güvenli şekilde korunur.",
  },
  {
    question: "Analiz yapmak ücretli mi?",
    answer:
      "Hayır. Temel finansal risk analizi ücretsizdir. İlerleyen sürümlerde gelişmiş rapor paketleri sunulacaktır.",
  },
  {
    question: "Sonuçlar ne kadar sürede oluşur?",
    answer:
      "Analiz işlemi birkaç saniye içerisinde tamamlanır ve sonuçlar anında ekranda görüntülenir.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative bg-slate-950 py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Sık Sorulan Sorular
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Merak Ettikleriniz
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Risk Analiz Pro hakkında en çok sorulan sorular ve cevapları.
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    active === index
                      ? "rotate-180 text-cyan-400"
                      : "text-slate-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="border-t border-white/10 px-6 py-6 text-slate-300 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}