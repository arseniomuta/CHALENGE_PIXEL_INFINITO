import { inject, injectable } from "tsyringe";
import { IAccountRepository } from "../../repository/IAccountRepository";
import { User } from "@prisma/client";
import { hash } from "bcryptjs";

interface IRequest {
    name: string
    email: string
    password: string
    role: string
}


@injectable()
export class AccountUserUseCase {

    constructor(
        @inject("PrismaAccountRepository")
        private accountRepository: IAccountRepository
    ){}

    async execute({name,email,password,role}: IRequest):  Promise<User | any> {
        const password_hash = await hash(password, 6)

        const verifyIfUserAlreadyExist = await this.accountRepository.findUserByEmail(email)

        if(verifyIfUserAlreadyExist){
            throw new Error("User already exists")
        }

        const userCreated = await this.accountRepository.create({name, email, password: password_hash, role})

        return userCreated
    }
}