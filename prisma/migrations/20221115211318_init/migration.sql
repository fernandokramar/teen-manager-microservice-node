-- CreateEnum
CREATE TYPE "ratingReviews" AS ENUM ('female', 'male');

-- CreateTable
CREATE TABLE "users" (
    "uid" TEXT NOT NULL,
    "address_uid" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "addresses" (
    "uid" TEXT NOT NULL,
    "resides_brazil" BOOLEAN NOT NULL,
    "address" TEXT NOT NULL,
    "number" INTEGER,
    "zipcode" TEXT,
    "state" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "refenrece" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "offenders" (
    "uid" TEXT NOT NULL,
    "address_uid" TEXT,
    "user_uid" TEXT NOT NULL,
    "complement_uid" TEXT,
    "name" TEXT NOT NULL,
    "socialname" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "document" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "ratingReviews" NOT NULL,
    "crea_cras" BOOLEAN NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "offenders_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "complementaries" (
    "uid" TEXT NOT NULL,
    "seizure_date" TIMESTAMP(3) NOT NULL,
    "seizure" TEXT NOT NULL,
    "registry" INTEGER NOT NULL,
    "picture" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "complementaries_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_address_uid_key" ON "users"("address_uid");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_address_uid_fkey" FOREIGN KEY ("address_uid") REFERENCES "addresses"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offenders" ADD CONSTRAINT "offenders_address_uid_fkey" FOREIGN KEY ("address_uid") REFERENCES "addresses"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offenders" ADD CONSTRAINT "offenders_complement_uid_fkey" FOREIGN KEY ("complement_uid") REFERENCES "complementaries"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offenders" ADD CONSTRAINT "offenders_user_uid_fkey" FOREIGN KEY ("user_uid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
