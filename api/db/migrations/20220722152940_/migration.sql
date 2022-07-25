/*
  Warnings:

  - You are about to drop the column `handle` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hashedPassword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_strengthId_fkey";

-- DropIndex
DROP INDEX "User_handle_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "handle",
ADD COLUMN     "hashedPassword" TEXT NOT NULL,
ADD COLUMN     "resetToken" TEXT,
ADD COLUMN     "resetTokenExpiresAt" TIMESTAMP(3),
ADD COLUMN     "salt" TEXT NOT NULL,
ADD COLUMN     "username" TEXT,
ALTER COLUMN "strengthId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_strengthId_fkey" FOREIGN KEY ("strengthId") REFERENCES "SkillSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
