import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Eye,
  ArrowRight,
  BarChart3,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda | Risk Analiz",
  description:
    "Risk Analiz; finansal analiz, risk skoru ve kredi uygunluğu konusunda kullanıcılarına dijital çözümler sunan finans platformudur.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Güven",
    text: "Kullanıcı bilgilerinin gizliliğini ve güvenliğini ön planda tutuyoruz.",
  },
  {
    icon: Target,
    title: "Doğruluk",
    text: "Finansal değerlendirmelerde şeffaf ve veri odaklı analizler sunuyoruz.",
  },
  {
    icon: Eye,
    title: "Şeffaflık",
    text: "Süreçlerimizi açık ve anlaşılır şekilde kullanıcılarımızla paylaşıyoruz.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#030712] text-white">
      {/* Hero */}
      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Hakkımızda
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Finansal Kararlarınızı
            <span className="text-cyan-400"> Güçlendiren Platform</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Risk Analiz, bireylerin finansal durumlarını daha iyi anlamalarına,
            risk seviyelerini değerlendirmelerine ve bilinçli kararlar
            almalarına yardımcı olmak amacıyla geliştirilmiş dijital bir
            finans platformudur.
          </p>
        </div>
      </section>

      {/* Misyon / Vizyon */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <Target className="mb-6 text-cyan-400" size={40} />
            <h2 className="text-3xl font-bold">Misyonumuz</h2>
            <p className="mt-6 leading-8 text-slate-400">
              Finansal analiz süreçlerini herkes için erişilebilir, anlaşılır ve
              güvenilir hale getirerek kullanıcılarımızın daha bilinçli finansal
              kararlar almasını sağlamak.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <Eye className="mb-6 text-cyan-400" size={40} />
            <h2 className="text-3xl font-bold">Vizyonumuz</h2>
            <p className="mt-6 leading-8 text-slate-400">
              Türkiye'nin güvenilir dijital finansal analiz platformlarından
              biri olmak ve yenilikçi teknolojilerle kullanıcı deneyimini sürekli
              geliştirmek.
            </p>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="py-24 bg-[#081321]">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-center">
            <h2 className="text-4xl font-black">
              Temel Değerlerimiz
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <Icon size={42} className="text-cyan-400" />

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* İstatistik */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-8 md:grid-cols-3">
          <Stat icon={<BarChart3 />} value="25.000+" title="Analiz" />
          <Stat icon={<Landmark />} value="20+" title="Banka" />
          <Stat icon={<ShieldCheck />} value="%98" title="Doğruluk" />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-12 text-center">
          <h2 className="text-4xl font-black">
            Finansal Durumunuzu Analiz Etmeye Hazır mısınız?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            Risk Analiz ile finansal görünümünüzü değerlendirin ve size özel
            önerilerle geleceğinizi daha bilinçli planlayın.
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Ücretsiz Analize Başla
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stat({
  icon,
  value,
  title,
}: {
  icon: React.ReactNode;
  value: string;
  title: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
      <div className="mb-6 flex justify-center text-cyan-400">
        {icon}
      </div>

      <h3 className="text-5xl font-black">{value}</h3>

      <p className="mt-3 text-slate-400">{title}</p>
    </div>
  );
}