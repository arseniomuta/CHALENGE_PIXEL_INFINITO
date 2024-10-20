import "reflect-metadata"
import { beforeEach, describe ,expect,it} from "vitest";
import { AuthorsRepositoryInMemory } from "../../repository/in-memory/AuthorsRepositoryInMemory";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";


let authorsRepository: AuthorsRepositoryInMemory
let sut: CreateAuthorUseCase

describe("Create a word", () =>{

  beforeEach(() => {
    authorsRepository = new AuthorsRepositoryInMemory(),
    sut = new CreateAuthorUseCase(authorsRepository)
  })

  it("Should be able to create a new author", async () => {
    const author = await sut.execute({
      name: "Stephen"
    })

    expect(author.id).toEqual(expect.any(String))

  })
})