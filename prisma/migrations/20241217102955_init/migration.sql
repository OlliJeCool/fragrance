-- CreateTable
CREATE TABLE "Tags" (
    "name" TEXT NOT NULL,
    "fragranceId" TEXT,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fragrance" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "scents" TEXT NOT NULL,

    CONSTRAINT "Fragrance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Alternatives" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Alternatives_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Alternatives_B_index" ON "_Alternatives"("B");

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_fragranceId_fkey" FOREIGN KEY ("fragranceId") REFERENCES "Fragrance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fragrance" ADD CONSTRAINT "Fragrance_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Alternatives" ADD CONSTRAINT "_Alternatives_A_fkey" FOREIGN KEY ("A") REFERENCES "Fragrance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Alternatives" ADD CONSTRAINT "_Alternatives_B_fkey" FOREIGN KEY ("B") REFERENCES "Fragrance"("id") ON DELETE CASCADE ON UPDATE CASCADE;
