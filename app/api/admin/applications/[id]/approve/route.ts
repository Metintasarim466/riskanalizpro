import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  const { id } = await context.params;

  await prisma.application.update({
    where: {
      id,
    },
    data: {
      status: "Onaylandı",
    },
  });

  return NextResponse.redirect(
    new URL(`/admin/applications/${id}`, request.url)
  );
}