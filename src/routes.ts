import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CreateClienteController } from './controllers/CreateClienteController'
import { ListClienteController } from './controllers/ListClienteController'
import { DeleteClienteController } from './controllers/DeleteClienteController'
import { UpdateClienteController } from './controllers/UpdateClienteController'
import { LoginController } from './controllers/LoginController'
import { verifyJWT } from './middlewares/JWTAuth'

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {

    fastify.post('/cliente',{onRequest: [verifyJWT]},async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateClienteController().handle(request, reply)
    })

    fastify.get('/cliente',{onRequest: [verifyJWT]},async(request: FastifyRequest, reply:FastifyReply) => {
        return new ListClienteController().handle(request, reply)
    })

    fastify.delete('/cliente/:id',{onRequest: [verifyJWT]}, async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteClienteController().handle(request, reply)
    })
 
    fastify.put('/cliente/:id',{onRequest: [verifyJWT]}, async(request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateClienteController().handle(request, reply)
    })

    

    fastify.post('/login', async(request: FastifyRequest, reply:FastifyReply) => {
        return new LoginController().handle(request, reply)
    })

    

}
