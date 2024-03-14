import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import prismaClient from "../prisma/indexPrisma";
import { Prisma } from "@prisma/client";
import { ObjectId } from "mongodb";

type JwtPayLoad = {
    $oid:string

}

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
    try {

        const {authorization} = request.headers

        if(!authorization) {
            throw new Error("Não Autorizado!")
        }

        const token = authorization.split(' ')[1]
        
        const {$oid} = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayLoad

        const objectIdAsString = $oid.toString();

        const cliente = await prismaClient.cliente.findFirst({where: {id: objectIdAsString}})

        if (!cliente) {
            throw new Error("Acesso não autorizado")
        }

        console.log(cliente)
    
      
        

    } catch(err){
        return reply.status(401).send({message: "Informe um Token de Acesso válido!"})
    }
    
}