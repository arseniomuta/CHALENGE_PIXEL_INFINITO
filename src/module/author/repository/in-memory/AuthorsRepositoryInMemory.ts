import { Prisma, Author } from "@prisma/client";
import { IAuthorRepository, IRelationAuthorToBookDTO, IUpdateAuthorDTO } from "../IAuthorRepository";


export class AuthorsRepositoryInMemory implements IAuthorRepository {
  public authors: Author[] = []

  async create(data: Prisma.AuthorCreateInput): Promise<Author | null> {
    const createAuthor : Author = {
      id: "12345",
      name: "The power of mind"
    }

    this.authors.push(createAuthor)

    return createAuthor
  }

  async list(): Promise<Author[] | any> {
    return this.authors
  }

  async deleteAuthor(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async authorId(id: string): Promise<Author | null> {
    throw new Error("Method not implemented.");
  }

  async findAuthorByName(nameAuthor: string): Promise<Author | null> {
    throw new Error("Method not implemented.");
  }

  async authorDetail(name: string): Promise<Author | null> {
    throw new Error("Method not implemented.");
  }

  async updateAuthor({ authorId, nameUpdate }: IUpdateAuthorDTO): Promise<Author | any> {
    throw new Error("Method not implemented.");
  }

  async relationAuthorToBook({ authorId, bookId, assignedBy }: IRelationAuthorToBookDTO): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async findById(authorId: string): Promise<Author | any> {
    throw new Error("Method not implemented.");
  }

}