"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  applicationId: string;
  currentStatus: string;
};

export default function ApplicationActions({
  applicationId,
  currentStatus,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function updateStatus(status: string) {
    const confirmed = window.confirm(
      `Başvuru durumu "${status}" olarak güncellensin mi?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `/api/admin/applications/${applicationId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Durum güncellenemedi");
      }

      router.refresh();
    } catch (error) {
      console.error(error);

      alert("Başvuru durumu güncellenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-white/10 bg-[#080d1a] p-6">
      <h2 className="text-xl font-semibold">
        Başvuru İşlemleri
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Bu başvuru için işlem seçin.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          type="button"
          disabled={loading || currentStatus === "İnceleniyor"}
          onClick={() => updateStatus("İnceleniyor")}
          className="rounded-lg border border-blue-400/30 bg-blue-400/10 px-5 py-3 font-semibold text-blue-300 transition hover:bg-blue-400/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "İşleniyor..." : "İncelemeye Al"}
        </button>

        <button
          type="button"
          disabled={loading || currentStatus === "Onaylandı"}
          onClick={() => updateStatus("Onaylandı")}
          className="rounded-lg border border-green-400/30 bg-green-400/10 px-5 py-3 font-semibold text-green-300 transition hover:bg-green-400/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Onayla
        </button>

        <button
          type="button"
          disabled={loading || currentStatus === "Reddedildi"}
          onClick={() => updateStatus("Reddedildi")}
          className="rounded-lg border border-red-400/30 bg-red-400/10 px-5 py-3 font-semibold text-red-300 transition hover:bg-red-400/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Reddet
        </button>
      </div>
    </div>
  );
}