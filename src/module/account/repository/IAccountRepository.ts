import { Prisma, User } from "@prisma/client";

export interface IAccountRepository {
    create(data: Prisma.UserCreateInput) :  Promise<User | any>
    findUserById(id: string): Promise<User | any>
    findUserByEmail(email: string) : Promise<User | any>
}