/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Author";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Book";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
