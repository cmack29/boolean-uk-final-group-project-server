-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "trainerId" INTEGER;

-- CreateTable
CREATE TABLE "Trainer" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Trainer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
