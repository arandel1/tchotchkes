-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "purchase_total" INTEGER NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);
