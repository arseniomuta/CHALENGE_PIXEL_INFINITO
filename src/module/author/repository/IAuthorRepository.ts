import { Author, Prisma } from "@prisma/client";

export interface IUpdateAuthorDTO {
    authorId: string
    nameUpdate: string
}

export interface IRelationAuthorToBookDTO {
    authorId: string
    bookId: string
    assignedBy: string
}

export interface IAuthorRepository {
    create(data: Prisma.AuthorCreateInput): Promise<Author | null>
    list(): Promise<Author[] | any>
    deleteAuthor(id: string): Promise<any>
    authorId(id: string): Promise<Author | null>
    findAuthorByName(nameAuthor: string): Promise<Author | null>
    authorDetail(id: string): Promise<Author | null>
    updateAuthor({authorId, nameUpdate}: IUpdateAuthorDTO): Promise<Author | any>
    relationAuthorToBook({authorId, bookId, assignedBy}: IRelationAuthorToBookDTO): Promise<any>
    findById(authorId: string):Promise< Author | any>
}