/*
  Warnings:

  - You are about to drop the column `maturity` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `tcNo` on the `Application` table. All the data in the column will be lost.
  - Added the required column `consentAccepted` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creditType` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `installment` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kvkkAccepted` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tcKimlik` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workYears` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "tcKimlik" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "job" TEXT NOT NULL,
    "company" TEXT,
    "employment" TEXT NOT NULL,
    "workYears" INTEGER NOT NULL,
    "monthlyIncome" REAL NOT NULL,
    "creditType" TEXT NOT NULL,
    "creditAmount" REAL NOT NULL,
    "installment" INTEGER NOT NULL,
    "kvkkAccepted" BOOLEAN NOT NULL,
    "consentAccepted" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Bekliyor',
    "riskScore" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Application" ("birthDate", "company", "createdAt", "creditAmount", "email", "fullName", "id", "job", "monthlyIncome", "phone", "status", "updatedAt") SELECT "birthDate", "company", "createdAt", "creditAmount", "email", "fullName", "id", "job", "monthlyIncome", "phone", "status", "updatedAt" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
CREATE UNIQUE INDEX "Application_tcKimlik_key" ON "Application"("tcKimlik");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
