import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      password,
      role,
    } = body;

    if (
      !name ||
      !email ||
      !password ||
      !role
    ) {
      return NextResponse.json(
        {
          error: "Tüm alanları doldurunuz.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      role !== "ADMIN" &&
      role !== "EDITOR"
    ) {
      return NextResponse.json(
        {
          error: "Geçersiz kullanıcı yetkisi.",
        },
        {
          status: 400,
        }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          error:
            "Şifre en az 6 karakter olmalıdır.",
        },
        {
          status: 400,
        }
      );
    }

    const existingAdmin =
      await prisma.admin.findUnique({
        where: {
          email,
        },
      });

    if (existingAdmin) {
      return NextResponse.json(
        {
          error:
            "Bu e-posta adresi zaten kullanılıyor.",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const admin =
      await prisma.admin.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
        },
      });

    return NextResponse.json(
      {
        success: true,
        admin: {
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Kullanıcı oluşturma hatası:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Kullanıcı oluşturulurken bir hata oluştu.",
      },
      {
        status: 500,
      }
    );
  }
}