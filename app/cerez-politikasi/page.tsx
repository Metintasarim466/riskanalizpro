import type { Metadata } from "next";
import SectionHero from "@/components/ui/SectionHero";

export const metadata: Metadata = {
  title: "Çerez Politikası | Risk Analiz",
  description:
    "Risk Analiz çerez politikası ve çerez kullanım esasları.",
};

const cookies = [
  {
    title: "Zorunlu Çerezler",
    text: "Web sitesinin güvenli ve doğru şekilde çalışmasını sağlayan temel çerezlerdir.",
  },
  {
    title: "Performans Çerezleri",
    text: "Site performansını analiz etmek ve kullanıcı deneyimini geliştirmek amacıyla kullanılır.",
  },
  {
    title: "Analitik Çerezler",
    text: "Sayfa görüntüleme, ziyaretçi davranışları ve kullanım istatistiklerinin anonim olarak analiz edilmesini sağlar.",
  },
  {
    title: "Tercih Çerezleri",
    text: "Dil seçimi ve kullanıcı tercihlerini hatırlayarak daha kişiselleştirilmiş bir deneyim sunar.",
  },
  {
    title: "Çerez Yönetimi",
    text: "Tarayıcı ayarlarınız üzerinden çerezleri kabul edebilir, reddedebilir veya silebilirsiniz.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#030712] text-white">
      <SectionHero
        badge="Çerez Politikası"
        title="Çerez Kullanımı"
        description="Risk Analiz, web sitesinin güvenli ve verimli çalışması için çerezlerden yararlanır."
      />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-8">
          <div className="space-y-8">
            {cookies.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-10"
              >
                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}