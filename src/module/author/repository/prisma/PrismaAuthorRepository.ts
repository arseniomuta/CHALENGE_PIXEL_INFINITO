import { Prisma, Author } from "@prisma/client";
import { IAuthorRepository, IRelationAuthorToBookDTO, IUpdateAuthorDTO } from "../IAuthorRepository";
import { prisma } from "../../../../shared/infra/lib";


export class PrismaAuthorRepository implements IAuthorRepository {
    
    async create(data: Prisma.AuthorCreateInput): Promise<Author | null> {
        const author = await prisma.author.create({data})

        return author
    }

    async authorId(id: string): Promise<Author | null> {
        const author = await prisma.author.findUnique({
            where: {
                id
            }
        })

        return author 
    }

    async list(): Promise<Author[] | any> {
        const allAuthors = await prisma.author.findMany({
            include: {
                books: true
            }
        })

        return allAuthors
    }

    async deleteAuthor(id: string): Promise<any> {
        return await prisma.author.delete({
            where: {
                id
            }
        })
    }

    async findAuthorByName(nameAuthor: string): Promise<Author | null> {
        const authorName = await prisma.author.findFirst({where: {
            name: nameAuthor
        }})

        return authorName
    }

    async authorDetail(id: string): Promise<Author | null> {
        const authorDetail = await prisma.author.findUnique({
            where: {
                id: id
            },
            include: {
                books: {
                    select: {
                        bookId: true,
                        assignedAt: true,
                        assignedBy: true,
                        booK: {
                            select: {
                                title: true
                            }
                        }
                    }
                }
            }
        })

        return authorDetail
    }

    async updateAuthor({ authorId, nameUpdate }: IUpdateAuthorDTO): Promise<Author | any> {
        const  updateAuthor = await prisma.author.update({
            where: {id: authorId},
            data: {
                name: nameUpdate
            }
        })

        return updateAuthor
    }
    
    async relationAuthorToBook({authorId, bookId, assignedBy}:IRelationAuthorToBookDTO): Promise<any> {
        return await prisma.booksOnAuthors.create({data: {
            authorId,
            bookId,
            assignedBy
        }})
    }

    async findById(authorId: string): Promise<Author | any> {
        const author = await prisma.author.findUnique({where: {
            id: authorId
        }})

        return author
    }
    
}