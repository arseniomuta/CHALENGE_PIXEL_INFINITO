import {Request, Response} from "express"
import { container } from "tsyringe"
import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase"


export class UpdateAuthorController {

  async handle(request: Request, response: Response) :Promise<Response>{
    const {nameUpdate} = request.body
    const {authorId} = request.params

    const updateAuthorUseCase = container.resolve(UpdateAuthorUseCase)

    const authorUpdated = await updateAuthorUseCase.execute({authorId, nameUpdate})

    return response.json(authorUpdated)
  }
}