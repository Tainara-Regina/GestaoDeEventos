import { Request, Response } from "express";
import { clienteAuthenticate } from "../login/clienteAuthenticate";
import { criadorAuthenticate } from "../login/criadorAuthenticate";
export default {
   async authenticateCliente (req : Request, res: Response ) {
       const {email,senha} = req.body;
       const validacao = new clienteAuthenticate;
       const verify = await validacao.authenticate(email,senha);
       
       if(verify instanceof Error) {
          return res.status(401).json({"error": verify.message})
       }
       
       return res.status(200).json({"mensage": "login efetuado com sucesso", verify})
     
    },
    async authenticateCriador (req : Request, res: Response ) {
        const {email,senha} = req.body;
        const validacao = new criadorAuthenticate;
        const verify = await validacao.authenticate(email,senha);
        
        if(verify instanceof Error) {
           return res.status(401).json({"error": verify.message})
        }
 
        return res.status(200).json({"mensage": "login efetuado com sucesso", verify})
      
     }
}