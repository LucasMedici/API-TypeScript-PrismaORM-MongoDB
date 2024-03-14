import {FastifyRequest, FastifyReply} from "fastify";
import { CreateClienteService } from "../services/CreateClienteService";


export class CreateClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const {name, email} = request.body as {name: string, email: string}
        const clienteService = new CreateClienteService()


        try {
            const resposta_service = await clienteService.execute({name, email})
            reply.send(resposta_service)

            
        } catch(err: any) {
            reply.send(err)
          
        }


    }
}