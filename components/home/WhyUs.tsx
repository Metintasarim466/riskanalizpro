"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Landmark,
  Clock3,
  LineChart,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Yapay Zekâ Destekli Analiz",
    description:
      "Gelişmiş algoritmalar finansal verilerinizi analiz ederek daha doğru sonuçlar üretir.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir Risk Skoru",
    description:
      "Finansal durumunuzu objektif kriterlerle değerlendirerek kapsamlı risk skoru sunar.",
  },
  {
    icon: Landmark,
    title: "Banka Karşılaştırmaları",
    description:
      "Farklı bankaların tekliflerini tek ekranda karşılaştırabilirsiniz.",
  },
  {
    icon: Clock3,
    title: "Hızlı Sonuç",
    description:
      "Analiziniz saniyeler içerisinde tamamlanır ve anında görüntülenir.",
  },
  {
    icon: LineChart,
    title: "Finansal Gelişim Takibi",
    description:
      "Risk skorunuzdaki değişimleri zaman içinde takip edin.",
  },
  {
    icon: Lock,
    title: "KVKK Uyumlu Güvenlik",
    description:
      "Tüm verileriniz modern güvenlik standartlarıyla korunur.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#081321] py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Neden Risk Analiz?
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Finansal Geleceğinizi
            <span className="text-cyan-400"> Güvenle Planlayın</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Risk Analiz; gelişmiş teknoloji, kullanıcı odaklı yaklaşım
            ve güvenilir analiz sistemiyle finansal kararlarınızı
            desteklemek için tasarlanmıştır.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,.15)] transition-all"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={34} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}