import { Router } from "express";
import { AccountUserController } from "../../../../module/account/useCase/accountUserUseCase/AccountUserController";
import { SessionAccountUserController } from "../../../../module/account/useCase/session/SessionUserController";

const accoutUserController = new AccountUserController()
const sessionUserAccountController = new SessionAccountUserController()

export const userRoutes = Router()

userRoutes.post("/user", accoutUserController.handle)
userRoutes.post("/session", sessionUserAccountController.handle)