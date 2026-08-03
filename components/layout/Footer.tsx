"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-cyan-500/20 bg-slate-950">

      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-500 p-4">

                <ShieldCheck className="text-white" size={30} />

              </div>

              <div>

                <h2 className="text-2xl font-black text-white">

                  Risk Analiz

                </h2>

                <p className="text-cyan-400">

                  PRO v2.0

                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">

              Yapay zeka destekli finansal analiz platformu.
              Bankalara başvurmadan önce kredi riskinizi analiz edin.

            </p>

          </div>

          {/* Kurumsal */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">

              Kurumsal

            </h3>

            <div className="space-y-3">

              <Link href="/hakkimizda" className="block text-gray-400 hover:text-cyan-400">
                Hakkımızda
              </Link>

              <Link href="/iletisim" className="block text-gray-400 hover:text-cyan-400">
                İletişim
              </Link>

              <Link href="/kvkk" className="block text-gray-400 hover:text-cyan-400">
                KVKK
              </Link>

              <Link href="/gizlilik-politikasi" className="block text-gray-400 hover:text-cyan-400">
                Gizlilik Politikası
              </Link>

            </div>

          </div>

          {/* Hizmetler */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">

              Hizmetler

            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Kredi Risk Analizi</p>

              <p>AI Destekli Finans Analizi</p>

              <p>Banka Ön Onay Sistemi</p>

              <p>Kurumsal Finans Danışmanlığı</p>

            </div>

          </div>

          {/* İletişim */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">

              İletişim

            </h3>

            <div className="space-y-5 text-gray-400">

              <a
                href="https://wa.me/905432107058"
                target="_blank"
                className="flex items-center gap-3 transition hover:text-green-400"
              >
                <MessageCircle className="text-green-500" size={20} />
                WhatsApp Destek
              </a>

              <div className="flex items-center gap-3">

                <Phone className="text-cyan-400" size={18} />

                <span>

                  0543 210 70 58

                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="text-cyan-400" size={18} />

                <span>

                  evrak@riskanaliz.com.tr

                </span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="text-cyan-400" size={18} />

                <span>

                  İstanbul / Türkiye

                </span>

              </div>

              <a
                href="https://www.riskanaliz.com.tr"
                target="_blank"
                className="flex items-center gap-3 hover:text-cyan-400"
              >

                <Globe className="text-cyan-400" size={18} />

                www.riskanaliz.com.tr

              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-gray-500">

            © 2026 Risk Analiz Pro.
            Tüm hakları saklıdır.

          </p>

          <p className="text-sm text-gray-500">

            Bu Site{" "}

            <a
              href="https://www.metintasarim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Metin Tasarım
            </a>

            {" "}Tarafından Yapılmıştır.

          </p>

        </div>

      </div>

    </footer>
  );
}