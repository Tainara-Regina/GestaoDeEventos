import { getRepository } from "typeorm"
import { Criador } from "../entities/criador" 
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"


export class criadorAuthenticate {
 async authenticate (email: string, senha: string){
 // procurar se email e senha batem
 const repo = getRepository(Criador)
 

    const findEmail = await repo.findOne({email})
    if(!findEmail){
        return new Error ("Usuario ou senha incorreto")
    }



    const compararSenha =  compare(senha,findEmail.senha)

    if(!compararSenha){
      return new Error ("Usuario ou senha incorreto")
 }
 // const { id, user_type_id, level } = jwt.decode(token);
  
    const id = findEmail.usu_criador_id; 
    const token =  sign({ id }, '6a2d7b78-4ec4-49f4-a6c7-1594952ee8d7', {
      expiresIn: 900 // expira em 15min
    });


    return { auth: true, token: token };

    }
}