import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBookUseCase } from "./UpdateBookUseCase";


export class UpdateBookController {

  async handle(request: Request, response: Response):Promise<Response>{
    const {bookId, titleUpdated, pageUpdated} = request.body

    const updateBookUseCase = container.resolve(UpdateBookUseCase)

    const book = await updateBookUseCase.execute({bookId, titleUpdated, pageUpdated})

    return response.json(book)
  }
}