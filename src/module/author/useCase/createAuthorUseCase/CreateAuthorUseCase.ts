import { inject, injectable } from "tsyringe";
import { IAuthorRepository } from "../../repository/IAuthorRepository";
import { Author } from "@prisma/client";
import { AuthorAlreadyExistsError } from "../../../../shared/errors/AuthorAlreadyExistsError";

interface IRequest {
    name: string
}

@injectable()
export class CreateAuthorUseCase {
    constructor(
        @inject("PrismaAuthorRepository")
        private authorRepository: IAuthorRepository
    ){}

    async execute({name}: IRequest): Promise<Author | any> {

        const verifyIfAuthorAlreadyExists = await this.authorRepository.findAuthorByName(name)

        if(verifyIfAuthorAlreadyExists){
            throw new AuthorAlreadyExistsError()
        }

        const author = await this.authorRepository.create({name})

        return author
    }
}