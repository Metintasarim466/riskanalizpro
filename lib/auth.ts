import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";

export async function getAdmin() {
  const cookieStore = await cookies();

  const session =
    cookieStore.get("admin_session");

  if (!session?.value) {
    redirect("/admin/login");
  }

  const admin =
    await prisma.admin.findUnique({
      where: {
        id: session.value,
      },
    });

  if (!admin) {
    redirect("/admin/login");
  }

  if (!admin.active) {
    redirect("/admin/login");
  }

  return admin;
}

export async function requireAdmin() {
  const admin = await getAdmin();

  if (admin.role !== "ADMIN") {
    redirect("/admin");
  }

  return admin;
}