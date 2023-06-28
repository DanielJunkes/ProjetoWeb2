const express = require('express');
const perguntaDB = require("../mongoDB/dao/login.js");
const router = express.Router();

router.get('/', async (req, res) => {
   const per = await perguntaDB.select();
    res.json(per)
})

router.post('/create', (req, res) => {
    const dados = req.body
    perguntaDB.create(dados)
    res.json(dados)
});

router.put('put/:id', (req, res) => {
    const dados = {
        id: req.params.id,
        pergunta: req.body
    };
    
    perguntaDB.update(dados)
    res.json(dados)
});

router.delete('/delete/:id',  (req, res) => {
    const dados = req.params.id
    perguntaDB.create(dados)
    res.json(dados)
});


module.exports = router;