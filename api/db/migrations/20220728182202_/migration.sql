/*
  Warnings:

  - You are about to drop the `_Skillsets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Skillsets" DROP CONSTRAINT "_Skillsets_A_fkey";

-- DropForeignKey
ALTER TABLE "_Skillsets" DROP CONSTRAINT "_Skillsets_B_fkey";

-- DropTable
DROP TABLE "_Skillsets";

-- CreateTable
CREATE TABLE "_UserSkillsets" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserSkillsets_AB_unique" ON "_UserSkillsets"("A", "B");

-- CreateIndex
CREATE INDEX "_UserSkillsets_B_index" ON "_UserSkillsets"("B");

-- AddForeignKey
ALTER TABLE "_UserSkillsets" ADD CONSTRAINT "_UserSkillsets_A_fkey" FOREIGN KEY ("A") REFERENCES "SkillSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserSkillsets" ADD CONSTRAINT "_UserSkillsets_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
