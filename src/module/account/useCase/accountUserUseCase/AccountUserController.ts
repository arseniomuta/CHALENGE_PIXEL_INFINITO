import {Request, Response} from "express"
import { container } from "tsyringe";
import { AccountUserUseCase } from "./AccountUserUseCase";
import { UserAlreadyExistsError } from "../../../../shared/errors/UserAlreadyExistsError";


export class AccountUserController {

    async handle(request: Request, response: Response) : Promise<Response>{
        const {name, email, password, role} = request.body

        if (!name || typeof name !== 'string') {
            return response.status(400).json({ message: "Nome é obrigatório." });
        }

        if (!email || typeof email !== 'string') {
            return response.status(400).json({ message: "E-mail é obrigatório." });
        }

        if (!password || typeof password !== 'string') {
            return response.status(400).json({ message: "E-mail é obrigatório." });
        }

        try{

            const accountUserUseCase = container.resolve(AccountUserUseCase)

            const userCreated = await accountUserUseCase.execute({name, email, password, role})

            return response.status(201).json({ 
                message: "Usuario criado com sucesso.",
                userCreated
            });

        }catch(err){

            if (err instanceof UserAlreadyExistsError) {
                return response.status(409).json({ message: err.message });
            }
            return response.status(500).json({ message: "Erro interno do servidor" });

        }



    }
}