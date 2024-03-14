import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteClienteService } from "../services/DeleteClienteService";

export class DeleteClienteController {
    async handle(request: FastifyRequest, reply:FastifyReply) {

        const {id} = request.params as {id: string}
        const deleteClienteService = new DeleteClienteService()


        try {
            const resposta_service = await deleteClienteService.execute({id})
            reply.send(resposta_service)
    
        } catch(err:any) {
            reply.send(err)
        }
       
    }

}
