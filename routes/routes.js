import express from 'express';

import pegawai from './Pegawai.js';

const app = express();

app.use('/pegawai', pegawai);

export default app;
