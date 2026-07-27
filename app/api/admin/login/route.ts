import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!admin.active) {
  return NextResponse.json(
    {
      error: "Hesap pasif.",
    },
    {
      status: 403,
    }
  );
}

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatch) {
      return NextResponse.json(
        {
          error: "E-posta veya şifre hatalı",
        },
        {
          status: 401,
        }
      );
    }

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin_session", admin.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.error("Admin login hatası:", error);

    return NextResponse.json(
      {
        error: "Giriş sırasında hata oluştu",
      },
      {
        status: 500,
      }
    );
  }
}