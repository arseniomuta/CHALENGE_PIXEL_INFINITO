import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { Book } from "@prisma/client";
import { BookNotFoundedError } from "../../../../shared/errors/BookNotFounded";




@injectable()
export class BookDetailUseCase {
    constructor(
        @inject("PrismaBooksRepository")
        private booksRepository: IBooksRepository
    ){}

    async execute(id: string): Promise<Book | any>{
        const bookDetail = await this.booksRepository.detailBook(id)

        if(!bookDetail){
            throw new BookNotFoundedError()
        }

        return bookDetail
    }
}