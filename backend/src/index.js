import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '../generated/prisma/index.js'
import postRoutes from './routes/post.js'

const prisma = new PrismaClient()

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  },
})

fastify.decorate('prisma', prisma)
fastify.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
})
fastify.register(postRoutes)

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
