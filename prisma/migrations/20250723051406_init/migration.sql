/*
  Warnings:

  - You are about to drop the column `courseId` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `publishDate` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `university` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `LessonDetail` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `News` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageUrl` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `translation` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lectures` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ratingCount` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ratingTotal` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `badgeBg` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `detailDescription` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `CourseLearning` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `chapterId` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Made the column `duration` on table `Lesson` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `slug` to the `News` table without a default value. This is not possible if the table is not empty.
  - Made the column `imageUrl` on table `News` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `News` required. This step will fail if there are existing NULL values in that column.
  - Made the column `review` on table `Review` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'INSTRUCTOR');

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_courseId_fkey";

-- DropForeignKey
ALTER TABLE "LessonDetail" DROP CONSTRAINT "LessonDetail_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_courseId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "translation" SET NOT NULL,
ALTER COLUMN "duration" SET NOT NULL,
ALTER COLUMN "lectures" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "ratingCount" SET NOT NULL,
ALTER COLUMN "ratingTotal" SET NOT NULL,
ALTER COLUMN "badgeBg" SET NOT NULL,
ALTER COLUMN "detailDescription" SET NOT NULL;

-- AlterTable
ALTER TABLE "CourseLearning" ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "courseId",
DROP COLUMN "topic",
ADD COLUMN     "chapterId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "duration" SET NOT NULL;

-- AlterTable
ALTER TABLE "News" DROP COLUMN "courseId",
DROP COLUMN "publishDate",
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "university",
ALTER COLUMN "review" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
DROP COLUMN "name",
ADD COLUMN     "fullname" VARCHAR(15) NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "university" TEXT,
ADD COLUMN     "username" VARCHAR(10) NOT NULL;

-- DropTable
DROP TABLE "LessonDetail";

-- CreateTable
CREATE TABLE "Chapter" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "topic" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "News_slug_key" ON "News"("slug");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
