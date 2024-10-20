import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";
import { AuthorsNotFounded } from "../../../../shared/errors/AuthorsNotFounded";



export class ListAuthorsController {

    async handle(request: Request, response: Response): Promise<Response>{
        
        try {
            const listAuthorsUseCase = container.resolve(ListAuthorsUseCase)

            const authors = await listAuthorsUseCase.execute()

            return response.status(200).json(authors)
        } catch(err){

            if(err instanceof AuthorsNotFounded){
                return response.status(404).json({ message: err.message });
            }

            return response.status(500).json({ message: "Erro interno do servidor" });

        }

    }
}