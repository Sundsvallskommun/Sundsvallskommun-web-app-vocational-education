/*
  Warnings:

  - You are about to drop the column `Role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Media` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `Role`,
    ADD COLUMN `role` ENUM('USER', 'EDUCATIONCOORDINATOR', 'EDITOR', 'ADMIN') NOT NULL DEFAULT 'USER';
