import express from 'express';

const app = express();

app.get("/", (rec, res) => {
    return res.json({ message : "Metodo GET!"})
});

app.post("/users", (req, res) => {
    return res.json({ message : "Usuário cadastrado com sucesso!"})
});

app.listen(3333, () =>  {
    console.log("Servidor rodando na porta 3333")
});
    