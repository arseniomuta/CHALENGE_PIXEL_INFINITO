import { Request, Response } from "express";
import { container } from "tsyringe";
import { RelationAuthorBookUseCase } from "./RelationAuthorToBookUseCase";


export class RelationAuthorBookController {

  async handle(request: Request, response: Response): Promise<Response>{
    const {authorId, bookId, assignedBy} = request.body

    const relationAuthorToBook = container.resolve(RelationAuthorBookUseCase)
    
    await relationAuthorToBook.execute({authorId, bookId, assignedBy})

    return response.send()
  }
}