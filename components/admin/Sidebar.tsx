"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Mail,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Başvurular",
    href: "/admin/applications",
    icon: FileText,
  },
  {
    title: "Kullanıcılar",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Mesajlar",
    href: "/admin/messages",
    icon: Mail,
  },
  {
    title: "Ayarlar",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const response = await fetch(
      "/api/admin/logout",
      {
        method: "POST",
      }
    );

    if (response.ok) {
      router.push("/admin/login");
      router.refresh();
    }
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
        {menu.map((item) => {
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
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-400 transition hover:text-red-300"
        >
          <LogOut size={18} />

          Çıkış
        </button>
      </div>
    </aside>
  );
}