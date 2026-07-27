import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function ApplicationsPage() {
  const applications = await prisma.application.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      {/* Başlık */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Başvurular
          </h1>

          <p className="mt-2 text-gray-400">
            Sisteme gönderilen tüm kredi başvurularını yönetin.
          </p>
        </div>

        <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Toplam: {applications.length}
        </div>
      </div>

      {/* Tablo */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080d1a]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="border-b border-white/10 bg-white/[0.03]">
              <tr className="text-left text-sm text-gray-400">
                <th className="px-6 py-4">
                  Başvuru Sahibi
                </th>

                <th className="px-6 py-4">
                  Telefon
                </th>

                <th className="px-6 py-4">
                  Kredi Türü
                </th>

                <th className="px-6 py-4">
                  Tutar
                </th>

                <th className="px-6 py-4">
                  Durum
                </th>

                <th className="px-6 py-4">
                  Tarih
                </th>

                <th className="px-6 py-4">
                  İşlem
                </th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr
                  key={application.id}
                  className="border-b border-white/10 transition hover:bg-white/[0.03]"
                >
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-white">
                        {application.fullName}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {application.email}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {application.phone}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {application.creditType}
                  </td>

                  <td className="px-6 py-5 font-semibold text-cyan-300">
                    {application.creditAmount.toLocaleString("tr-TR")} ₺
                  </td>

                  <td className="px-6 py-5">
                    <StatusBadge status={application.status} />
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-400">
                    {new Date(
                      application.createdAt
                    ).toLocaleDateString("tr-TR")}
                  </td>

                  <td className="px-6 py-5">
                    <Link
                      href={`/admin/applications/${application.id}`}
                      className="rounded-lg border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                    >
                      Detay
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {applications.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            Henüz başvuru bulunmuyor.
          </div>
        )}
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const styles: Record<string, string> = {
    Bekliyor:
      "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",

    İnceleniyor:
      "bg-blue-400/10 text-blue-300 border-blue-400/20",

    Onaylandı:
      "bg-green-400/10 text-green-300 border-green-400/20",

    Reddedildi:
      "bg-red-400/10 text-red-300 border-red-400/20",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
        styles[status] ||
        "border-gray-400/20 bg-gray-400/10 text-gray-300"
      }`}
    >
      {status}
    </span>
  );
}