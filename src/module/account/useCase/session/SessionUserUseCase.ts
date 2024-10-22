import { inject, injectable } from "tsyringe";
import { IAccountRepository } from "../../repository/IAccountRepository";
import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AccountUserCaseRequest {
    email: string;
    password: string
}

interface AccountUserCaseResponse {
    user: User
    token: string
}

@injectable()
export class SessionAccountUserUseCase {
    constructor(
        @inject("PrismaAccountRepository")
        private accountRepository: IAccountRepository
    ){}

    async execute({email, password}: AccountUserCaseRequest): Promise<AccountUserCaseResponse | null>{
        const user = await this.accountRepository.findUserByEmail(email)

        if(!user){
            throw new Error("User does not exist")
        }

        const doesPasswordMatches = await compare(password, user.password)

        if(!doesPasswordMatches){
            throw new Error("Password or E-mail wrong")
        }

        const token = sign({}, process.env.JWT_SECRET as string , {
            subject: user.id,
            expiresIn: "1d"
        })

        return {
            token,
            user
        }
    }
}