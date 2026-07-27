"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Globe2,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

const services = [
  { href: "/risk-analizi", label: "Risk Analizi" },
  { href: "/risk-skoru", label: "Finansal Risk Skoru" },
  { href: "/kredi-uygunlugu", label: "Kredi Uygunluk Tahmini" },
  { href: "/banka-karsilastirma", label: "Banka Karşılaştırma" },
  { href: "/raporlar", label: "Finansal Raporlar" },
];

const corporate = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/kvkk", label: "KVKK" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
];

const badges = [
  { icon: LockKeyhole, label: "SSL" },
  { icon: ShieldCheck, label: "KVKK" },
  { icon: BrainCircuit, label: "AI" },
  { icon: Sparkles, label: "Secure" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#030712] text-white">
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.34, 0.62, 0.34],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -28, 0],
          y: [0, 18, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-36 bottom-16 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,233,.12),transparent_32%),linear-gradient(180deg,#030712_0%,#07111f_48%,#030712_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20"
      />

      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.35 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_100px_rgba(8,47,73,.28)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_.88fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-100">
                <Send size={17} className="text-cyan-300" />
                Finansal içgörüler gelen kutunuzda
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl">
                Risk skorunuzu güçlendirecek güncel finans rehberlerini alın.
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                AI destekli risk analizi, kredi uygunluğu ve banka
                karşılaştırmaları hakkında premium içerikleri sizinle
                paylaşalım.
              </p>
            </div>

            <form className="flex flex-col gap-3 sm:flex-row" aria-label="Bülten aboneliği">
              <label htmlFor="footer-email" className="sr-only">
                E-posta adresiniz
              </label>

              <input
                id="footer-email"
                type="email"
                required
                placeholder="E-posta adresiniz"
                className="min-h-14 flex-1 rounded-2xl border border-white/10 bg-slate-950/70 px-5 text-white outline-none backdrop-blur-xl transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/15"
              />

              <button
                type="submit"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 font-black text-slate-950 shadow-[0_22px_70px_rgba(34,211,238,.24)] transition hover:-translate-y-1 hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-300/30"
              >
                Abone Ol
                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.75fr_.75fr_.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-xl font-black text-slate-950 shadow-[0_18px_55px_rgba(34,211,238,.24)]">
                RA
              </span>

              <span>
                <span className="block text-2xl font-black text-white">
                  Risk Analiz
                </span>
                <span className="text-sm font-semibold text-cyan-300">
                  AI Finansal Risk Platformu
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Risk Analiz; finansal verilerinizi yapay zeka ile değerlendirir,
              risk skorunuzu görünür kılar ve size en uygun finansal kararları
              almanız için profesyonel içgörüler sunar.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {badges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.045] px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-xl"
                  >
                    <Icon size={16} className="text-cyan-300" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <FooterColumn title="Hizmetler" links={services} delay={0.08} />
          <FooterColumn title="Kurumsal" links={corporate} delay={0.16} />

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="text-lg font-black text-white">İletişim</h3>

            <div className="mt-6 space-y-4">
              <ContactItem icon={<MapPin size={18} />} text="İstanbul, Türkiye" />
              <ContactItem icon={<Phone size={18} />} text="+90 (000) 000 00 00" />
              <ContactItem icon={<Mail size={18} />} text="info@riskanaliz.com.tr" />
              <ContactItem icon={<Globe2 size={18} />} text="riskanaliz.com.tr" />
            </div>

            <div className="mt-8 flex gap-3" aria-label="Sosyal medya bağlantıları">
              <Social href="https://facebook.com" label="Facebook">
               <div className="flex h-[19px] w-[19px] items-center justify-center rounded-full border border-white/50 text-[11px] font-bold">
                f
              </div>
              </Social>

              <Social href="https://instagram.com" label="Instagram">
                <div className="flex h-[19px] w-[19px] items-center justify-center rounded-full border border-white/50 text-[11px] font-bold">
                  i
                </div>
              </Social>

              <Social href="https://linkedin.com" label="LinkedIn">
                <div className="flex h-[19px] w-[19px] items-center justify-center rounded-full border border-white/50 text-[11px] font-bold">
                  in
                </div>
              </Social>
            </div>
          </motion.div>
        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col gap-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p>© 2026 Risk Analiz. Tüm hakları saklıdır.</p>

            <p className="mt-2">
              Site tasarım ve geliştirme hizmetleri{" "}
              <a
                href="https://metintasarim.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-300 transition hover:text-cyan-200"
              >
                Metin Tasarım
              </a>{" "}
              tarafından hazırlanmaktadır.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/kvkk" className="transition hover:text-cyan-300">
              KVKK
            </Link>
            <Link
              href="/gizlilik-politikasi"
              className="transition hover:text-cyan-300"
            >
              Gizlilik
            </Link>
            <Link
              href="/cerez-politikasi"
              className="transition hover:text-cyan-300"
            >
              Çerez Politikası
            </Link>
            <Link
              href="/kullanim-kosullari"
              className="transition hover:text-cyan-300"
            >
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  delay,
}: {
  title: string;
  links: Array<{
    href: string;
    label: string;
  }>;
  delay: number;
}) {
  return (
    <motion.nav
      aria-label={title}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <h3 className="text-lg font-black text-white">{title}</h3>

      <div className="mt-6 space-y-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex w-fit items-center gap-2 text-slate-400 transition hover:text-cyan-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/40 transition group-hover:bg-cyan-300" />
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

function ContactItem({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-slate-400">
      <span className="text-cyan-300">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-cyan-300"
    >
      {children}
    </motion.a>
  );
}
