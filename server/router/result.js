const express = require('express');
const testeBD = require("../mongoDB/dao/resultados.js");


const router = express.Router();

router.get('/', async (req, res) => {
    const dados = await testeBD.find()
    res.send(dados)
});

router.get('/:id', async (req, res) => {
    where = { idUser: req.params.id }

    const dados = await testeBD.find(where)

    res.json(dados)
});

router.post('/create', (req, res) => {
     const dados = req.body
     testeBD(dados).save()
     res.send(dados )
 });



module.exports = router;