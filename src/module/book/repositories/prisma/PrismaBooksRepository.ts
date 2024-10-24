import { Prisma, Book } from "@prisma/client";
import { IBooksRepository, IUpdateBookDTO } from "../IBooksRepository";
import { prisma } from "../../../../shared/infra/lib";


export class PrismaBooksRepository implements IBooksRepository {

    async createBook(data: Prisma.BookCreateInput): Promise<Book> {
        const bookCreated = await prisma.book.create({data})

        return bookCreated
    }


    async listBooks(): Promise<Book[]> {
        return await prisma.book.findMany({
            include: {
                authors: true
            }
        })
    }

    async detailBook(id: string): Promise<Book | any> {
        const book = await prisma.book.findUnique({
            where: {
                id
            },
            include: {
                authors: {
                    select: {
                        authorId: true,
                        assignedAt: true,
                        assignedBy: true,

                        author: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })

        return book
    }

    async deleteBook(id: string): Promise<any> {
        return await prisma.book.delete({where: {
            id
        }})
    }

    async findBookByName(title: string): Promise<Book | any> {
        return await prisma.book.findFirst({where: {
            title
        }})
    }

    async findBookById(id: string): Promise<Book | any> {
        const book = await prisma.book.findUnique({where: {
            id
        }})

        return book
    }

    async updateBook({ bookId, titleUpdated, pageUpdated }: IUpdateBookDTO): Promise<Book | any> {
        const book = await prisma.book.update({
            where: {id: bookId},
            data: {
                title: titleUpdated,
                page: pageUpdated
            }
        })

        return book
    }

}