import fastify from "fastify"
import { usersRoutes } from "./http/controllers/users/routes"
import { ZodError } from "zod"
import { env } from "./env"
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from "@fastify/cookie"

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)

app.register(usersRoutes)

app.register(require('@fastify/cors'), {
  methods: ['GET', 'POST'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
})

// quando uma função recebe um parametro mas não é utilizado, colocamos um (_) ou (_request) no lugar do parametro
app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we shold log to an external tool like DataDog/NewRelic/Sentry.
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
