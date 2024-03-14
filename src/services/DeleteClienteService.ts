import prismaClient from "../prisma/indexPrisma";

interface DeleteClienteProps{
    id: string
}

export class DeleteClienteService {
    async execute({id}: DeleteClienteProps) {
      
        if (!id) {
            throw new Error("O id do usuário deve ser fornecido")
        }
        
            const cliente = await prismaClient.cliente.delete({where: {
                id:id
            }})
        

    }
}   