import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

const app = Fastify({logger: true})

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message})
})

const startServer = async () => {

    await app.register(cors)
    await app.register(routes)

    try {
        await app.listen({port:3333})
    } catch(err) {  
        console.log('Erro ao iniciar o servidor' + err)
        process.exit(1)
    }


}


startServer()