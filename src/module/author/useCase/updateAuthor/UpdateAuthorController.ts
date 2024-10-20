import {Request, Response} from "express"
import { container } from "tsyringe"
import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase"


export class UpdateAuthorController {

  async handle(request: Request, response: Response) :Promise<Response>{
    const {authorId, nameUpdate} = request.body

    const updateAuthorUseCase = container.resolve(UpdateAuthorUseCase)

    const authorUpdated = await updateAuthorUseCase.execute({authorId, nameUpdate})

    return response.json(authorUpdated)
  }
}