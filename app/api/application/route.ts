import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const application = await prisma.application.create({
      data: {
        ...body,
        birthDate: new Date(body.birthDate),
      },
    });

    return NextResponse.json(application);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Başvuru oluşturulamadı." },
      { status: 500 }
    );
  }
}