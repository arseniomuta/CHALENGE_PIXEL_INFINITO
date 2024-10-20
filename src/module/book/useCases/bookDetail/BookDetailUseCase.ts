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

    async execute(title: string): Promise<Book | any>{
        const bookDetail = await this.booksRepository.detailBook(title)

        if(!bookDetail){
            throw new BookNotFoundedError()
        }

        return bookDetail
    }
}