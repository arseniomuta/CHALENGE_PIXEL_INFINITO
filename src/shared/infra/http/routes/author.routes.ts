import { Router } from "express";
import { CreateAuthorController } from "../../../../module/author/useCase/createAuthorUseCase/CreateAuthorController";
import { ListAuthorsController } from "../../../../module/author/useCase/listAuthorsUseCase/ListAuthorsController";
import { DeleteAuthorController } from "../../../../module/author/useCase/deleteAuthorUseCase/DeleteAuthorController";
import { AuthorDetailController } from "../../../../module/author/useCase/detailAuthor/AuthorDetailController";
import { UpdateAuthorController } from "../../../../module/author/useCase/updateAuthor/UpdateAuthorController";
import { RelationAuthorBookController } from "../../../../module/author/useCase/relationAuthorToBook/RelationAuthorToBookController";

const createAuthorController = new CreateAuthorController()
const listAuthorsController = new ListAuthorsController()
const deleteAuthorController = new DeleteAuthorController()
const authorDetailController = new AuthorDetailController()
const authorUpdatedController = new UpdateAuthorController()
const relationAuthorToBookController = new RelationAuthorBookController()

export const authorRoutes = Router()

authorRoutes.post("/author", createAuthorController.handle)
authorRoutes.get("/authors", listAuthorsController.handle)
authorRoutes.delete("/author", deleteAuthorController.handle)
authorRoutes.get("/authorDetail", authorDetailController.handle)
authorRoutes.patch("/updateAuthor", authorUpdatedController.handle)
authorRoutes.post("/relationAuthorBook", relationAuthorToBookController.handle)