"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "#services" },
  { name: "Risk Analizi", href: "#risk" },
  { name: "Başvuru", href: "/basvuru" },
  { name: "Kurumsal", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500 text-xl font-black text-white shadow-lg shadow-cyan-500/40">
            R
          </div>

          <div>
            <h2 className="text-xl font-black text-white">
              Risk Analiz
            </h2>

            <p className="text-xs text-slate-400">
              Finans Platformu
            </p>
          </div>

        </Link>

        <nav className="hidden items-center gap-8 lg:flex">

          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        <div className="hidden items-center gap-4 lg:flex">

          <Link
            href="/login"
            className="text-sm text-slate-300 hover:text-white"
          >
            Giriş Yap
          </Link>

          <Link
            href="/basvuru"
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-cyan-400"
          >
            Başvuru Yap
          </Link>

        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="border-t border-white/10 bg-slate-950 lg:hidden"
          >

            <div className="flex flex-col p-6">

              {menu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/5 py-4 text-slate-300"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/login"
                className="mt-6 rounded-xl border border-cyan-500 py-3 text-center text-cyan-400"
              >
                Giriş Yap
              </Link>

              <Link
                href="/basvuru"
                className="mt-3 rounded-xl bg-cyan-500 py-3 text-center font-semibold text-white"
              >
                Başvuru Yap
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </header>
  );
}