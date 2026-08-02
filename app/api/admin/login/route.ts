import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          error: "E-posta ve şifre zorunludur.",
        },
        {
          status: 400,
        }
      );
    }

    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!admin) {
      return NextResponse.json(
        {
          error: "E-posta veya şifre hatalı.",
        },
        {
          status: 401,
        }
      );
    }

    if (!admin.active) {
      return NextResponse.json(
        {
          error: "Bu hesap pasif durumdadır.",
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
          error: "E-posta veya şifre hatalı.",
        },
        {
          status: 401,
        }
      );
    }

    await prisma.admin.update({
      where: {
        id: admin.id,
      },
      data: {
        lastLogin: new Date(),
      },
    });

    const response = NextResponse.json({
      success: true,
      message: "Giriş başarılı.",
    });

    response.cookies.set("admin_session", admin.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Admin login hatası:", error);

    return NextResponse.json(
      {
        error: "Sunucu hatası oluştu.",
      },
      {
        status: 500,
      }
    );
  }
}