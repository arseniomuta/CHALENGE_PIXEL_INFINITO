import { Prisma, User } from "@prisma/client";
import { IAccountRepository } from "../IAccountRepository";
import { prisma } from "../../../../shared/infra/lib";


export class PrismaAccountRepository implements IAccountRepository {


    async create(data: Prisma.UserCreateInput): Promise<User | any> {
        const user = await prisma.user.create({data})

        return user
    }

    async findUserById(id: string): Promise<User | any> {
        const userId = await prisma.user.findUnique({
            where: {
                id
            }
        })

        return userId
    }

    async findUserByEmail(email: string): Promise<User | any> {
        const userEmail = await prisma.user.findFirst({where: {email }})

        return userEmail
    }
}