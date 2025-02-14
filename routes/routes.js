import express from 'express';

import mobileunit from './MobileUnit.js';
import pegawai from './Pegawai.js';

const app = express();

app.use('/mobileunit', mobileunit);
app.use('/pegawai', pegawai);

export default app;
