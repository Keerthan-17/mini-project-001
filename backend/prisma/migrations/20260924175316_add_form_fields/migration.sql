/*
  Warnings:

  - Added the required column `address` to the `FormSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `FormSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `FormSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `FormSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FormSubmission" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
