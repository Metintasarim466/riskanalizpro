"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Wallet,
  BadgeCheck,
} from "lucide-react";

export default function RiskScore() {
  return (
    <section className="bg-[#050b18] py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-8 lg:grid-cols-2">

        {/* Sol Taraf */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Risk Skoru Teknolojisi
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white">
            Finansal Gücünüzü
            <br />
            <span className="text-cyan-400">
              Tek Bir Skorla  
            </span>
            Görün
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-400">
            Risk Analiz, geliriniz, borç durumunuz, kredi geçmişiniz,
            ödeme alışkanlıklarınız ve finansal davranışlarınızı
            analiz ederek size özel bir finansal risk skoru oluşturur.
          </p>

          <div className="mt-10 space-y-5">

            <Item text="Kredi uygunluk analizi" />

            <Item text="Finansal risk değerlendirmesi" />

            <Item text="Banka onay olasılığı tahmini" />

            <Item text="Yapay zekâ destekli öneriler" />

          </div>

        </motion.div>

        {/* Sağ Taraf */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400">
                  Finansal Risk Skoru
                </p>

                <h3 className="mt-3 text-7xl font-black text-cyan-400">
                  92
                </h3>

              </div>

              <ShieldCheck
                size={60}
                className="text-cyan-400"
              />

            </div>

            <div className="mt-10 h-4 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "92%" }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="h-full rounded-full bg-cyan-400"
              />

            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <SmallCard
                icon={<TrendingUp />}
                title="Onay İhtimali"
                value="%94"
              />

              <SmallCard
                icon={<Wallet />}
                title="Finansal Sağlık"
                value="Çok İyi"
              />

              <SmallCard
                icon={<BadgeCheck />}
                title="Risk Seviyesi"
                value="Düşük"
              />

              <SmallCard
                icon={<ShieldCheck />}
                title="Güven Skoru"
                value="AAA"
              />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function Item({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <ShieldCheck className="text-cyan-400" />
      <span className="text-lg text-slate-300">
        {text}
      </span>
    </div>
  );
}

function SmallCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <div className="mb-4 text-cyan-400">
        {icon}
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}