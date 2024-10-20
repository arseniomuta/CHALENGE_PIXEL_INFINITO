import { Book, Prisma } from "@prisma/client";

export interface IUpdateBookDTO {
    bookId: string
    titleUpdated: string
    pageUpdated: string
}

export interface IBooksRepository {
    createBook(data: Prisma.BookCreateInput): Promise<Book>
    listBooks() : Promise<Book[]>
    detailBook(title: string): Promise<Book | any>
    deleteBook(id: string): Promise<null>
    findBookByName(title: string): Promise<Book | any>
    updateBook({bookId, titleUpdated, pageUpdated}: IUpdateBookDTO): Promise<Book | any>
    findBookById(id: string): Promise<Book | any>
}