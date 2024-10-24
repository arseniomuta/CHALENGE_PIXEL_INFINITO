import {Request, Response} from "express"
import { container } from "tsyringe"
import { BookDetailUseCase } from "./BookDetailUseCase"
import { BookNotFoundedError } from "../../../../shared/errors/BookNotFounded"



export class BookDetailController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {title} = request.params

        try {

            const bookDetailUseCase = container.resolve(BookDetailUseCase)
            const book = await bookDetailUseCase.execute(title)

            return response.status(200).json(book)
        }catch(err){
            if(err instanceof BookNotFoundedError){
                return response.status(404).json({ message: err.message });
            }

            return response.status(500).json({ message: "Erro interno do servidor" });
        }

    }
}