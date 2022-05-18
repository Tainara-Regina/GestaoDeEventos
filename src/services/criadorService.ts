import { getRepository } from "typeorm";
import { Criador } from "../entities/criador";

type Usuario =
{
   nome: string;
   email: string;
   senha: string;

}
export class criadorService {
    async createUser({nome,email,senha} : Usuario ) : Promise<Criador | Error>  {
      const repo = getRepository(Criador);

      if(await repo.findOne({email})){
          return new Error("email já cadastrado");
      }

      const criador =  repo.create({
         nome,email,senha
     });

     await repo.save(criador);
     return criador;
    }
}