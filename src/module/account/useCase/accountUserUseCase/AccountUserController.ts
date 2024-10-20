import { User } from "@prisma/client";
import {Request, Response} from "express"
import { container } from "tsyringe";
import { AccountUserUseCase } from "./AccountUserUseCase";


export class AccountUserController {

    async handle(request: Request, response: Response) : Promise<User | any>{
        const {name, email, password, role} = request.body

        const accountUserUseCase = container.resolve(AccountUserUseCase)

        const userCreated = await accountUserUseCase.execute({name, email, password, role})

        return response.json(userCreated)
    }
}