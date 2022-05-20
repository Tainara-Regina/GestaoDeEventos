import { getRepository } from "typeorm";
import { Evento } from "../entities/evento";

type EventoCreateType =
{
    nome_evento: string;
    usu_criador_id: number;
    qtd_ingressos: number;
    descricao: string;
    endereco: string;
    data_inicio: Date;
    data_fim: Date;
    valor: string;
}


export class eventoService {
    async createEvent({
        nome_evento,
        usu_criador_id,
        qtd_ingressos,
        descricao,
        endereco,
        data_inicio,
        data_fim,
        valor
    } : EventoCreateType ) : Promise<EventoCreateType | Error>  {
      

// se qtd_ingressos form menor que 1, retornar erro
if(qtd_ingressos < 1){
    return new Error("defina uma quantidade de ingresso");
}

const repo = getRepository(Evento);

const evento = repo.create({
    nome_evento,
    usu_criador_id,
    qtd_ingressos,
    descricao,
    endereco,
    data_inicio,
    data_fim,
    valor
});

 
if(isNaN(qtd_ingressos)){
    return new Error("usu_criador_id e qtd_ingressos precisam ser numericos");
}

await repo.save(evento);
     return evento;
    }

    async readEvent()   {
        const repo = getRepository(Evento);
        const evento = await repo.find();
        return evento;
    }

    async deletedEvent(id: string)   {
        const repo = getRepository(Evento);
        
        if(!(await repo.findOne(id))){
            return new Error("evento não encontrado");
        }
        await repo.delete(id);

        return true;
    }


    async updateEvent(usu_criador_id:number,id: string ,endereco?: string, descricao?: string, qtd_ingressos?:number){
        const repo = getRepository(Evento);
        const evento = await repo.findOne(id);;
        if(!evento){
            return new Error("evento não encontrado");
        }

        if(evento.usu_criador_id !== usu_criador_id){
            return new Error("este evento não pertence a este criador");
        }

        evento.endereco = endereco ? endereco : evento.endereco;
        evento.descricao = descricao ? descricao : evento.descricao;
        evento.qtd_ingressos = qtd_ingressos ? qtd_ingressos : evento.qtd_ingressos;

        await repo.save(evento);
        return evento;
            
    }
}