const express = require('express');
const testeBD = require("../mongoDB/dao/testes.js");


const router = express.Router();

router.get('/', async (req, res) => {
    const per = await testeBD.find();
    res.json(per)
 })

router.get('/:id', async (req, res) => {
    const id = {
        _id: req.params.id
    }
    const per = await testeBD.findById(id);
    res.send(per)
 })


router.post('/create', (req, res) => {
     const dados = req.body
     testeBD(dados).save()
     res.send(req.body)
 });



router.put('/update', async (req, res) => {
    const dados = {
        id: req.body.id,
        perguntas: req.body.perguntas
    };
    console.log(dados);

    await testeBD.findByIdAndUpdate(dados.id, {perguntas: dados.perguntas});
    res.send(dados);
});


router.delete('/delete', async (req, res) => {
    const dados = req.body
    await testeBD.findByIdAndDelete(dados.id)
    res.send(dados)
})


module.exports = router;