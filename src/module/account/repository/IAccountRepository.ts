import { Prisma, User } from "@prisma/client";

export interface IAccountRepository {
    create(data: Prisma.UserCreateInput): Promise<User>
    findUserById(id: string): Promise<User | null>
    findUserByEmail(email: string): Promise<User | null>
}