const express = require('express');
const usuariosBD = require("../mongoDB/dao/usuario.js");
const testesBD = require("../mongoDB/dao/testes.js");
const resultadosBD = require("../mongoDB/dao/resultados.js");
const cors = require("cors");
const router = express.Router();

router.use(cors());

//rota dos testes

router.get('/testes', async (req, res) => {
    const per = await testesBD.find();
    res.json(per)
 })

// router.post('/createteste', (req, res) => {
//     const dados = req.body
//     testesBD.create(dados)
//     res.json(dados)
// });

// router.put('putteste/:id', (req, res) => {
//     const dados = {
//         id: req.params.id,
//         pergunta: req.body
//     };
    
//     perguntaDB.update(dados)
//     res.json(dados)
// });

// router.delete('/deleteteste/:id',  (req, res) => {
//     const dados = req.params.id
//     perguntaDB.create(dados)
//     res.json(dados)
// });

//rota dos resultados
router.get('/resultados', async (req, res) => {
   const per = await resultadosBD.find();
    res.json(per)
})

// router.post('/createresultado', (req, res) => {
//     const dados = req.body
//     perguntaDB.create(dados)
//     res.json(dados)
// });

// router.delete('/deleteresultado/:id',  (req, res) => {
//     const dados = req.params.id
//     perguntaDB.create(dados)
//     res.json(dados)
// });

//rota do usuario (login e cadastro)
router.get('/login/:nome', async (req, res) => {
    const dados = {
        nome: req.params.nome,
    }
    const usu = await usuariosBD.find(dados)
    res.json(usu)
 })
 
 router.get('/login', async (req, res) => {
    const per = await usuariosBD.find();

    res.json(per)
 })

 router.post('/createusuario', (req, res) => {
     const dados = req.body
     console.log(dados);
     usuariosBD(dados).save()
     res.send(req.body)
 });
 
//  router.put('putusuario/:id', (req, res) => {
//     const dados = {
//         id: req.params.id,
//         pergunta: req.body
//     };
    
//     perguntaDB.update(dados)
//     res.json(dados)
//  });

//  router.delete('/deleteusuario/:id',  (req, res) => {
//      const dados = req.params.id
//      perguntaDB.create(dados)
//      res.json(dados)
//  });

module.exports = router;