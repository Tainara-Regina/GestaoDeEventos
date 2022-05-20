import { getRepository } from "typeorm";
import { Criador } from "../entities/criador";
import {hash} from "bcryptjs";

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

      const passHash = await hash(senha,8)

      const criador =  repo.create({
         nome,
         email,
         senha:passHash
     });


     await repo.save(criador);
     return criador;
    }
}