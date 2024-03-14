import prismaClient from "../prisma/indexPrisma";

interface CreateClienteProps {
    name:string, 
    email: string
}


export class CreateClienteService {
    async execute({name, email}: CreateClienteProps) {

        if(!name || !email) {
            throw new Error("Todos os campos devem ser preenchidos!")
        }

        const cliente = prismaClient.cliente.create({data:{
            name,
            email,
            status: true
        }})

        return cliente

    }

}

