import express from 'express';

import routes from './api/routes/routes.js';

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Ganti '*' dengan asal spesifik jika perlu
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Welcome to SISTEM INVENTORY API');
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
