import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthorDetailUseCase } from "./AuthorDetailUseCase";
import { AuthorNotExistsError } from "../../../../shared/errors/AuthorNotExists";


export class AuthorDetailController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {name} = request.body

        if (!name) {
            return response.status(400).json({ message: "O author é obrigatório" });
        }

        try{
            const authorDetailUseCase = container.resolve(AuthorDetailUseCase)

            const authorDetail = await authorDetailUseCase.execute(name)

            return response.status(200).json(authorDetail)            
        }catch(err){

            if(err instanceof AuthorNotExistsError){
                return response.status(404).json({ message: err.message });
            }
            
            return response.status(500).json({ message: "Erro interno do servidor" });

        }
    }
}