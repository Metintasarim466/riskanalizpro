-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "tcNo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "job" TEXT NOT NULL,
    "company" TEXT,
    "monthlyIncome" REAL NOT NULL,
    "creditAmount" REAL NOT NULL,
    "maturity" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Beklemede',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_tcNo_key" ON "Application"("tcNo");
