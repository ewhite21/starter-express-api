const port = 3000;
const fastify = require('fastify')({ logger: false });
fastify.register(require('@fastify/formbody'));

fastify.get('/', async function (request, reply) {
    reply.send({ success: true });
})
fastify.listen({ port: port }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${port}`);
})
