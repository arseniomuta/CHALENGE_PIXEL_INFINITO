export class AuthorNotExistsError extends Error {
  constructor() {
      super("Author does not exists")
  }
}