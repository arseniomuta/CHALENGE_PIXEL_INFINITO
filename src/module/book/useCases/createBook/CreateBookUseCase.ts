import {injectable, inject} from "tsyringe"
import { IBooksRepository,  } from "../../repositories/IBooksRepository";
import { Book } from "@prisma/client";
import { BookAlreadyExistsError } from "../../../../shared/errors/BookAlreadyExistsError";


interface IRequest {
    title: string
    page: string
    category: string
}

@injectable()
export class CreateBookUseCase {
    constructor(
        @inject("PrismaBooksRepository")
        private booksRepository: IBooksRepository,
    ){}

    async execute({title, page, category}: IRequest): Promise<Book>{

        //console.log("Title", title)

        const verifyIfBookAlreadyExists = await this.booksRepository.findBookByName(title)

        //console.log(verifyIfBookAlreadyExists)

        if(verifyIfBookAlreadyExists){
            throw new BookAlreadyExistsError()
        }

        const book = await this.booksRepository.createBook({title, page , category})
        
        return book
    }
}