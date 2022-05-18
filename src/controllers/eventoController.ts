import {Request, Response } from 'express'
import { eventoService } from '../services/eventoService';
/*
    CRUD de evento
*/
 export default {
    async createEvento (req:Request, res: Response){
     const {nome_evento,
      usu_criador_id,
      qtd_ingressos,
      descricao,
      endereco,
      data_inicio,
      data_fim,
      valor} = req.body;

      if(!nome_evento ||
         !usu_criador_id ||
         !qtd_ingressos ||
         !descricao ||
         !endereco ||
         !data_inicio ||
         !data_fim ||
         !valor) {
            return res.status(400).json({"erro": "parametros inválidos"})
      }

      const service = new eventoService;

      const result = await service.createEvent({
      nome_evento,
      usu_criador_id,
      qtd_ingressos,
      descricao,
      endereco,
      data_inicio,
      data_fim,
      valor
      })
      if(result instanceof Error){
         return res.status(400).json({"erro": result.message})
     }

     return res.status(200).json({"menssage":"Evento cadastrado com sucesso", result});
     },
     

     async readEvento(req:Request, res: Response){
      const service = new eventoService;

      const result = await service.readEvent();
      
      if(result instanceof Error){
         return res.status(400).json({"erro": result.message})
     }
     return res.status(200).json({"menssage":"Lista de eventos retornada com sucesso!", result});
     },
     

     async updateEvento(req:Request, res: Response){
      const {id} = req.params;
      const {endereco, descricao} = req.body;
      const service = new eventoService;

      const result = await service.updateEvent(id,endereco,descricao);
      
      if(result instanceof Error){
         return res.status(400).json({"erro": result.message})
     }
     return res.status(200).json({"menssage":"Evento atualizado com sucesso!"});
    },

     async deleteEvento(req:Request, res: Response){
       const {id} = req.params
      const service = new eventoService;

      const result = await service.deletedEvent(id);
      
      if(result instanceof Error){
         return res.status(400).json({"erro": result.message})
     }
     return res.status(200).json({"menssage":"Evento deletado com sucesso!"});
    }
 }


