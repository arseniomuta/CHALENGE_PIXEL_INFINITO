export class AuthorAlreadyExistsError extends Error {
    constructor() {
        super("Author already exists")
    }
}