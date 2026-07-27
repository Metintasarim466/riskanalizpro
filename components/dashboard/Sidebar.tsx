"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  PieChart,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Portfolio",
    icon: Wallet,
    href: "/portfolio",
  },
  {
    title: "Analytics",
    icon: PieChart,
    href: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-slate-950">

      <div className="p-8">

        <h1 className="text-3xl font-black text-cyan-400">
          FINOVA
        </h1>

      </div>

      <nav className="space-y-2 px-4">

        {menus.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 rounded-xl p-4 text-gray-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >

              <Icon size={22} />

              {item.title}

            </Link>

          );

        })}

      </nav>

      <div className="absolute bottom-10 left-4 right-4">

        <button className="flex w-full items-center gap-3 rounded-xl bg-red-500/10 p-4 text-red-400">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}