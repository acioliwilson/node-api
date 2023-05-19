const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());

// Defina o cabeçalho CORS, se necessário
app.use(cors());

app.get('/api/mega-sena/latest', async (req, res) => {
  try {
    const response = await axios.get('https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os resultados das loterias' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});