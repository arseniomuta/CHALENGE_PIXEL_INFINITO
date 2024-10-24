import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAuthorUseCase } from "./DeleteAuthrorUseCase";
import { AuthorNotFoundError } from "../../../../shared/errors/AuthorNotFound";

export class DeleteAuthorController {

    async handle(request: Request, response: Response): Promise<Response | any>{
        const {id} = request.params

        if (!id) {
            return response.status(400).json({ message: "ID do autor é obrigatório." });
        }

        const deleteAuthorUseCase = container.resolve(DeleteAuthorUseCase)

        try {
            await deleteAuthorUseCase.execute(id)
            return response.status(204).send()
        }catch(err){
            
            if(err instanceof AuthorNotFoundError){
                return response.status(404).json({ message: err.message });
            }

            return response.status(500).json({ message: "Erro interno do servidor" });
        }

    }
}