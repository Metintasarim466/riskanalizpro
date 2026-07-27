import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import SectionHero from "@/components/ui/SectionHero";

export const metadata: Metadata = {
  title: "İletişim | Risk Analiz",
  description:
    "Risk Analiz ile iletişime geçin.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#030712] text-white">

      <SectionHero
        badge="İletişim"
        title="Bizimle İletişime Geçin"
        description="Sorularınız, önerileriniz veya iş birlikleri için bizimle iletişime geçebilirsiniz."
      />

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-2">

          <div>

            <h2 className="text-4xl font-black">
              İletişim Bilgileri
            </h2>

            <div className="mt-10 space-y-8">

              <Info
                icon={<Phone />}
                title="Telefon"
                text="+90 (000) 000 00 00"
              />

              <Info
                icon={<Mail />}
                title="E-Posta"
                text="info@riskanaliz.com.tr"
              />

              <Info
                icon={<MapPin />}
                title="Adres"
                text="İstanbul / Türkiye"
              />

              <Info
                icon={<Clock />}
                title="Çalışma Saatleri"
                text="Hafta içi 09:00 - 18:00"
              />

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h3 className="text-3xl font-bold">
              Mesaj Gönder
            </h3>

            <form className="mt-8 space-y-6">

              <input
                placeholder="Ad Soyad"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              />

              <input
                placeholder="E-Posta"
                type="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              />

              <input
                placeholder="Konu"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Mesajınız..."
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              />

              <button
                className="w-full rounded-xl bg-cyan-500 py-4 font-bold text-black transition hover:bg-cyan-400"
              >
                Mesajı Gönder
              </button>

            </form>

          </div>

        </div>

      </section>

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="flex h-96 items-center justify-center rounded-3xl border border-white/10 bg-white/5">

            <p className="text-slate-400">
              Google Maps burada gösterilecek.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

function Info({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
        {icon}
      </div>

      <div>

        <h4 className="text-xl font-bold">
          {title}
        </h4>

        <p className="mt-2 text-slate-400">
          {text}
        </p>

      </div>

    </div>
  );
}