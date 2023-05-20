const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());

// Defina o cabeçalho CORS, se necessário
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8080/api'] // Substitua pelos domínios dos seus sites
}));

app.get('/', async (req, res) => {
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

// Export the Express API
// module.exports = app