
import { Request, Response } from "express"

export default {
    createCompraIngresso (req: Request, res: Response){
        return res.json("Realizo a venda do ingresso")
    }
}