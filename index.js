import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import response from './middleware/response.js';
import errorHandler from './middleware/errorHandler.js'; // Tambahkan error handler

const app = express();
const port = 3000;

// CORS Middleware (Pastikan ini di atas)
app.use(cors());

// Body Parser
app.use(express.json());

// Custom Middleware (Harus sebelum routes)
app.use(response);

// Routes
app.use(routes);

app.get('/', (req, res) => {
  res.send('Welcome to SISTEM INVENTORY API');
});

// Error Handler Middleware
app.use(errorHandler); // Tangkap error di satu tempat saja

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
