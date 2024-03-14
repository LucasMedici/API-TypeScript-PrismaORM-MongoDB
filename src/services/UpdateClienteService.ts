import prismaClient from "../prisma/indexPrisma";

interface UpdateClientProps{
    id: string,
    name: string,
    email: string
}

export class UpdateClienteService {
    async execute({id, name, email}: UpdateClientProps) {

        if(!id) {
            throw new Error("O ID de usuário a ser alterado deve ser informado!")
        }

        if(!name && !email) {
            throw new Error("Os campos a serem alterados devem ser informados!")
        }

        const cliente = await prismaClient.cliente.update({where: {
            id:id
        }, data: {
            name: name,
            email: email
        }})


    }
}