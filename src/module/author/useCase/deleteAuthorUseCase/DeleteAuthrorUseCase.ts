import { inject, injectable } from "tsyringe";
import { IAuthorRepository } from "../../repository/IAuthorRepository";
import { AuthorNotFoundError } from "../../../../shared/errors/AuthorNotFound";
import { Author } from "@prisma/client";

@injectable()
export class DeleteAuthorUseCase {

    constructor(
        @inject("PrismaAuthorRepository")
        private authorRepository: IAuthorRepository
    ){}

    async execute(id: string) : Promise<Author | any> {
        const authorExists = await this.authorRepository.findById(id)

        console.log("Yes", authorExists)

        if(!authorExists){
            throw new AuthorNotFoundError(id)
        }

         await this.authorRepository.deleteAuthor(id)
    }
}