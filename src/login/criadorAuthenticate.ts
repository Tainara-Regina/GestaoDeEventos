import { getRepository } from "typeorm"
import { Criador } from "../entities/criador" 
import { sign } from "jsonwebtoken"


export class criadorAuthenticate {
 async authenticate (email: string, senha: string){
 // procurar se email e senha batem
 const repo = getRepository(Criador)
 

    const findEmail = await repo.findOne({email})
    if(!findEmail){
        return new Error ("Usuario ou senha incorreto")
    }

    const findSenha = await repo.findOne({senha})
    if(!findSenha){
     return new Error ("Usuario ou senha incorreto")
}
 
   
    const id = findEmail.usu_criador_id; 
    const token =  sign({ id }, '6a2d7b78-4ec4-49f4-a6c7-1594952ee8d7', {
      expiresIn: 300 // expira em 5min
    });


    return { auth: true, token: token };

    }
}