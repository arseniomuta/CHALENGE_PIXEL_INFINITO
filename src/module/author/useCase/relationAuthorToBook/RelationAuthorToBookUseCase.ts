import { inject, injectable } from "tsyringe";
import { IAuthorRepository } from "../../repository/IAuthorRepository";


interface IRequest {
  authorId: string
  bookId: string
  assignedBy: string
}


@injectable()
export class RelationAuthorBookUseCase {
  constructor(
    @inject("PrismaAuthorRepository")
    private authorRepository: IAuthorRepository
  ){}

  async execute({authorId,bookId,assignedBy}: IRequest): Promise<any>{
    return this.authorRepository.relationAuthorToBook({authorId, bookId, assignedBy})
  }
}