/*
  Warnings:

  - You are about to drop the `member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "member";

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "membershipType" TEXT NOT NULL,
    "membershipStatus" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "className" TEXT NOT NULL,
    "classType" TEXT NOT NULL,
    "classStatus" TEXT NOT NULL,
    "classStartDate" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembersOnClasses" (
    "memeberId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "MembersOnClasses_pkey" PRIMARY KEY ("memeberId","classId")
);

-- AddForeignKey
ALTER TABLE "MembersOnClasses" ADD CONSTRAINT "MembersOnClasses_memeberId_fkey" FOREIGN KEY ("memeberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembersOnClasses" ADD CONSTRAINT "MembersOnClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
