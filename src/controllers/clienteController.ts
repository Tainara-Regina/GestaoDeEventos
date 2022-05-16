import {Request, Response } from 'express'

export default {

   async createUser (req: Request ,res: Response) {
        return res.json("Cadastro user como cliente")
    }
};