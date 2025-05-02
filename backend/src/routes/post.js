export default async function postRoutes(fastify) {
  const prisma = fastify.prisma

  fastify.post('/posts', async (request, reply) => {
    const { nombre, descripcion } = request.body
    const post = await prisma.post.create({
      data: { nombre, descripcion },
    })

    reply.code(201).send(post)
  })

  fastify.get('/posts', async (_, reply) => {
    const posts = await prisma.post.findMany()
    reply.code(200).send(posts)
  })

  fastify.delete('/posts', async (request, reply) => {
    const { id } = request.body
    const post = await prisma.post.delete({
      where: { id },
    })
    reply.code(200).send(post)
  })
}
