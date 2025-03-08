export class UserAlreadyExistesError extends Error {
  constructor() {
    super('E-mail já cadastrado!')
  }
}
