
import { getRepository } from "typeorm"
import { Cliente } from "../entities/cliente"
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"


export class clienteAuthenticate {
 async authenticate (email: string, senha: string){
 // procurar se email e senha batem
 const repo = getRepository(Cliente)
 

    const findEmail = await repo.findOne({email})
    if(!findEmail){
        return new Error ("Usuario ou senha incorreto")
    }


    const compararSenha =  compare(senha,findEmail.senha)

    if(!compararSenha){
     return new Error ("Usuario ou senha incorreto")
}
 
   
    const id = findEmail.usu_cliente_id; 
    const token =  sign({ id }, 'd7500a4c-6a9c-400c-8e58-0cc04d57be28', {
      expiresIn: 300 // expires in 5min
    }); 


    return { auth: true, token: token };

    }
}