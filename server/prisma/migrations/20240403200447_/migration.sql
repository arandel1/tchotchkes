/*
Warnings:

- You are about to drop the column `purchase_create_date` on the `Orders` table. All the data in the column will be lost.
- You are about to drop the column `purchase_total` on the `Orders` table. All the data in the column will be lost.
- You are about to drop the column `usersId` on the `Orders` table. All the data in the column will be lost.
- You are about to drop the column `rating` on the `Products` table. All the data in the column will be lost.
- The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
- The `id` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
- A unique constraint covering the columns `[userId]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.
- A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
- Added the required column `purchaseDate` to the `Orders` table without a default value. This is not possible if the table is not empty.
- Added the required column `total` to the `Orders` table without a default value. This is not possible if the table is not empty.
- Added the required column `userId` to the `Orders` table without a default value. This is not possible if the table is not empty.

 */
-- DropForeignKey
ALTER TABLE "Orders"
DROP CONSTRAINT "Orders_usersId_fkey";

-- AlterTable
ALTER TABLE "Orders"
DROP COLUMN "purchase_create_date",
DROP COLUMN "purchase_total",
DROP COLUMN "usersId",
ADD COLUMN "purchaseDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN "total" INTEGER NOT NULL,
ADD COLUMN "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Products"
DROP COLUMN "rating";

-- AlterTable
ALTER TABLE "Users"
ADD COLUMN "isAdmin" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "id",
ADD COLUMN "id" UUID NOT NULL DEFAULT gen_random_uuid (),
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE
  "Cart" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "ordersId" INTEGER,
    "usersId" TEXT NOT NULL,
    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
  );

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart" ("userId");

-- CreateIndex
-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users" ("email");

-- AddForeignKey
-- AddForeignKey
-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "Orders" ("id") ON DELETE SET NULL ON UPDATE CASCADE;