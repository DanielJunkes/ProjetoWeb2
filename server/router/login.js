const express = require('express');
const usuariosBD = require("../mongoDB/dao/usuario.js");
const { hash, compare } = require("bcryptjs");

const router = express.Router();

router.get('/login/:nome', async (req, res) => {
    const dados = {
        nome: req.params.nome
    }
    const usuario = await usuariosBD.findOne(dados)
    
    if(!usuario){
        return res.status(500).json({
            message: "Usuario não existe",
            type: "error",
        });
    }else{
        res.json(usuario)
    }
 })

router.post('/create', async (req, res) => {
    const dados = {
        nome: req.body.nome
    }
    const usuario = await usuariosBD.findOne(dados)
    if(!usuario){
        const novoUsuario = req.body
        usuariosBD(dados).save()
        res.send(req.body)
    }else{
        return res.status(500).json({
            message: "Usuario ja existe",
            type: "error",
        });
    }   
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