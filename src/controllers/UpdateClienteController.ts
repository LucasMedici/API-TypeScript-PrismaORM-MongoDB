import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateClienteService } from "../services/UpdateClienteService";

export class UpdateClienteController {
    async handle(request: FastifyRequest, reply:FastifyReply) {

        const {id} = request.params as {id: string}
        const {name, email} = request.body as {name: string, email:string}
        const updateClienteService = new UpdateClienteService()

        try {
            const resposta_service = await updateClienteService.execute({id, name, email})
            reply.send(resposta_service)
        } catch(err:any){
            reply.send(err)
        }
       



    }

}
