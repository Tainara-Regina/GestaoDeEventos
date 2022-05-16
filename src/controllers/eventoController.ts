import {Request, Response } from 'express'
/*
    CRUD de evento
*/
 export default {
    async createEvento (req:Request, res: Response){
        return res.json("Crio evento")
     },

     async readEvento(req:Request, res: Response){
        return res.json("Retorno todas as informações e eventos disponiveis");
        // se houver parametro 
       // return res.json("Retorno evento com o nome passado por parametro")
     },

     async updateEvento(req:Request, res: Response){
        return res.json("Atualizo o evento");
    },

     async deleteEvento(req:Request, res: Response){
        return res.json("Deleto o evento");
     
    }
 }


