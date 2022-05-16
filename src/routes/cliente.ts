import {Router} from "express"

const routes = Router();

routes.post("/cadastrar-cliente", (req, res) => {
    return res.json("Cadastro user como cliente")
 });
 
 routes.post("/cadastrar-criador", (req, res) => {
     return res.json("Cadastro user como criador")
  });
 