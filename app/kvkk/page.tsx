import type { Metadata } from "next";
import SectionHero from "@/components/ui/SectionHero";

export const metadata: Metadata = {
  title: "KVKK | Risk Analiz",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <main className="bg-[#030712] text-white">

      <SectionHero
        badge="KVKK"
        title="Kişisel Verilerin Korunması"
        description="Risk Analiz olarak kişisel verilerinizin güvenliğini önemsiyoruz."
      />

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h2 className="text-3xl font-bold">
              Aydınlatma Metni
            </h2>

            <div className="mt-10 space-y-8 text-slate-300 leading-8">

              <div>
                <h3 className="text-xl font-semibold text-white">
                  1. Veri Sorumlusu
                </h3>

                <p className="mt-3">
                  Risk Analiz platformu, kullanıcı bilgilerinin güvenliğini
                  yürürlükteki mevzuata uygun şekilde korumayı amaçlamaktadır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  2. Toplanan Veriler
                </h3>

                <p className="mt-3">
                  Ad, soyad, iletişim bilgileri, finansal analiz için gerekli
                  kullanıcı beyanları ve teknik kullanım kayıtları.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  3. Verilerin Kullanımı
                </h3>

                <p className="mt-3">
                  Veriler yalnızca hizmet sunmak, kullanıcı deneyimini
                  geliştirmek ve yasal yükümlülükleri yerine getirmek amacıyla
                  kullanılmaktadır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  4. Kullanıcı Hakları
                </h3>

                <p className="mt-3">
                  KVKK kapsamında verilerinize erişme, düzeltme, silme ve
                  işlenmesini sınırlandırma haklarına sahipsiniz.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}