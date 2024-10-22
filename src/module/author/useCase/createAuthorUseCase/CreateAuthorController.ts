import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";
import { AuthorAlreadyExistsError } from "../../../../shared/errors/AuthorAlreadyExistsError";

export class CreateAuthorController {

    async handle(request: Request, response: Response): Promise<Response | any> {
        const { name } = request.body;

        if (!name || typeof name !== 'string') {
            return response.status(400).json({ message: "Nome é obrigatório e deve ser uma string válida." });
        }

        try {
            const createAuthorUseCase = container.resolve(CreateAuthorUseCase);


            const author = await createAuthorUseCase.execute({ name });

    
            return response.status(201).json({ 
                message: "Autor criado com sucesso.",
                author
            });

        } catch (err) {
            if (err instanceof AuthorAlreadyExistsError) {
                return response.status(409).json({ message: err.message });
            }

            return response.status(500).json({ message: "Erro interno do servidor" });
        }
    }
}
