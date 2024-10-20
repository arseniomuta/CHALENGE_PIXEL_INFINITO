import "reflect-metadata"
import { beforeEach, describe, expect, it } from "vitest";
import { AuthorsRepositoryInMemory } from "../../repository/in-memory/AuthorsRepositoryInMemory";


describe("Author Detail", () => {
  let authorsRepositoryInMemory: AuthorsRepositoryInMemory;

  beforeEach(() => {
    authorsRepositoryInMemory = new AuthorsRepositoryInMemory();
  });

  it("Should be able to return the details of an existing author", async () => {
    const author = await authorsRepositoryInMemory.create({
      name: "Author Name",
    });

    const result = await authorsRepositoryInMemory.authorDetail(author!.name);

    expect(result).toHaveProperty("id");
    expect(result?.name).toBe("Author Name");
  });
});
