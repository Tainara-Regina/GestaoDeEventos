import { NextFunction, Request, response, Response } from "express";
import { verify } from "jsonwebtoken";

export function clienteAuthenticateVerify
(req:Request, res:Response, next:NextFunction) {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).json({
            message: "Token não encontrado"
        });
    }

    const [,token] = authToken.split(" ");

    try {
        verify(token, process.env.SECRET_CLIENTE);
        
        return next();
    } catch (err) {
        return res.status(401).json({
            message: "Token invalido"
        });
    }
}