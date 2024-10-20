import { Prisma, User } from "@prisma/client";
import { IAccountRepository } from "../IAccountRepository";


export class InMemoryUsersRepository implements IAccountRepository {
    public items: User[] = []

    async create(data: Prisma.UserCreateInput): Promise<User | any> {
        const user = {
            id: 'user-1',
            name: data.name,
            email: data.email,
            password: data.password,
            role: "USER",
            created_at: new Date()
        }

        this.items.push(user) 

        return user
    }

    async findUserByEmail(email: string): Promise<User | any> {
        const user = this.items.find((item) => item.email === email)

        if(!user){
            null
        }

        return user
    }

    async findUserById(id: string): Promise<User | any> {
        const user = this.items.find((item) => item.id == id)

        if(!user){
            null
        }

        return  user
    }

}