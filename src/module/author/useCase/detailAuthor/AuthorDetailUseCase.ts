import { inject, injectable } from "tsyringe";
import { IAuthorRepository } from "../../repository/IAuthorRepository";
import { Author } from "@prisma/client";
import { AuthorNotExistsError } from "../../../../shared/errors/AuthorNotExists";


@injectable()
export class AuthorDetailUseCase {

    constructor(
        @inject("PrismaAuthorRepository")
        private authorRepository: IAuthorRepository
    ){}

    async execute(name: string): Promise<Author | null>{
        const authorDetail = await this.authorRepository.authorDetail(name)

        //console.log("Detail", authorDetail)
        if(!authorDetail){
            throw new AuthorNotExistsError()
        }

        return authorDetail
    }
}