import { Router } from "express";
import { routeBook } from "./book.routes";
import { authorRoutes } from "./author.routes";
import { userRoutes } from "./user.routes";


export const router = Router()

router.use(routeBook)
router.use(authorRoutes)
router.use(userRoutes)