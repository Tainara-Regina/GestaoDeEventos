import {Request, Response } from 'express'
import { criadorService } from '../services/criadorService';

export default {

   async createUser (req: Request ,res: Response) {
       const { nome, email , senha } = req.body;

        if(!nome || !email || !senha){
            return res.status(400).json({"erro": "parametros inválidos"})
        }

       const service = new criadorService;

       const result = await service.createUser({nome,email,senha})

       if(result instanceof Error){
           return res.status(400).json({"erro": result.message})
       }

        return res.status(200).json({"menssage":"Criador cadastrado com sucesso", result});
    }
};