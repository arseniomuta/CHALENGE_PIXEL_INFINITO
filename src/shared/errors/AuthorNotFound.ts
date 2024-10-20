export class AuthorNotFoundError extends Error {
  constructor(id: string) {
      super(`Autor com ID ${id} não foi encontrado.`);
  }
}
