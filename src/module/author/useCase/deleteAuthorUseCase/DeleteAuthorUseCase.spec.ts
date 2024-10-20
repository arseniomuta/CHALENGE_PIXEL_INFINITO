import "reflect-metadata"
import { beforeEach, describe, expect, it } from "vitest";
import { AuthorsRepositoryInMemory } from "../../repository/in-memory/AuthorsRepositoryInMemory";
import { DeleteAuthorUseCase } from "./DeleteAuthrorUseCase";

let authorsRepositoryInMemory: AuthorsRepositoryInMemory;
let deleteAuthorUseCase: DeleteAuthorUseCase;

describe("Delete Author", () => {
  beforeEach(() => {
    authorsRepositoryInMemory = new AuthorsRepositoryInMemory();
    deleteAuthorUseCase = new DeleteAuthorUseCase(authorsRepositoryInMemory);
  });

  it("should be able to delete an author by ID", async () => {
    const author = await authorsRepositoryInMemory.create({
      name: "J.K. Rowling",
    });

    console.log("Author", author)

    expect(authorsRepositoryInMemory.authors).toHaveLength(1);

    await deleteAuthorUseCase.execute(author!.id);

    expect(authorsRepositoryInMemory.authors).toHaveLength(0);
  });

});
