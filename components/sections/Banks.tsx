"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const banks = [
  {
    name: "Ziraat Bankası",
    approval: 94,
    interest: "%2.99",
    digital: true,
    color: "bg-red-500",
  },
  {
    name: "VakıfBank",
    approval: 92,
    interest: "%3.05",
    digital: true,
    color: "bg-yellow-500",
  },
  {
    name: "Halkbank",
    approval: 90,
    interest: "%3.10",
    digital: true,
    color: "bg-blue-500",
  },
  {
    name: "Akbank",
    approval: 91,
    interest: "%3.15",
    digital: true,
    color: "bg-red-600",
  },
  {
    name: "Garanti BBVA",
    approval: 93,
    interest: "%3.08",
    digital: true,
    color: "bg-green-500",
  },
  {
    name: "Yapı Kredi",
    approval: 89,
    interest: "%3.20",
    digital: true,
    color: "bg-indigo-500",
  },
  {
    name: "İş Bankası",
    approval: 90,
    interest: "%3.18",
    digital: true,
    color: "bg-sky-500",
  },
  {
    name: "QNB",
    approval: 88,
    interest: "%3.25",
    digital: true,
    color: "bg-purple-500",
  },
];

export default function Banks() {
  return (
    <section className="relative bg-slate-950 py-28 overflow-hidden">

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[160px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">

            Banka Karşılaştırma

          </span>

          <h2 className="mt-6 text-5xl font-black text-white">

            Çalıştığımız Bankalar

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">

            AI sistemi bankaların kredi politikalarını analiz ederek
            size en uygun seçenekleri önerir.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {banks.map((bank, index) => (

            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`h-14 w-14 rounded-2xl ${bank.color} flex items-center justify-center`}
                >

                  <Landmark className="text-white" />

                </div>

                <div>

                  <h3 className="font-bold text-white">

                    {bank.name}

                  </h3>

                  <p className="text-sm text-slate-400">

                    Dijital Başvuru

                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-4">

                <Row
                  title="Ön Onay"
                  value={`%${bank.approval}`}
                />

                <Row
                  title="Faiz"
                  value={bank.interest}
                />

                <Row
                  title="Online"
                  value={
                    bank.digital ? "Var" : "Yok"
                  }
                />

              </div>

              <div className="mt-8 h-3 rounded-full bg-slate-800">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${bank.approval}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-cyan-400"
                />

              </div>

              <button
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-400"
              >

                İncele

                <ArrowRight size={18} />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

function Row({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-slate-400">
        {title}
      </span>

      <span className="flex items-center gap-2 font-semibold text-white">

        <BadgeCheck
          size={16}
          className="text-cyan-400"
        />

        {value}

      </span>

    </div>
  );
}