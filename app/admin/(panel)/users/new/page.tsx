"use client";

import { requireAdmin } from "@/lib/auth";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewUserPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EDITOR");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/admin/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.error ||
            "Kullanıcı oluşturulamadı."
        );

        return;
      }

      router.push("/admin/users");
      router.refresh();
    } catch {
      setError(
        "Sunucuya bağlanırken bir hata oluştu."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Yeni Kullanıcı Ekle
        </h1>

        <p className="mt-2 text-gray-400">
          Yeni bir admin veya editör hesabı oluşturun.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#080d1a] p-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Ad Soyad
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              required
              className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none focus:border-cyan-400"
              placeholder="Örn: Ahmet Yılmaz"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              E-posta
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none focus:border-cyan-400"
              placeholder="ornek@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Şifre
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
              minLength={6}
              className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none focus:border-cyan-400"
              placeholder="En az 6 karakter"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Yetki
            </label>

            <select
              value={role}
              onChange={(event) =>
                setRole(event.target.value)
              }
              className="h-12 w-full rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none focus:border-cyan-400"
            >
              <option value="EDITOR">
                Editör
              </option>

              <option value="ADMIN">
                Admin
              </option>
            </select>
          </div>

          {error && (
            <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() =>
                router.push("/admin/users")
              }
              className="flex-1 rounded-xl border border-white/10 px-5 py-3 font-semibold text-gray-300 transition hover:bg-white/5"
            >
              İptal
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Oluşturuluyor..."
                : "Kullanıcı Oluştur"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}