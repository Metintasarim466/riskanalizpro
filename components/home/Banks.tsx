"use client";

import { motion } from "framer-motion";

const banks = [
  "AKBANK",
  "GARANTİ BBVA",
  "YAPI KREDİ",
  "İŞ BANKASI",
  "QNB",
  "DENİZBANK",
  "VAKIFBANK",
  "HALKBANK",
];

export default function Banks() {
  return (
    <section className="border-y border-white/10 bg-[#07101d] py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-12 text-center text-sm uppercase tracking-[6px] text-cyan-400"
        >
          Desteklenen Bankalar
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8"
        >
          {banks.map((bank) => (
            <motion.div
              key={bank}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition"
            >
              <span className="text-sm font-bold tracking-wide text-gray-300">
                {bank}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}