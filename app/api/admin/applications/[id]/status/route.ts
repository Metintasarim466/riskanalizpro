import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  request: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await context.params;

    const formData = await request.formData();

    const status = formData.get("status");

    if (
      status !== "Bekliyor" &&
      status !== "Onaylandı" &&
      status !== "Reddedildi"
    ) {
      return NextResponse.json(
        {
          error: "Geçersiz durum",
        },
        {
          status: 400,
        }
      );
    }

    await prisma.application.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return NextResponse.redirect(
      new URL(
        `/admin/applications/${id}`,
        request.url
      )
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Başvuru durumu güncellenemedi",
      },
      {
        status: 500,
      }
    );
  }
}