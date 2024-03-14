import { FastifyReply, FastifyRequest } from "fastify";
import { LoginService } from "../services/LoginService";

export class LoginController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const {email} = request.body as {email: string}
        const loginService = new LoginService()

        try {
            const response = await loginService.execute({email})
            reply.send(response)
        } catch(err) {
            reply.send(err)
        }

    }

}