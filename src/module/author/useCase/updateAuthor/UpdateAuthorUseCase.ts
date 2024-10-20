import { inject, injectable } from "tsyringe";
import { IAuthorRepository } from "../../repository/IAuthorRepository";
import { Author } from "@prisma/client";

interface IRequest {
    authorId: string
    nameUpdate: string
}

@injectable()
export class UpdateAuthorUseCase {

    constructor(
        @inject("PrismaAuthorRepository")
        private authorRepository: IAuthorRepository
    ){}

    async execute({authorId, nameUpdate}: IRequest): Promise<Author | any> {

        const authorUpdated = await this.authorRepository.updateAuthor({authorId, nameUpdate})

        return authorUpdated
    }
}