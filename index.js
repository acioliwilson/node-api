// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Database Connection
// const conn = require('./db/conn');
// conn();

// // API Routes
// const routes = require('./routes/router');
// app.use('/api', routes);

// const port = 3000;
// app.listen(port, () => {
//     console.log('Running')
// });



const express = require('express');
// const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());

// Defina o cabeçalho CORS, se necessário
app.use(cors());

// Database Connection
const conn = require('./db/conn');
conn();

app.get('/', async (req, res) => {
  res.json({ msg: 'OK' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

// Export the Express API
module.exports = app