-- CreateTable
CREATE TABLE "tab_studant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "ra" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" VARCHAR(32) NOT NULL,
    "updated_at" VARCHAR(32),

    CONSTRAINT "tab_studant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tab_studant_email_key" ON "tab_studant"("email");
