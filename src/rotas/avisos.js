const express = require('express');
const router = express.Router();

let avisos = [];
let proximoId = 1;

router.get('/', (req, res) => {
  return res.json(avisos);
});

router.post('/', (req, res) => {
  const { titulo, mensagem } = req.body;

  if (!titulo || !mensagem || typeof titulo !== 'string' || typeof mensagem !== 'string') {
    return res.status(400).json({ erro: 'O título e a mensagem são obrigatórios e devem ser texto.' });
  }

  const novoAviso = {
    id: proximoId++,
    titulo,
    mensagem
  };

  avisos.push(novoAviso);
  return res.status(201).json(novoAviso);
});

module.exports = router;