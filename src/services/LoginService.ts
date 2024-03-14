import prismaClient from "../prisma/indexPrisma";
import {Prisma} from '@prisma/client'
import jwt from "jsonwebtoken";

interface LoginProps {
    email:string
}



export class LoginService {
    async execute({email}:LoginProps) {
        
        if (!email) {
            throw new Error("O email é necessário para o login!")
        }

        const cliente = await prismaClient.cliente.findRaw({filter: {email:email}})
        const userActually = cliente as Prisma.JsonObject
        const user = userActually[0] as {_id:string, name:string, email:string}


        const tokenJWT = jwt.sign(user._id, process.env.JWT_PASS??"", {expiresIn:60}) // 60 em s
        return {"message":`sucesso ao logar ${user.name}, seu token de acesso é: ${tokenJWT}`}
    }
}