 import {Router} from "express";

 const routes = Router();
 
 /*
    CRUD de evento
 */

 routes.post("/criar-evento", (req, res) => {
   return res.json("Crio evento")
 });
     
 routes.get("/evento", (req,res) => {
   return res.json("Retorno todas as informações de eventos disponiveis")
});

/*
    encontra o evento pelo parametro passado
*/
routes.get("/evento/:name", (req,res) => {
    return res.json("Retorno evento com o nome passado por parametro")
});


routes.put("/evento/:id", (req,res) => {
    return res.json("Atualizo o evento");
});


routes.delete("/evento/:id", (req,res) => {
    return res.json("Deleto o evento");
});
