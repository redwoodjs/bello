-- CreateEnum
CREATE TYPE "IdeaStatus" AS ENUM ('help', 'progress', 'done');

-- AlterTable
ALTER TABLE "Idea" ADD COLUMN     "status" "IdeaStatus" NOT NULL DEFAULT E'help';
