-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "Repeats" AS ENUM ('Weekly', 'First', 'Last', 'Odd', 'Even', 'Fourth');

-- CreateEnum
CREATE TYPE "WeekDay" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateEnum
CREATE TYPE "Topic" AS ENUM ('Steps', 'Traditions', 'Speaker', 'Free', 'Open', 'Work', 'DailyInventarization', 'WeeklyInventarization', 'Service', 'Sponsorship', 'LivingClean', 'QA', 'DailyMeditation', 'Relationships', 'Theme', 'Defects', 'SelfAnalysis');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('Brestskaya', 'Vitebskaya', 'Gomelskaya', 'Grodnenskaya', 'Minskaya', 'Mogilevskaya');

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "established" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" "State" NOT NULL,
    "street" TEXT NOT NULL,
    "room" TEXT,
    "comments" TEXT,
    "transport" TEXT,
    "photoUrl" TEXT,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coords" geography(Point, 4326) NOT NULL,
    "addressId" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Day" (
    "id" TEXT NOT NULL,
    "name" "WeekDay" NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meeting" (
    "id" TEXT NOT NULL,
    "start" TIME NOT NULL,
    "end" TIME NOT NULL,
    "topics" "Topic"[],
    "repeats" "Repeats" NOT NULL DEFAULT 'Weekly',
    "dayId" TEXT NOT NULL,

    CONSTRAINT "Meeting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Address_groupId_key" ON "Address"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_addressId_key" ON "Location"("addressId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE CASCADE ON UPDATE CASCADE;
