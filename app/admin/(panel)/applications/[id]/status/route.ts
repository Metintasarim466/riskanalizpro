import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  request: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await context.params;

    const body = await request.json();

    const { status } = body;

    const allowedStatuses = [
      "Bekliyor",
      "İnceleniyor",
      "Onaylandı",
      "Reddedildi",
    ];

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        {
          error: "Geçersiz başvuru durumu",
        },
        {
          status: 400,
        }
      );
    }

    const application = await prisma.application.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return NextResponse.json({
      success: true,
      application,
    });
  } catch (error) {
    console.error("Başvuru durumu güncelleme hatası:", error);

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