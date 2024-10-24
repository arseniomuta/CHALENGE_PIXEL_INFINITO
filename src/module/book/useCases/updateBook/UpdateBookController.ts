import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBookUseCase } from "./UpdateBookUseCase";


export class UpdateBookController {

  async handle(request: Request, response: Response):Promise<Response>{
    const {titleUpdated, pageUpdated} = request.body
    const {bookId} = request.params

    const updateBookUseCase = container.resolve(UpdateBookUseCase)

    const book = await updateBookUseCase.execute({bookId, titleUpdated, pageUpdated})

    return response.json(book)
  }
}