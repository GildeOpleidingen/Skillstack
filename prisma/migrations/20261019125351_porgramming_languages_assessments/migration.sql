-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ExerciseCategoryType" ADD VALUE 'typeScript';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'javaScript';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'css';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'less';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'scss';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'json';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'html';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'xml';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'php';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'c#';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'razor';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'markdown';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'java';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'vb';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'coffeescript';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'batch';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'pug';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'f#';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'lua';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'powershell';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'ruby';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'r';
ALTER TYPE "ExerciseCategoryType" ADD VALUE 'objective-c';
