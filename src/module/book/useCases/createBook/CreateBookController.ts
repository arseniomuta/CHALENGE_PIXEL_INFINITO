import {Request, Response} from "express"
import { container } from "tsyringe"
import { CreateBookUseCase } from "./CreateBookUseCase"
import { BookAlreadyExistsError } from "../../../../shared/errors/BookAlreadyExistsError";


export class CreateBookController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {title, page, category} = request.body
        
        //console.log("Title", title)

        if (!title || typeof title !== 'string') {
            return response.status(400).json({ message: "Titulo é obrigatório e deve ser uma string válida." });
        }
        
        if (!page || typeof page !== 'string') {
            return response.status(400).json({ message: "Pagina é obrigatório e deve ser uma string válida." });
        }
        
        try {

            const createBookUseCase = container.resolve(CreateBookUseCase)
            const bookCreated = await createBookUseCase.execute({title, page, category})
            console.log("Book", bookCreated)
            return response.status(201).json({ 
                message: "Livro criado com sucesso.",
                bookCreated
            });

        }catch(err){
            if(err instanceof BookAlreadyExistsError){
                return response.status(409).json({ message: err.message });
            }

            return response.status(500).json({ message: "Erro interno do servidor" });
        }

        
    }
}