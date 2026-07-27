import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash(
    "Admin123!",
    10
  );

  const admin = await prisma.admin.upsert({
    where: {
      email: "admin@riskanaliz.com.tr",
    },
    update: {
  password: hashedPassword,
  role: "ADMIN",
},
    create: {
      name: "Admin",
      email: "admin@riskanaliz.com.tr",
      password: hashedPassword,
    },
  });

  console.log("Admin oluşturuldu:", admin.email);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });