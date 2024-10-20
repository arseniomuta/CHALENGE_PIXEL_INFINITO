import {Request, Response} from "express"
import { container } from "tsyringe"
import { DeleteBookUseCase } from "./DeleteBookUseCase"
import { BookNotFoundError } from "../../../../shared/errors/BookNotFound"

export class DeleteBookController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.body

        if (!id) {
            return response.status(400).json({ message: "ID do autor é obrigatório." });
        }

        try{
            const deleteBookUseCase = container.resolve(DeleteBookUseCase)
            
            await deleteBookUseCase.execute(id)

            return response.send()
        }catch(err){
            if(err instanceof BookNotFoundError){
                return response.status(404).json({ message: err.message });
            }
            return response.status(500).json({ message: "Erro interno do servidor" });
        }
    }
}