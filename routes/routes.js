import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';

import login from './AuthRoute.js';

import pegawai from './Pegawai.js';
import barang from './Barang.js';
import barangMasuk from './BarangMasuk.js';
import barangKeluar from './BarangKeluar.js';

const app = express();

app.use('/login', login);

app.use('/pegawai', verifyToken, pegawai);
app.use('/barang', verifyToken, barang);
app.use('/barangMasuk', verifyToken, barangMasuk);
app.use('/barangKeluar', verifyToken, barangKeluar);
app.use('/barangKeluar', verifyToken, barangKeluar);

export default app;
