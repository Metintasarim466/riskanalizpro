"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.error ||
            "E-posta veya şifre hatalı."
        );
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error(error);

      setError(
        "Sunucuya bağlanırken bir hata oluştu."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,.15),transparent_35%),linear-gradient(180deg,#030712_0%,#07111f_100%)]" />

      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-xl font-black text-slate-950 shadow-[0_20px_60px_rgba(34,211,238,.25)]">
            RA
          </div>

          <h1 className="mt-5 text-3xl font-black text-white">
            Risk Analiz
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Yönetim paneline giriş yapın
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_100px_rgba(8,47,73,.35)] backdrop-blur-2xl">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h2 className="font-bold text-white">
                Admin Girişi
              </h2>

              <p className="text-sm text-slate-500">
                Yetkili kullanıcı girişi
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                E-posta adresi
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="admin@riskanaliz.com.tr"
                  required
                  className="h-14 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Şifre
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="••••••••"
                  required
                  className="h-14 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="h-14 w-full rounded-xl bg-cyan-400 font-black text-slate-950 shadow-[0_18px_55px_rgba(34,211,238,.2)] transition hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-cyan-400/20"
            >
              {loading
                ? "Giriş yapılıyor..."
                : "Giriş Yap"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          © 2026 Risk Analiz · Güvenli Yönetim Paneli
        </p>
      </div>
    </main>
  );
}