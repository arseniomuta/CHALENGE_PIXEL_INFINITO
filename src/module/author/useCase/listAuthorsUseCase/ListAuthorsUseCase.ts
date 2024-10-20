import { inject, injectable } from "tsyringe";
import { IAuthorRepository } from "../../repository/IAuthorRepository";
import { Author } from "@prisma/client";
import { AuthorsNotFounded } from "../../../../shared/errors/AuthorsNotFounded";



@injectable()
export class ListAuthorsUseCase {

    constructor(
        @inject("PrismaAuthorRepository")
        private authorRepository: IAuthorRepository
    ){}

    async execute(): Promise<Author[] | any>{
        const authors = await this.authorRepository.list()

        if(!authors){
            throw new AuthorsNotFounded()
        }

        return authors
    }
}