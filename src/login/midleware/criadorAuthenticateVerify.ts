import { NextFunction, Request, response, Response } from "express";
import { verify } from "jsonwebtoken";

export function criadorAuthenticateVerify
(req:Request, res:Response, next:NextFunction) {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).json({
            message: "Token não encontrado"
        });
    }

    const [,token] = authToken.split(" ");

    try {
        verify(token, '6a2d7b78-4ec4-49f4-a6c7-1594952ee8d7');
        
        return next();
    } catch (err) {
        return res.status(401).json({
            message: "Token invalido"
        });
    }
}