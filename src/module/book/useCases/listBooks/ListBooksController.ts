import {Request, response, Response} from "express"
import { container } from "tsyringe"
import { ListBooksUseCase } from "./ListBooksUseCase"
import { BooksNotFounded } from "../../../../shared/errors/BooksNotFounded"



export class ListBooksController {

    async handle(request: Request, response: Response): Promise<Response>{
        

        try{

            const listBooksUseCase = container.resolve(ListBooksUseCase)
            const books = await listBooksUseCase.execute()

            return response.json(books)

        }catch(err){

            if(err instanceof BooksNotFounded){
                return response.status(404).json({ message: err.message });
            }
            return response.status(500).json({ message: "Erro interno do servidor" });

        }

    }
}