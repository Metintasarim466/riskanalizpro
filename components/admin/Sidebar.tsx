"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Mail,
  LogOut,
} from "lucide-react";

type SidebarProps = {
  role: string;
};

export default function Sidebar({
  role,
}: SidebarProps) {
  const pathname = usePathname();

  const menu = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      roles: ["ADMIN", "EDITOR"],
    },
    {
      title: "Başvurular",
      href: "/admin/applications",
      icon: FileText,
      roles: ["ADMIN", "EDITOR"],
    },
    {
      title: "Kullanıcılar",
      href: "/admin/users",
      icon: Users,
      roles: ["ADMIN"],
    },
    {
      title: "Mesajlar",
      href: "/admin/messages",
      icon: Mail,
      roles: ["ADMIN", "EDITOR"],
    },
    {
      title: "Ayarlar",
      href: "/admin/settings",
      icon: Settings,
      roles: ["ADMIN"],
    },
  ];

  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    window.location.href = "/admin/login";
  }

  return (
    <aside className="flex min-h-screen w-72 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-800 p-6">
        <h2 className="text-2xl font-bold">
          Risk Analiz
        </h2>

        <p className="text-sm text-cyan-400">
          Yönetim Paneli
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menu
          .filter((item) =>
            item.roles.includes(role)
          )
          .map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-cyan-500 text-white"
                    : "hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />

                {item.title}
              </Link>
            );
          })}
      </nav>

      <div className="border-t border-slate-800 p-4">
        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-400 transition hover:text-red-300"
        >
          <LogOut size={18} />
          Çıkış
        </button>
      </div>
    </aside>
  );
}