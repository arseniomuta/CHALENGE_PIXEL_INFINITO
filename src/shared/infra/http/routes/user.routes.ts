import { Router } from "express";
import { AccountUserController } from "../../../../module/account/useCase/accountUserUseCase/AccountUserController";
import { SessionAccountUserController } from "../../../../module/account/useCase/session/SessionUserController";

const accountUserController = new AccountUserController()
const sessionUserAccountController = new SessionAccountUserController()

export const userRoutes = Router()

userRoutes.post("/user", accountUserController.handle)
userRoutes.post("/session", sessionUserAccountController.handle)