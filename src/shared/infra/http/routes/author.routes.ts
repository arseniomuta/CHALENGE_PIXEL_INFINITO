import { Router } from "express";
import { CreateAuthorController } from "../../../../module/author/useCase/createAuthorUseCase/CreateAuthorController";
import { ListAuthorsController } from "../../../../module/author/useCase/listAuthorsUseCase/ListAuthorsController";
import { DeleteAuthorController } from "../../../../module/author/useCase/deleteAuthorUseCase/DeleteAuthorController";
import { AuthorDetailController } from "../../../../module/author/useCase/detailAuthor/AuthorDetailController";
import { UpdateAuthorController } from "../../../../module/author/useCase/updateAuthor/UpdateAuthorController";
import { RelationAuthorBookController } from "../../../../module/author/useCase/relationAuthorToBook/RelationAuthorToBookController";
import { ensureAuthenticated } from "../midlleware/ensureAuthenticated";

const createAuthorController = new CreateAuthorController()
const listAuthorsController = new ListAuthorsController()
const deleteAuthorController = new DeleteAuthorController()
const authorDetailController = new AuthorDetailController()
const authorUpdatedController = new UpdateAuthorController()
const relationAuthorToBookController = new RelationAuthorBookController()

export const authorRoutes = Router()

authorRoutes.post("/author", ensureAuthenticated ,createAuthorController.handle)
authorRoutes.get("/authors" ,listAuthorsController.handle)
authorRoutes.delete("/author/:id", ensureAuthenticated ,deleteAuthorController.handle)
authorRoutes.get("/authorDetail/:name", authorDetailController.handle)
authorRoutes.patch("/updateAuthor/:authorId",  ensureAuthenticated ,authorUpdatedController.handle)
authorRoutes.post("/relationAuthorBook",  ensureAuthenticated ,relationAuthorToBookController.handle)