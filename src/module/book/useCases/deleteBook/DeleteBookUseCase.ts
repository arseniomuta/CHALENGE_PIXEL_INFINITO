import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { BookNotFoundError } from "../../../../shared/errors/BookNotFound";




@injectable()
export class DeleteBookUseCase {
    constructor(
        @inject("PrismaBooksRepository")
        private booksRepository: IBooksRepository
    ){}

    async execute(id: string): Promise<any> {
        const ifBookExists = await this.booksRepository.findBookById(id)

        if(!ifBookExists){
            throw new BookNotFoundError(id)
        }

        return await this.booksRepository.deleteBook(id)
    }
}