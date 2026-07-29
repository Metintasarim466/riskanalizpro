import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-cyan-400">
          Risk Analiz Pro
        </h1>

        <p className="mt-4 text-gray-400">
          Finansal Risk Analiz Platformu
        </p>

        <Link
          href="/admin/login"
          className="mt-8 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
        >
          Yönetim Paneli
        </Link>
      </div>
    </main>
  );
}