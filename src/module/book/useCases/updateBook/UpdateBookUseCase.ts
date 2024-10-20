import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { Book } from "@prisma/client";


interface IRequest {
  bookId: string
  titleUpdated: string
  pageUpdated: string
}


@injectable()
export class UpdateBookUseCase {

  constructor(
    @inject("PrismaBooksRepository")
    private booksRepository: IBooksRepository
  ){}

  async execute({bookId, titleUpdated, pageUpdated}: IRequest): Promise<Book | any>{
    const book = await this.booksRepository.updateBook({bookId, titleUpdated, pageUpdated})
    console.log("Book", book)
    return book
  }
}
