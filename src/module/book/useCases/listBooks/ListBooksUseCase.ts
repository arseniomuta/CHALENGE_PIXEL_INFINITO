import { injectable, inject } from "tsyringe"
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { Book } from "@prisma/client";
import { BooksNotFounded } from "../../../../shared/errors/BooksNotFounded";

@injectable()
export class ListBooksUseCase {

    constructor(
        @inject("PrismaBooksRepository")
        private booksRepository: IBooksRepository,
    ){}

    async execute(): Promise<Book[] | any>{
        const books = await this.booksRepository.listBooks()

        if(!books){
            throw new BooksNotFounded()
        }

        return books
    }
}