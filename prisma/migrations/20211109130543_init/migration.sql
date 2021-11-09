-- CreateTable
CREATE TABLE "member" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "membershipType" TEXT NOT NULL,
    "membershipStatus" TEXT NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);
