import catchError from '../utils/error/catchError.js';
import { deleteData, insertData, selectData, updateData } from '../utils/queryBuilder.js';
import throwError from '../utils/error/throwError.js';

export const getAll = catchError(async (req, res) => {
  const { sortBy, sortOrder, ...filters } = req.query;

  const result = await selectData(
    'barang_masuk',
    filters,
    sortBy,
    'barang', // Join ke tabel barang
    'barang_masuk.id_barang = barang.id_barang' // Join condition
  );

  if (result.length <= 0) throwError(404);

  // Konversi ke UTC+8
  const formattedData = result.map((item) => ({
    ...item,
    tanggal: new Date(item.tanggal).toLocaleString('id-ID', { timeZone: 'Asia/Makassar' }),
  }));

  return res.success(200, formattedData);
});

export const get = catchError(async (req, res) => {
  const result = await selectData('barang_masuk', req.params, '', '=');
  if (result.length <= 0) throwError(404);

  const formattedData = {
    ...result[0],
    tanggal: new Date(item.tanggal).toLocaleString('id-ID', { timeZone: 'Asia/Makassar' }),
  };

  return res.success(200, formattedData);
});

export const post = catchError(async (req, res) => {
  const data = req.body;

  const nowLocal = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' });
  data.tanggal = data.tanggal || nowLocal;

  const result = await insertData('barang_masuk', data);
  if (result.affectedRows >= 1) return res.success(201, result, 'Tambah Data Berhasil');
});

export const patch = catchError(async (req, res) => {
  const id = req.params;
  const data = req.body;

  const result = await updateData('barang_masuk', data, id);
  if (result.affectedRows >= 1) return res.success(201, result, 'Ubah Data Berhasil');
});

export const del = catchError(async (req, res) => {
  const result = await deleteData('barang_masuk', req.params);

  if (result.affectedRows >= 1) return res.success(200, result, 'Hapus Data Berhasil');
});
