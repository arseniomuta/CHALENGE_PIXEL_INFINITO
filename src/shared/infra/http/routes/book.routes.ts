import { Router } from "express";
import { CreateBookController } from "../../../../module/book/useCases/createBook/CreateBookController";
import { ListBooksController } from "../../../../module/book/useCases/listBooks/ListBooksController";
import { DeleteBookController } from "../../../../module/book/useCases/deleteBook/DeleteBooksController";
import { BookDetailController } from "../../../../module/book/useCases/bookDetail/BookDetailController";
import { UpdateBookController } from "../../../../module/book/useCases/updateBook/UpdateBookController";
import { ensureAuthenticated } from "../midlleware/ensureAuthenticated";

const createBookController = new CreateBookController()
const listBooksController = new ListBooksController()
const deleteBooksController = new DeleteBookController()
const detailBookController = new BookDetailController()
const updateBookController = new UpdateBookController()

export const routeBook = Router();


routeBook.post("/book", ensureAuthenticated ,createBookController.handle)
routeBook.get("/books" ,listBooksController.handle)
routeBook.delete("/book/:id",  ensureAuthenticated ,deleteBooksController.handle)
routeBook.get("/bookDetail/:title", detailBookController.handle)
routeBook.patch("/updateBook/:id",  ensureAuthenticated ,updateBookController.handle)
