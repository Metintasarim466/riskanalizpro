"use client";

import { Bitcoin, Coins, TrendingUp, Landmark } from "lucide-react";

const cards = [
  {
    title: "Bitcoin",
    value: "$108,245",
    change: "+2.45%",
    icon: Bitcoin,
    color: "text-orange-400",
  },
  {
    title: "Ethereum",
    value: "$6,245",
    change: "+1.84%",
    icon: Coins,
    color: "text-cyan-400",
  },
  {
    title: "NASDAQ",
    value: "22,648",
    change: "+0.94%",
    icon: TrendingUp,
    color: "text-green-400",
  },
  {
    title: "Gold",
    value: "$2,445",
    change: "-0.24%",
    icon: Landmark,
    color: "text-yellow-400",
  },
];

export default function MarketOverview() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-5xl font-black">
          Market Overview
        </h2>

        <p className="mt-4 text-gray-400">
          Global market performance
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl hover:border-cyan-500/40 transition"
              >

                <Icon className={`h-10 w-10 ${card.color}`} />

                <h3 className="mt-6 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-4xl font-black">
                  {card.value}
                </p>

                <p className="mt-2 text-green-400">
                  {card.change}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}