-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'coreteam', 'partner', 'startup', 'contributor', 'default');

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "linkedin" TEXT,
    "discord" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillSet" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "ideaId" INTEGER,

    CONSTRAINT "SkillSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "ideaId" INTEGER,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ideaId" INTEGER,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'default',
    "email" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "avatar" TEXT,
    "strengthId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Idea" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "solution" TEXT,
    "chat" TEXT,
    "conversation" TEXT,
    "main" TEXT,
    "specs" TEXT,
    "captainId" INTEGER,

    CONSTRAINT "Idea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Skillsets" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SkillToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_UserChampionOfIdea" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_UserInterestedInIdea" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillSet_label_key" ON "SkillSet"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_label_key" ON "Skill"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_label_key" ON "Topic"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_description_key" ON "Topic"("description");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_handle_key" ON "User"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Idea_title_key" ON "Idea"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Idea_problem_key" ON "Idea"("problem");

-- CreateIndex
CREATE UNIQUE INDEX "_Skillsets_AB_unique" ON "_Skillsets"("A", "B");

-- CreateIndex
CREATE INDEX "_Skillsets_B_index" ON "_Skillsets"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToUser_AB_unique" ON "_SkillToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToUser_B_index" ON "_SkillToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicToUser_AB_unique" ON "_TopicToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicToUser_B_index" ON "_TopicToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserChampionOfIdea_AB_unique" ON "_UserChampionOfIdea"("A", "B");

-- CreateIndex
CREATE INDEX "_UserChampionOfIdea_B_index" ON "_UserChampionOfIdea"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserInterestedInIdea_AB_unique" ON "_UserInterestedInIdea"("A", "B");

-- CreateIndex
CREATE INDEX "_UserInterestedInIdea_B_index" ON "_UserInterestedInIdea"("B");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillSet" ADD CONSTRAINT "SkillSet_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "Idea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "Idea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "Idea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_strengthId_fkey" FOREIGN KEY ("strengthId") REFERENCES "SkillSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Idea" ADD CONSTRAINT "Idea_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Idea" ADD CONSTRAINT "Idea_captainId_fkey" FOREIGN KEY ("captainId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Skillsets" ADD CONSTRAINT "_Skillsets_A_fkey" FOREIGN KEY ("A") REFERENCES "SkillSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Skillsets" ADD CONSTRAINT "_Skillsets_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToUser" ADD CONSTRAINT "_SkillToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToUser" ADD CONSTRAINT "_SkillToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicToUser" ADD CONSTRAINT "_TopicToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicToUser" ADD CONSTRAINT "_TopicToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserChampionOfIdea" ADD CONSTRAINT "_UserChampionOfIdea_A_fkey" FOREIGN KEY ("A") REFERENCES "Idea"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserChampionOfIdea" ADD CONSTRAINT "_UserChampionOfIdea_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserInterestedInIdea" ADD CONSTRAINT "_UserInterestedInIdea_A_fkey" FOREIGN KEY ("A") REFERENCES "Idea"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserInterestedInIdea" ADD CONSTRAINT "_UserInterestedInIdea_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
