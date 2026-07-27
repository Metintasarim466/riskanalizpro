import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-4 last:border-b-0">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-right font-semibold text-white">
        {value}
      </span>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const statusClass =
    status === "Onaylandı"
      ? "border-green-400/30 bg-green-400/10 text-green-400"
      : status === "Reddedildi"
        ? "border-red-400/30 bg-red-400/10 text-red-400"
        : "border-yellow-400/30 bg-yellow-400/10 text-yellow-400";

  return (
    <span
      className={`rounded-full border px-4 py-2 text-sm font-semibold ${statusClass}`}
    >
      {status}
    </span>
  );
}

export default async function ApplicationDetailPage({
  params,
}: PageProps) {
  const { id } = await params;

  const application = await prisma.application.findUnique({
    where: {
      id,
    },
  });

  if (!application) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Üst Başlık */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-3">
            <Link
              href="/admin/applications"
              className="text-sm text-cyan-400 transition hover:text-cyan-300"
            >
              ← Başvurulara Dön
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Başvuru Detayı
          </h1>

          <p className="mt-2 text-slate-400">
            {application.fullName} adlı başvuru sahibinin bilgileri.
          </p>
        </div>

        <StatusBadge status={application.status} />
      </div>

      {/* Bilgi Kartları */}
      <div className="grid gap-6 xl:grid-cols-2">

        {/* Kişisel Bilgiler */}
        <section className="rounded-2xl border border-white/10 bg-[#030712] p-6">
          <h2 className="mb-5 text-xl font-bold text-white">
            Kişisel Bilgiler
          </h2>

          <InfoRow
            label="Ad Soyad"
            value={application.fullName}
          />

          <InfoRow
            label="TC Kimlik No"
            value={application.tcKimlik}
          />

          <InfoRow
            label="Telefon"
            value={application.phone}
          />

          <InfoRow
            label="E-posta"
            value={application.email}
          />

          <InfoRow
            label="Doğum Tarihi"
            value={formatDate(application.birthDate)}
          />
        </section>

        {/* Çalışma Bilgileri */}
        <section className="rounded-2xl border border-white/10 bg-[#030712] p-6">
          <h2 className="mb-5 text-xl font-bold text-white">
            Çalışma Bilgileri
          </h2>

          <InfoRow
            label="Meslek"
            value={application.job}
          />

          <InfoRow
            label="Şirket"
            value={application.company || "-"}
          />

          <InfoRow
            label="Çalışma Durumu"
            value={application.employment}
          />

          <InfoRow
            label="Çalışma Süresi"
            value={`${application.workYears} yıl`}
          />

          <InfoRow
            label="Aylık Gelir"
            value={formatCurrency(application.monthlyIncome)}
          />
        </section>

        {/* Kredi Bilgileri */}
        <section className="rounded-2xl border border-white/10 bg-[#030712] p-6">
          <h2 className="mb-5 text-xl font-bold text-white">
            Kredi Bilgileri
          </h2>

          <InfoRow
            label="Kredi Türü"
            value={application.creditType}
          />

          <InfoRow
            label="Talep Edilen Tutar"
            value={formatCurrency(application.creditAmount)}
          />

          <InfoRow
            label="Vade"
            value={`${application.installment} ay`}
          />

          <InfoRow
            label="Risk Skoru"
            value={
              application.riskScore
                ? application.riskScore
                : "Henüz hesaplanmadı"
            }
          />
        </section>

        {/* Sistem Bilgileri */}
        <section className="rounded-2xl border border-white/10 bg-[#030712] p-6">
          <h2 className="mb-5 text-xl font-bold text-white">
            Onaylar ve Sistem Bilgileri
          </h2>

          <InfoRow
            label="KVKK Onayı"
            value={
              application.kvkkAccepted
                ? "Onaylandı"
                : "Onaylanmadı"
            }
          />

          <InfoRow
            label="Açık Rıza"
            value={
              application.consentAccepted
                ? "Onaylandı"
                : "Onaylanmadı"
            }
          />

          <InfoRow
            label="Başvuru Tarihi"
            value={formatDate(application.createdAt)}
          />

          <InfoRow
            label="Son Güncelleme"
            value={formatDate(application.updatedAt)}
          />
        </section>
      </div>

      {/* Yönetim İşlemleri */}
      <section className="rounded-2xl border border-white/10 bg-[#030712] p-6">
        <h2 className="mb-5 text-xl font-bold text-white">
          Başvuru Yönetimi
        </h2>

        <div className="flex flex-wrap gap-4">

          {/* Onayla */}
          <form
            action={`/api/admin/applications/${application.id}/status`}
            method="POST"
          >
            <input
              type="hidden"
              name="status"
              value="Onaylandı"
            />

            <button
              type="submit"
              className="rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
            >
              ✓ Başvuruyu Onayla
            </button>
          </form>

          {/* Reddet */}
          <form
            action={`/api/admin/applications/${application.id}/status`}
            method="POST"
          >
            <input
              type="hidden"
              name="status"
              value="Reddedildi"
            />

            <button
              type="submit"
              className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
            >
              ✕ Başvuruyu Reddet
            </button>
          </form>

          {/* Beklemeye Al */}
          <form
            action={`/api/admin/applications/${application.id}/status`}
            method="POST"
          >
            <input
              type="hidden"
              name="status"
              value="Bekliyor"
            />

            <button
              type="submit"
              className="rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              ↻ Beklemeye Al
            </button>
          </form>

        </div>
      </section>
    </div>
  );
}