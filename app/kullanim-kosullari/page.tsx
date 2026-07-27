import type { Metadata } from "next";
import SectionHero from "@/components/ui/SectionHero";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Risk Analiz",
  description:
    "Risk Analiz kullanım koşulları ve hizmet şartları.",
};

const sections = [
  {
    title: "1. Genel Hükümler",
    text:
      "Risk Analiz platformunu kullanan herkes bu kullanım koşullarını kabul etmiş sayılır. Platform yalnızca bilgilendirme ve finansal analiz amacıyla hizmet sunmaktadır.",
  },
  {
    title: "2. Kullanıcı Sorumluluğu",
    text:
      "Kullanıcılar sisteme girdikleri bilgilerin doğru ve güncel olduğunu kabul eder. Yanlış bilgi girilmesinden doğacak sonuçlardan kullanıcı sorumludur.",
  },
  {
    title: "3. Hizmet Kapsamı",
    text:
      "Risk Analiz tarafından sunulan değerlendirmeler tavsiye niteliğindedir. Platform kredi onayı, finansman garantisi veya yatırım danışmanlığı hizmeti sunmaz.",
  },
  {
    title: "4. Fikri Mülkiyet",
    text:
      "Platformda yer alan tüm yazılım, tasarım, logo ve içerikler ilgili mevzuat kapsamında korunmaktadır. İzinsiz kopyalanamaz ve çoğaltılamaz.",
  },
  {
    title: "5. Güncelleme",
    text:
      "Risk Analiz kullanım koşullarını önceden bildirimde bulunmaksızın güncelleme hakkını saklı tutar.",
  },
];

export const dynamic = "force-static";

export default function TermsPage() {
  return (
    <main className="bg-[#030712] text-white">

      <SectionHero
        badge="Kullanım Koşulları"
        title="Platform Kullanım Şartları"
        description="Risk Analiz platformunu kullanmadan önce lütfen aşağıdaki koşulları dikkatlice okuyunuz."
      />

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8">

          <div className="space-y-8">

            {sections.map((item) => (

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