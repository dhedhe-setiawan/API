import express from 'express';

import pegawai from './Pegawai.js';
import barang from './Barang.js';
import barangMasuk from './BarangMasuk.js';
import barangKeluar from './BarangKeluar.js';

const app = express();

app.use('/pegawai', pegawai);
app.use('/barang', barang);
app.use('/barangMasuk', barangMasuk);
app.use('/barangKeluar', barangKeluar);

export default app;
