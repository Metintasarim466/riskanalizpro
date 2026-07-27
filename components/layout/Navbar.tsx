"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500 p-2">
            <ShieldCheck className="h-7 w-7 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-black text-white">
              Risk Analiz
            </h1>

            <p className="text-xs text-cyan-400">
              Finansal Risk Platformu
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/">Ana Sayfa</Link>
          <Link href="#">Hizmetler</Link>
          <Link href="#">Risk Analizi</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Hakkımızda</Link>
          <Link href="#">İletişim</Link>
        </nav>

        <div className="flex gap-3">
          <button className="rounded-xl border border-cyan-500 px-5 py-3">
            Giriş
          </button>

          <button className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold hover:bg-cyan-400">
            Ücretsiz Analiz
          </button>
        </div>
      </div>
    </header>
  );
}