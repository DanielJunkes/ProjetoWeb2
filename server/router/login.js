const express = require('express');
const usuariosBD = require("../mongoDB/dao/usuario.js");

const router = express.Router();

router.get('/login', async (req, res) => {
    const dados = req.body
    const per = await usuariosBD.find();
    res.json(per)
 })

router.post('/create', (req, res) => {
     const dados = req.body
     usuariosBD(dados).save()
     res.send(req.body)
 });

router.put('/update', async (req, res) => {
    const dados = req.body;
    await usuariosBD.findByIdAndUpdate(dados.id, {nome: dados.nome, senha: dados.senha});
    res.send(dados);
});


router.delete('/delete', async (req, res) => {
    const dados = req.body
    await usuariosBD.findByIdAndDelete(dados.id)
    res.send(dados)
})


module.exports = router;