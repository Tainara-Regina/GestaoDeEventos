
import { Request, Response } from "express"
import { ingressoService } from "../services/ingressoService"

export default {
   async createCompraIngresso (req: Request, res: Response){
   const {evento_id, usu_cliente_id} = req.body;
     
   if(!evento_id || !usu_cliente_id){
        return res.status(400).json("parametros inválidos");
   }

     const service = new ingressoService;
    
    const result = await service.create({
        evento_id,
        usu_cliente_id 
     });

    if(result instanceof Error) {
        return res.status(400).json({"erro": result.message, result})
    }

    return res.status(200).json({"menssage": "Compra realizada com sucesso!",result});
    },

   async readCompraIngresso (req: Request, res: Response) {
       const {usu_cliente_id} = req.params;
     
       const service = new ingressoService;
       const result = await service.read(usu_cliente_id);

       if(result instanceof Error){
        res.status(400).json({"error": result.message})
       }

       return res.status(200).json({"mensage": "Ingressos retornados com sucesso",result});
   }
}