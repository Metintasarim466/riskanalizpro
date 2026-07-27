"use client";

import { useEffect, useRef } from "react";

export default function TradingChart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "tradingview-widget-container";

    const chart = document.createElement("div");
    chart.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      support_host: "https://www.tradingview.com",
    });

    wrapper.appendChild(chart);
    wrapper.appendChild(script);
    container.current.appendChild(wrapper);
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] h-[650px]">
          <div ref={container} className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}