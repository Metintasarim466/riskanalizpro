"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const menu = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "#services" },
  { name: "AI Dashboard", href: "#dashboard" },
  { name: "Risk Hesapla", href: "#calculator" },
  { name: "SSS", href: "#faq" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-slate-950/70 shadow-[0_8px_32px_rgba(0,0,0,.4)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:h-20">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/25"
          >
            <ShieldCheck size={22} className="text-slate-950" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400">
              <Sparkles size={10} className="text-slate-950" />
            </span>
          </motion.div>
          <div>
            <p className="text-base font-black tracking-wide text-white transition group-hover:text-cyan-300">
              Risk Analiz Pro
            </p>
            <p className="text-[11px] font-medium text-cyan-400/80">
              AI Finans Platformu
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/admin/login"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            Yönetim
          </Link>
          <Link
            href="/basvuru"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            Ücretsiz Analiz
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {menu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Link
                  href="/admin/login"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 py-3 text-center text-sm font-semibold text-slate-200"
                >
                  Yönetim Paneli
                </Link>
                <Link
                  href="/basvuru"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-center text-sm font-bold text-slate-950"
                >
                  Ücretsiz Analiz Başlat
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
