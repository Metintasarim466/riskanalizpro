import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function getCurrentAdmin() {
  const cookieStore = await cookies();

  const session = cookieStore.get("admin_session");

  if (!session?.value) {
    return null;
  }

  const admin = await prisma.admin.findUnique({
    where: {
      id: session.value,
    },
  });

  if (!admin) {
    return null;
  }

  if (!admin.active) {
    return null;
  }

  return admin;
}

export async function requireAdmin() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  return admin;
}

export async function requireRole(
  roles: string[]
) {
  const admin = await requireAdmin();

  if (!roles.includes(admin.role)) {
    redirect("/admin");
  }

  return admin;
}

export async function isAdmin() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    return false;
  }

  return admin.role === "ADMIN";
}