const express = require('express');
const router = express.Router();

let links = [];
let proximoId = 1;

// GET /links
router.get('/', (req, res) => {
  return res.json(links);
});

// POST /links
router.post('/', (req, res) => {
  const { titulo, url } = req.body;

  if (!titulo || !url || typeof titulo !== 'string' || typeof url !== 'string') {
    return res.status(400).json({ erro: 'O título e a URL são obrigatórios e devem ser texto.' });
  }

  const novoLink = {
    id: proximoId++,
    titulo,
    url
  };

  links.push(novoLink);
  return res.status(201).json(novoLink);
});

module.exports = router;
