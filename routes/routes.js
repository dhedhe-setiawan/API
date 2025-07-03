import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';

import login from './AuthRoute.js';

import pegawai from './Pegawai.js';
import barang from './Barang.js';
import barangMasuk from './BarangMasuk.js';
import barangKeluar from './BarangKeluar.js';
import pesanan from './Pesanan.js';

const app = express();

app.use('/login', login);

app.use('/pegawai', pegawai);
app.use('/barang', barang);
app.use('/barangMasuk', barangMasuk);
app.use('/barangKeluar', barangKeluar);
app.use('/barangKeluar', barangKeluar);
app.use('/pesanan', pesanan);

export default app;
