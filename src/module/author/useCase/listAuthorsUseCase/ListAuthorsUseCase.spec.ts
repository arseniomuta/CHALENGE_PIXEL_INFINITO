import { beforeEach, describe, expect, it } from "vitest";
import { AuthorsRepositoryInMemory } from "../../repository/in-memory/AuthorsRepositoryInMemory";

describe("List Authors", () => {
  let authorsRepositoryInMemory: AuthorsRepositoryInMemory;

  beforeEach(() => {
    authorsRepositoryInMemory = new AuthorsRepositoryInMemory();
  });

  it("Should be able to list all authors", async () => {
    await authorsRepositoryInMemory.create({
      name: "Author 1",
    });

    await authorsRepositoryInMemory.create({
      name: "Author 2",
    });

    const authors = await authorsRepositoryInMemory.list();

    expect(authors).toHaveLength(2);
    expect(authors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "Author 1" }),
        expect.objectContaining({ name: "Author 2" }),
      ])
    );
  });
});
