/*
  Warnings:

  - You are about to drop the column `cartId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `img_main` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartId` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cartId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_imagesId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_purchaseId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cartId",
DROP COLUMN "purchaseId",
ADD COLUMN     "img_main" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "cartId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Images";

-- CreateTable
CREATE TABLE "CartItem" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
