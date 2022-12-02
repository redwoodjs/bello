/*
  Warnings:

  - The values [partner,startup] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "BusinessEntityType" AS ENUM ('partner', 'startup');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('admin', 'coreteam', 'contributor', 'default');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'default';
COMMIT;

-- CreateTable
CREATE TABLE "BusinessEntity" (
    "id" SERIAL NOT NULL,
    "type" "BusinessEntityType" NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "BusinessEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BusinessEntityTeam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessEntity_label_key" ON "BusinessEntity"("label");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessEntity_description_key" ON "BusinessEntity"("description");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessEntity_url_key" ON "BusinessEntity"("url");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessEntity_adminId_key" ON "BusinessEntity"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "_BusinessEntityTeam_AB_unique" ON "_BusinessEntityTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_BusinessEntityTeam_B_index" ON "_BusinessEntityTeam"("B");

-- AddForeignKey
ALTER TABLE "BusinessEntity" ADD CONSTRAINT "BusinessEntity_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessEntityTeam" ADD CONSTRAINT "_BusinessEntityTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "BusinessEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessEntityTeam" ADD CONSTRAINT "_BusinessEntityTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
