"use client";

import PortfolioChart from "./PortfolioChart";

export default function DashboardCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-400">
            Portfolio Balance
          </p>

          <h2 className="mt-2 text-5xl font-black">
            $1,248,430
          </h2>

          <p className="mt-2 text-green-400">
            ▲ +18.46%
          </p>

        </div>

      </div>

      <div className="mt-10">
        <PortfolioChart />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-slate-900 p-5">

          <p className="text-gray-400">
            Today's Profit
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-400">
            +$14,210
          </h3>

        </div>

        <div className="rounded-xl bg-slate-900 p-5">

          <p className="text-gray-400">
            Active Assets
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            18
          </h3>

        </div>

      </div>

    </div>
  );
}