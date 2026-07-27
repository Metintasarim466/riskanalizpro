import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const admins = await prisma.admin.findMany({
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
            Kullanıcılar
          </h1>

          <p className="mt-2 text-gray-400">
            Yönetim paneli kullanıcılarını ve yetkilerini yönetin.
          </p>
        </div>

        <Link
          href="/admin/users/new"
          className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          + Yeni Kullanıcı
        </Link>
      </div>

      {/* Kullanıcı tablosu */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080d1a]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/[0.03]">
              <tr className="text-left text-sm text-gray-400">
                <th className="px-6 py-4">
                  Kullanıcı
                </th>

                <th className="px-6 py-4">
                  E-posta
                </th>

                <th className="px-6 py-4">
                  Yetki
                </th>

                <th className="px-6 py-4">
                  Kayıt Tarihi
                </th>
              </tr>
            </thead>

            <tbody>
              {admins.map((admin) => (
                <tr
                  key={admin.id}
                  className="border-b border-white/10 transition hover:bg-white/[0.03]"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-300">
                        {admin.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <span className="font-semibold text-white">
                        {admin.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {admin.email}
                  </td>

                  <td className="px-6 py-5">
                    {admin.role === "ADMIN" ? (
                      <span className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs font-semibold text-red-300">
                        ADMIN
                      </span>
                    ) : (
                      <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
                        EDITÖR
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-400">
                    {new Date(
                      admin.createdAt
                    ).toLocaleDateString("tr-TR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {admins.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            Henüz yönetici kullanıcısı bulunmuyor.
          </div>
        )}
      </div>
    </div>
  );
}