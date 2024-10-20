import {Request, Response} from "express"
import { container } from "tsyringe"
import { SessionAccountUserUseCase } from "./SessionUserUseCase"


export class SessionAccountUserController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body

        const sessionAccountUserUseCase = container.resolve(SessionAccountUserUseCase)

        const user = await sessionAccountUserUseCase.execute({email, password})

        return response.json(user)
    }
}