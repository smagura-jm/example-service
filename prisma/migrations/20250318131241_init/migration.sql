-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL,
    "first_name" VARCHAR(64) NOT NULL,
    "middle_name" VARCHAR(64),
    "last_name" VARCHAR(64) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);
