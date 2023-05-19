const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app


// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();

// app.use(express.json());

// // Defina o cabeçalho CORS, se necessário
// app.use(cors());

// app.get('/', async (req, res) => {
//   try {
//     const response = await axios.get('https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest');
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Erro ao obter os resultados das loterias' });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });