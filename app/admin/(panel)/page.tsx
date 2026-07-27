import DashboardCard from "@/components/admin/DashboardCard";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [
    totalApplications,
    pendingApplications,
    approvedApplications,
    rejectedApplications,
    recentApplications,
  ] = await Promise.all([
    prisma.application.count(),

    prisma.application.count({
      where: {
        status: "Bekliyor",
      },
    }),

    prisma.application.count({
      where: {
        status: "Onaylandı",
      },
    }),

    prisma.application.count({
      where: {
        status: "Reddedildi",
      },
    }),

    prisma.application.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Risk Analiz yönetim paneline hoş geldiniz.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Toplam Başvuru"
          value={totalApplications}
        />

        <DashboardCard
          title="Bekleyen"
          value={pendingApplications}
        />

        <DashboardCard
          title="Onaylanan"
          value={approvedApplications}
        />

        <DashboardCard
          title="Reddedilen"
          value={rejectedApplications}
        />
      </div>

      <div className="rounded-xl border border-white/10 bg-[#080d1a] p-6">
        <h2 className="mb-6 text-xl font-semibold">
          Son Başvurular
        </h2>

        {recentApplications.length === 0 ? (
          <p className="text-gray-400">
            Henüz başvuru bulunmuyor.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left text-sm text-gray-400">
                  <th className="pb-3">Ad Soyad</th>
                  <th className="pb-3">Telefon</th>
                  <th className="pb-3">Kredi Türü</th>
                  <th className="pb-3">Tutar</th>
                  <th className="pb-3">Durum</th>
                </tr>
              </thead>

              <tbody>
                {recentApplications.map((application) => (
                  <tr
                    key={application.id}
                    className="border-b border-white/10"
                  >
                    <td className="py-4">
                      {application.fullName}
                    </td>

                    <td>
                      {application.phone}
                    </td>

                    <td>
                      {application.creditType}
                    </td>

                    <td>
                      {application.creditAmount.toLocaleString(
                        "tr-TR"
                      )}{" "}
                      ₺
                    </td>

                    <td>
                      {application.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}