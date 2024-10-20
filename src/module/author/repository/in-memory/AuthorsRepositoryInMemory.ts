import { Prisma, Author } from "@prisma/client";
import { IAuthorRepository, IRelationAuthorToBookDTO, IUpdateAuthorDTO } from "../IAuthorRepository";
import { randomUUID } from "crypto";


export class AuthorsRepositoryInMemory implements IAuthorRepository {
  public authors: Author[] = []

  async create(data: Prisma.AuthorCreateInput): Promise<Author | null> {
    const createAuthor : Author = {
      id: data.id ?? randomUUID(),
      name: data.name,
    }

    this.authors.push(createAuthor)

    return createAuthor
  }

  async list(): Promise<Author[] | any> {
    return this.authors
  }

  async deleteAuthor(id: string): Promise<any> {
  const authorIndex = this.authors.findIndex((author) => author.id === id);

    if (authorIndex === -1) {
      throw new Error("Author not found");
    }

    this.authors.splice(authorIndex, 1)
  }

  async authorId(id: string): Promise<Author | any> {
    return this.authors.findIndex((author)=> author.id === id)
  }

  async findAuthorByName(nameAuthor: string): Promise<Author | any> {
    return this.authors.find((n) => n.name === nameAuthor)
  }

  async authorDetail(name: string): Promise<Author | any> {
    return this.authors
  }

  async updateAuthor({ authorId, nameUpdate }: IUpdateAuthorDTO): Promise<Author | any> {
    return this.authors
  }

  async relationAuthorToBook({ authorId, bookId, assignedBy }: IRelationAuthorToBookDTO): Promise<any> {
    return this.authors
  }

  async findById(authorId: string): Promise<Author | any> {
    return this.authors.find((author) => author.id === authorId)
  }

}