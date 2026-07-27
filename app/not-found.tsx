import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-black text-cyan-400">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Sayfa Bulunamadı
        </h2>

        <p className="mt-4 text-slate-400">
          Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış olabilir.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}