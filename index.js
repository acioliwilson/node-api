const express = require('express');
// const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());

// Defina o cabeçalho CORS, se necessário
app.use(cors());

app.get('/', async (req, res) => {
  res.send('Works');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

// Export the Express API
module.exports = app