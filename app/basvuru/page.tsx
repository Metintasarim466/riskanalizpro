"use client";

import { useState } from "react";

export default function BasvuruPage() {
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      fullName: form.get("fullName"),
      tcKimlik: form.get("tcKimlik"),
      phone: form.get("phone"),
      email: form.get("email"),
      birthDate: form.get("birthDate"),

      job: form.get("job"),
      company: form.get("company"),
      employment: form.get("employment"),
      workYears: Number(form.get("workYears")),
      monthlyIncome: Number(form.get("monthlyIncome")),

      creditType: form.get("creditType"),
      creditAmount: Number(form.get("creditAmount")),
      installment: Number(form.get("installment")),

      kvkkAccepted: true,
      consentAccepted: true,
    };

    const res = await fetch("/api/application", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);

    if (res.ok) {
      alert("Başvurunuz başarıyla gönderildi.");
    } else {
      alert("Bir hata oluştu.");
    }
  }

  return (
    <form onSubmit={submit} className="mx-auto max-w-2xl space-y-4 p-8">
      <input name="fullName" placeholder="Ad Soyad" className="w-full rounded border p-3" required />
      <input name="tcKimlik" placeholder="TC Kimlik" className="w-full rounded border p-3" required />
      <input name="phone" placeholder="Telefon" className="w-full rounded border p-3" required />
      <input name="email" placeholder="E-posta" className="w-full rounded border p-3" required />
      <input name="birthDate" type="date" className="w-full rounded border p-3" required />

      <input name="job" placeholder="Meslek" className="w-full rounded border p-3" required />
      <input name="company" placeholder="Firma" className="w-full rounded border p-3" />
      <input name="employment" placeholder="Çalışma Durumu" className="w-full rounded border p-3" required />
      <input name="workYears" type="number" placeholder="Çalışma Süresi" className="w-full rounded border p-3" required />
      <input name="monthlyIncome" type="number" placeholder="Aylık Gelir" className="w-full rounded border p-3" required />

      <select name="creditType" className="w-full rounded border p-3">
        <option>İhtiyaç</option>
        <option>Konut</option>
        <option>Taşıt</option>
      </select>

      <input name="creditAmount" type="number" placeholder="Kredi Tutarı" className="w-full rounded border p-3" required />
      <input name="installment" type="number" placeholder="Vade (Ay)" className="w-full rounded border p-3" required />

      <button
        className="w-full rounded bg-cyan-500 py-4 font-bold text-white"
        disabled={loading}
      >
        {loading ? "Gönderiliyor..." : "Başvuruyu Gönder"}
      </button>
    </form>
  );
}