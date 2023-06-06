const express = require('express');
// const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());

// Defina o cabeçalho CORS, se necessário
app.use(cors());

app.get('/', async (req, res) => {
  try {
    // const response = await axios.get('https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest');
    // res.json(response.data);
    res.json({ msg: 'Works!' })
  } catch (error) {
    res.status(500).json({ error: 'Do not works' });
  }
});

const PORT = proccess.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

// Export the Express API
module.exports = app