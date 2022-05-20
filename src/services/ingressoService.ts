import { getRepository, getTreeRepository } from "typeorm";
import { uuid } from "uuidv4";
import { Evento } from "../entities/evento";



import { Ingresso } from "../entities/ingresso";


type IngressoCreateType =
{
    evento_id: number;
    usu_cliente_id: number;
}

export class ingressoService {
    async create({
        evento_id,
        usu_cliente_id 
    } : IngressoCreateType ) : Promise<IngressoCreateType | Error>  {
      

const repo = getRepository(Ingresso);
const ingresso = repo.create({
    evento_id,
    usu_cliente_id, 
    code : uuid()
});


if(isNaN(usu_cliente_id)){
    return new Error("usu_criador_id precisa ser numericos");
}

await repo.save(ingresso);
  
      const repo_evento = getRepository(Evento);
      const evento = await repo_evento.findOne(evento_id);

if(evento.qtd_ingressos < 1){
 return new Error("Ops, este evento não possui mais ingressos.")
}

    
      evento.qtd_ingressos = evento.qtd_ingressos - 1;
      repo_evento.save(evento);
      return ingresso;

}

async read(usu_cliente_id:string){
   const repo = getRepository(Ingresso)
   const ingressos = await  repo.find({
        where: {
            usu_cliente_id:usu_cliente_id
        }
    });

    if(!ingressos){
        return new Error("Ingressos não encontrados")
    }

    return ingressos;
}


}