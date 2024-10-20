/*
  Warnings:

  - You are about to drop the column `authorId` on the `books` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "BooksOnAuthors" (
    "authorId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    PRIMARY KEY ("authorId", "bookId"),
    CONSTRAINT "BooksOnAuthors_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BooksOnAuthors_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "page" TEXT NOT NULL
);
INSERT INTO "new_books" ("id", "page", "title") SELECT "id", "page", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
