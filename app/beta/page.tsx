"use client";

import { useEffect } from "react";

export default function BetaPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#030712] flex items-center justify-center px-6">

      <div className="max-w-3xl w-full rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl p-12 text-center shadow-[0_0_80px_rgba(6,182,212,.15)]">

        <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/30 px-5 py-2 text-cyan-400 font-bold">
          BETA SÜRÜMÜ
        </span>

        <h1 className="mt-8 text-5xl font-black text-white">
          RiskAnaliz.Com.tr
        </h1>

        <p className="mt-5 text-2xl font-semibold text-cyan-400">
          Şuanda Beta (Deneme) Aşamasındadır
        </p>

        <p className="mt-8 text-slate-300 text-lg leading-9">
          Yakında Hizmetinizde.
        </p>

        <p className="mt-5 text-slate-300 text-lg leading-9">
          Şimdilik Dosyalarınızı
          <br />
          <span className="text-cyan-400 font-bold">
            evrak@riskanaliz.com.tr
          </span>
          <br />
          adresine yollayınız.
        </p>

        <div className="mt-12 border-t border-white/10 pt-8">

          <p className="text-slate-400">
            Kodlama ve Geliştirme
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            Metin Tasarım
          </p>

          <a
            href="https://www.metintasarim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-cyan-400 hover:text-cyan-300"
          >
            www.metintasarim.com
          </a>

        </div>

        <div className="mt-12">

          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">

            <div
              className="h-full bg-cyan-400 animate-[loading_30s_linear_forwards]"
            />

          </div>

          <p className="mt-4 text-slate-500">
            30 saniye sonra siteye yönlendirileceksiniz...
          </p>

        </div>

      </div>

    </main>
  );
}