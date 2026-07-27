"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 p-8">

      <div>

        <h2 className="text-4xl font-black">
          Dashboard
        </h2>

        <p className="mt-2 text-gray-400">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-3">

          <Search size={18} />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />

        </div>

        <button className="rounded-xl bg-slate-900 p-3">
          <Bell />
        </button>

      </div>

    </header>
  );
}