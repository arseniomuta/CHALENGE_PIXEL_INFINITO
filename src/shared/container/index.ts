import { container } from "tsyringe";
import { IBooksRepository } from "../../module/book/repositories/IBooksRepository";
import { PrismaBooksRepository} from "../../module/book/repositories/prisma/PrismaBooksRepository";
import { IAuthorRepository } from "../../module/author/repository/IAuthorRepository";
import { PrismaAuthorRepository } from "../../module/author/repository/prisma/PrismaAuthorRepository";
import { IAccountRepository } from "../../module/account/repository/IAccountRepository";
import { PrismaAccountRepository } from "../../module/account/repository/prisma/PrismaAccountRepository";



container.registerSingleton<IBooksRepository>(
    "PrismaBooksRepository",
    PrismaBooksRepository
)

container.registerSingleton<IAuthorRepository>(
    "PrismaAuthorRepository",
    PrismaAuthorRepository
)

container.registerSingleton<IAccountRepository>(
    "PrismaAccountRepository",
    PrismaAccountRepository
)