"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
/**
 *  [ ] Criar todas as rotas aqui mesmo
 *  [ ] Separar num arquivo Route
 *  [ ] Comentar sempre que possível :)
 */
app.post("/cadastrar-cliete", (req, res) => {
    return res.json("Cadastro user como cliente");
});
app.post("/cadastrar-criador", (req, res) => {
    return res.json("Cadastro user como criador");
});
/*
   CRUD de evento
*/
app.post("/criar-evento", (req, res) => {
    return res.json("Crio evento");
});
app.get("/evento", (req, res) => {
    return res.json("Retorno todas as informações de eventos disponiveis");
});
/*
    encontra o evento pelo parametro passado
*/
app.get("/evento/:name", (req, res) => {
    return res.json("Retorno evento com o nome passado por parametro");
});
app.put("/evento/:id", (req, res) => {
    return res.json("Atualizo o evento");
});
app.delete("/evento/:id", (req, res) => {
    return res.json("Deleto o evento");
});
app.get("/comprar-ingresso/:id", (req, res) => {
    return res.json("Realizo a venda do ingresso");
});
app.listen(3333);
