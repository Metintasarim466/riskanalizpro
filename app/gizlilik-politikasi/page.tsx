import type { Metadata } from "next";
import SectionHero from "@/components/ui/SectionHero";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Risk Analiz",
  description:
    "Risk Analiz gizlilik politikası ve kullanıcı verilerinin korunması hakkında bilgiler.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#030712] text-white">

      <SectionHero
        badge="Gizlilik Politikası"
        title="Gizliliğiniz Bizim İçin Önemlidir"
        description="Risk Analiz kullanıcı bilgilerinin gizliliğini ve güvenliğini en üst seviyede korumayı hedefler."
      />

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 space-y-10">

            <div>
              <h2 className="text-2xl font-bold">
                Bilgi Toplama
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Platformumuz yalnızca hizmet sunumu için gerekli bilgileri toplar.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Bilgilerin Kullanımı
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Toplanan bilgiler hizmet kalitesini artırmak ve kullanıcı deneyimini geliştirmek amacıyla kullanılır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Güvenlik
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Veriler modern güvenlik standartları doğrultusunda korunmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Çerezler
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Site performansını artırmak amacıyla çerezlerden yararlanılabilir.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}