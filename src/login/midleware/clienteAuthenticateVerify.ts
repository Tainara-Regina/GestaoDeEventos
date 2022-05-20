import { NextFunction, Request, response, Response } from "express";
import { verify, decode } from "jsonwebtoken";

export function clienteAuthenticateVerify
(req:Request, res:Response, next:NextFunction) {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).json({
            message: "Token não encontrado"
        });
    }

    const [,token] = authToken.split(" ");

     const usu_id = decode(token);
     req.id = usu_id.id;

    try {
        verify(token, "d7500a4c-6a9c-400c-8e58-0cc04d57be28");
        
        return next();
    } catch (err) {
        return res.status(401).json({
            message: "Token invalido"
        });
    }
}