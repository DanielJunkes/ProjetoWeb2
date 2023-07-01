const express = require('express');
const testeBD = require("../mongoDB/dao/resultados.js");


const router = express.Router();


router.post('/create', (req, res) => {
     const dados = req.body
     testeBD(dados).save()
     res.send(dados )
 });



module.exports = router;