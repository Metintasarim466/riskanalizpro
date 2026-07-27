"use client";

import { motion } from "framer-motion";
import {
  Bitcoin,
  ChartCandlestick,
  CircleDollarSign,
  Coins,
  Gem,
  Landmark,
  LineChart,
  Timer,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const markets = [
  {
    icon: CircleDollarSign,
    symbol: "USD/TRY",
    name: "Amerikan Doları",
    price: "32.84",
    change: "+0.42%",
    positive: true,
    trend: [30, 44, 38, 54, 48, 68],
  },
  {
    icon: Landmark,
    symbol: "EUR/TRY",
    name: "Euro",
    price: "35.61",
    change: "+0.28%",
    positive: true,
    trend: [42, 36, 48, 44, 62, 58],
  },
  {
    icon: Gem,
    symbol: "Gram Altın",
    name: "Altın Piyasası",
    price: "2.456",
    change: "+1.14%",
    positive: true,
    trend: [32, 46, 52, 50, 68, 78],
  },
  {
    icon: LineChart,
    symbol: "BIST100",
    name: "Borsa İstanbul",
    price: "10.842",
    change: "-0.31%",
    positive: false,
    trend: [72, 66, 58, 62, 48, 42],
  },
  {
    icon: Bitcoin,
    symbol: "Bitcoin",
    name: "BTC/USD",
    price: "68.420",
    change: "+2.18%",
    positive: true,
    trend: [38, 52, 48, 64, 58, 82],
  },
  {
    icon: Coins,
    symbol: "Ethereum",
    name: "ETH/USD",
    price: "3.690",
    change: "-0.74%",
    positive: false,
    trend: [64, 58, 62, 46, 40, 36],
  },
];

const candles = [
  { top: 18, body: 46, positive: true },
  { top: 28, body: 34, positive: false },
  { top: 14, body: 54, positive: true },
  { top: 38, body: 28, positive: false },
  { top: 24, body: 60, positive: true },
  { top: 12, body: 48, positive: true },
  { top: 34, body: 36, positive: false },
  { top: 20, body: 66, positive: true },
  { top: 26, body: 42, positive: false },
  { top: 10, body: 72, positive: true },
  { top: 30, body: 46, positive: true },
  { top: 18, body: 62, positive: true },
];

const summary = [
  { label: "USD", price: "32.84", change: "+0.42%", positive: true },
  { label: "EUR", price: "35.61", change: "+0.28%", positive: true },
  { label: "Gold", price: "2.456", change: "+1.14%", positive: true },
  { label: "BTC", price: "68.420", change: "-0.74%", positive: false },
];

const stats = [
  { label: "Active Markets", value: "24+" },
  { label: "Updated Every", value: "1 sec" },
  { label: "AI Signals", value: "245" },
  { label: "Market Accuracy", value: "98.7%" },
];

const filters = ["1D", "1W", "1M", "6M", "1Y"];

export default function MarketTicker() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-[#050b18] py-28 text-white sm:py-32">
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.34, 0.68, 0.34],
          scale: [1, 1.14, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-20 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -34, 0],
          y: [0, 22, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-24 -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/12 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,233,.14),transparent_32%),linear-gradient(180deg,#050b18_0%,#081321_48%,#050b18_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:78px_78px] opacity-20"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl">
            <ChartCandlestick size={18} className="text-cyan-300" />
            Canlı Finans Merkezi
          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Piyasaları Gerçek Zamanlı Takip Edin
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Risk Analiz platformu; döviz, altın, borsa, kripto ve faiz
            piyasalarını tek ekranda takip etmenizi sağlar.
          </p>
        </motion.header>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {markets.map((market, index) => (
            <MarketCard key={market.symbol} market={market} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-300/25 via-white/10 to-blue-500/20 p-px shadow-[0_34px_110px_rgba(8,47,73,.34)]"
        >
          <div className="rounded-[1.95rem] border border-white/10 bg-slate-950/72 p-5 backdrop-blur-2xl sm:p-7">
            <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold text-cyan-300">
                  TradingView Önizleme Paneli
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Global Piyasa Radarı
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter, index) => (
                  <button
                    key={filter}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-sm font-bold transition hover:border-cyan-300/60 hover:text-cyan-200 ${
                      index === 0
                        ? "border-cyan-300/40 bg-cyan-400/10 text-cyan-200"
                        : "border-white/10 bg-white/[0.04] text-slate-400"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
              <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"
                />

                <div className="relative flex h-[320px] items-end gap-3 sm:gap-5">
                  {candles.map((candle, index) => (
                    <motion.div
                      key={`${candle.top}-${index}`}
                      initial={{ opacity: 0, scaleY: 0.35 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.55,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="flex h-full flex-1 origin-bottom items-center justify-end"
                    >
                      <div className="relative h-full w-full max-w-8">
                        <div
                          className="absolute left-1/2 w-px -translate-x-1/2 bg-slate-500/70"
                          style={{
                            top: `${candle.top}%`,
                            height: `${Math.max(candle.body + 18, 34)}%`,
                          }}
                        />
                        <div
                          className={`absolute left-1/2 w-full -translate-x-1/2 rounded-md shadow-[0_0_24px_rgba(34,211,238,.18)] ${
                            candle.positive
                              ? "bg-gradient-to-t from-cyan-500 to-cyan-200"
                              : "bg-gradient-to-t from-red-500 to-rose-300"
                          }`}
                          style={{
                            top: `${candle.top + 10}%`,
                            height: `${candle.body}%`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="text-lg font-black text-white">
                    Market Summary
                  </h4>
                  <Timer size={19} className="text-cyan-300" />
                </div>

                <div className="space-y-4">
                  {summary.map((item, index) => (
                    <SummaryRow key={item.label} item={item} index={index} />
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-2xl transition hover:border-cyan-300/30 hover:shadow-[0_24px_70px_rgba(8,145,178,.18)]"
            >
              <p className="text-sm font-bold text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-black text-cyan-300">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketCard({
  market,
  index,
}: {
  market: {
    icon: LucideIcon;
    symbol: string;
    name: string;
    price: string;
    change: string;
    positive: boolean;
    trend: number[];
  };
  index: number;
}) {
  const Icon = market.icon;
  const TrendIcon = market.positive ? TrendingUp : TrendingDown;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cyan-300/25 via-white/10 to-blue-500/20 p-px"
    >
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.46, 0.18], scale: [1, 1.15, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        className="absolute right-6 top-6 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl"
      />

      <div className="relative h-full rounded-[1.7rem] border border-white/10 bg-slate-950/72 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-2xl transition group-hover:border-cyan-300/30 group-hover:bg-slate-950/58 group-hover:shadow-[0_24px_80px_rgba(8,145,178,.2)]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
              <Icon size={28} />
            </span>

            <div>
              <h3 className="text-xl font-black text-white">
                {market.symbol}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{market.name}</p>
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-black ${
              market.positive
                ? "bg-emerald-400/10 text-emerald-300"
                : "bg-red-400/10 text-red-300"
            }`}
          >
            <TrendIcon size={15} />
            {market.change}
          </span>
        </div>

        <div className="mt-7 flex items-end justify-between gap-5">
          <p className="text-4xl font-black text-white">{market.price}</p>
          <MiniTrend trend={market.trend} positive={market.positive} />
        </div>
      </div>
    </motion.article>
  );
}

function SummaryRow({
  item,
  index,
}: {
  item: {
    label: string;
    price: string;
    change: string;
    positive: boolean;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-black text-white">{item.label}</p>
          <p className="mt-1 text-sm text-slate-400">{item.price}</p>
        </div>

        <div className="text-right">
          <p
            className={`text-sm font-black ${
              item.positive ? "text-emerald-300" : "text-red-300"
            }`}
          >
            {item.change}
          </p>
          <MiniTrend
            trend={item.positive ? [24, 42, 34, 52, 48, 66] : [66, 54, 58, 42, 36, 30]}
            positive={item.positive}
            compact
          />
        </div>
      </div>
    </motion.div>
  );
}

function MiniTrend({
  trend,
  positive,
  compact = false,
}: {
  trend: number[];
  positive: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-end gap-1 ${compact ? "mt-2 h-8 w-20" : "h-12 w-24"}`}
      aria-hidden="true"
    >
      {trend.map((height, index) => (
        <motion.span
          key={`${height}-${index}`}
          initial={{ height: 4 }}
          whileInView={{ height: `${height}%` }}
          transition={{ delay: index * 0.04, duration: 0.45 }}
          viewport={{ once: true }}
          className={`flex-1 rounded-full ${
            positive
              ? "bg-gradient-to-t from-cyan-500 to-emerald-300"
              : "bg-gradient-to-t from-red-500 to-rose-300"
          }`}
        />
      ))}
    </div>
  );
}
