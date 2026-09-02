const express = require('express');
const router = express.Router();

// Opções iniciais sugeridas para a enquete
let opcoes = [
  { nome: 'Presencial', votos: 0 },
  { nome: 'Remoto', votos: 0 },
  { nome: 'Híbrido', votos: 0 }
];

// GET /enquete
router.get('/', (req, res) => {
  return res.json({ opcoes });
});

// POST /enquete/voto
router.post('/voto', (req, res) => {
  const { opcao } = req.body;

  if (!opcao || typeof opcao !== 'string') {
    return res.status(400).json({ erro: 'A opção é obrigatória e deve ser texto.' });
  }

  const opcaoEncontrada = opcoes.find(o => o.nome === opcao);

  if (!opcaoEncontrada) {
    return res.status(400).json({ erro: 'Opção não encontrada.' });
  }

  opcaoEncontrada.votos += 1;
  return res.json(opcaoEncontrada);
});

module.exports = router;