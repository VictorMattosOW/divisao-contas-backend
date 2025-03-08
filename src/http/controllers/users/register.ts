import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeRegisterUseCase } from "../../../use-case/factories/make-register-use-case"
import { UserAlreadyExistesError } from "../../../use-case/errors/user-already-exists-error"


export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const registerUseCase = makeRegisterUseCase()

    const { user } = await registerUseCase.execute({
      name,
      email,
      password,
    })

    return reply.status(201).send(user)
  } catch (error) {
    if (error instanceof UserAlreadyExistesError) {
      return reply.status(409).send({
        message: error.message,
      })
    }

    throw error
  }
}
