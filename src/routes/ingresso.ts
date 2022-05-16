import {Router} from "express";

const routes = Router();

routes.get("/comprar-ingresso/:id", (req,res) => {
    return res.json("Realizo a venda do ingresso");
});