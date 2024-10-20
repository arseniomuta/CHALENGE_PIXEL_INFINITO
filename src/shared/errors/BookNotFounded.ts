export class BookNotFoundedError extends Error {
  constructor() {
      super("Book does not exists")
  }
}