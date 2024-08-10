/*
  Warnings:

  - You are about to drop the `tab_studant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tab_studant";

-- CreateTable
CREATE TABLE "tab_user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "ra" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" VARCHAR(32) NOT NULL,
    "updated_at" VARCHAR(32),

    CONSTRAINT "tab_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tab_user_email_key" ON "tab_user"("email");
