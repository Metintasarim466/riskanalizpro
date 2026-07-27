import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import { prisma } from "@/lib/prisma";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();

  const session = cookieStore.get(
    "admin_session"
  );

  if (!session?.value) {
    redirect("/admin/login");
  }

  const admin = await prisma.admin.findUnique({
    where: {
      id: session.value,
    },
  });

  if (!admin) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar role={admin.role} />

      <div className="flex flex-1 flex-col">
        <Header
  admin={{
    name: admin.name,
    email: admin.email,
  }}
/>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}