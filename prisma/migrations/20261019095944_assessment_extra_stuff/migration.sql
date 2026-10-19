/*
  Warnings:

  - You are about to drop the `Assignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AssignmentType` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ExerciseCategoryType" AS ENUM ('python', 'c++', 'nodejs');

-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_assignmentTypeId_fkey";

-- DropTable
DROP TABLE "Assignment";

-- DropTable
DROP TABLE "AssignmentType";

-- CreateTable
CREATE TABLE "assessment" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "input" TEXT,
    "expected_output" TEXT,
    "max_score" INTEGER,
    "assessment_category_id" INTEGER,
    "sub_id" INTEGER,

    CONSTRAINT "assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assessment_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "sort_id" INTEGER,
    "type" "ExerciseCategoryType",

    CONSTRAINT "assessment_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assessment_tests" (
    "id" SERIAL NOT NULL,
    "assessment_id" INTEGER,
    "input" TEXT,
    "expected_output" TEXT,
    "points" INTEGER,

    CONSTRAINT "assessment_tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submissions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "assessment_id" INTEGER,
    "submitted_code" TEXT,
    "result" TEXT,
    "score" INTEGER,
    "submitted_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "graded_at" TIMESTAMP(0),
    "graded" INTEGER DEFAULT 0,
    "compile_res" TEXT,
    "test_res" TEXT,
    "test_error" TEXT,

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "assessment_categories_name_key" ON "assessment_categories"("name");

-- AddForeignKey
ALTER TABLE "assessment" ADD CONSTRAINT "assessment_assessment_category_id_fkey" FOREIGN KEY ("assessment_category_id") REFERENCES "assessment_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
