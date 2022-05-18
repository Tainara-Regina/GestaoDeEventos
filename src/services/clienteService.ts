import { getRepository } from "typeorm";
import { Cliente } from "../entities/cliente";

type Usuario =
{
   nome: string;
   email: string;
   senha: string;

}
export class clienteService {
    async createUser({nome,email,senha} : Usuario ) : Promise<Cliente | Error>  {
      const repo = getRepository(Cliente);

      if(await repo.findOne({email})){
          return new Error("email já cadastrado");
      }

      const cliente =  repo.create({
         nome,email,senha
     });

     await repo.save(cliente);
     return cliente;
    }
}