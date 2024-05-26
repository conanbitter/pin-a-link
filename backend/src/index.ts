import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'

const server = fastify({ logger: true });

console.log(path.join(__dirname, '/../static'));


server.register(fastifyStatic, {
    root: path.join(__dirname, '/../static'),
    index: false,
    prefix: "/static/"
});

server.get('/ping', async (request, reply) => {
    return 'pong\n'
});

server.get('/test', async (request, reply) => {
    return reply.sendFile("index.html");
});

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
});