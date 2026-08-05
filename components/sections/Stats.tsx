"use client";

import { motion } from "framer-motion";
import {
  Users,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25.000+",
    label: "Mutlu Kullanıcı",
  },
  {
    icon: Landmark,
    value: "27+",
    label: "Banka",
  },
  {
    icon: TrendingUp,
    value: "%98",
    label: "Başarı Oranı",
  },
  {
    icon: ShieldCheck,
    value: "%100",
    label: "Güvenli Altyapı",
  },
];

export default function Stats() {
  return (
    <section className="relative -mt-12 z-20">
      <div className="mx-auto max-w-[1450px] px-8">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-cyan-500/10 bg-slate-900/95 p-8 shadow-xl backdrop-blur-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="text-4xl font-black text-white">

                  {item.value}

                </h3>

                <p className="mt-3 text-slate-400">

                  {item.label}

                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}