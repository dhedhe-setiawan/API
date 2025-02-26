import catchError from '../utils/error/catchError.js';
import { deleteData, insertData, selectData, updateData } from '../utils/queryBuilder.js';
import throwError from '../utils/error/throwError.js';

export const getAll = catchError(async (req, res) => {
  const { sortBy, sortOrder, ...filters } = req.query;

  const result = await selectData('barang_keluar', filters, sortBy);
  if (result.length <= 0) throwError(404);

  return res.success(200, result);
});

export const get = catchError(async (req, res) => {
  const result = await selectData('barang_keluar', req.params, '=');
  if (result.length <= 0) throwError(404);

  return res.success(200, result[0]);
});

export const post = catchError(async (req, res) => {
  const data = req.body;

  const nowLocal = new Date()
    .toLocaleString('sv-SE', { timeZone: 'Asia/Makassar' })
    .replace(' ', 'T');
  data.tanggal = data.tanggal || nowLocal;

  const result = await insertData('barang_keluar', data);
  if (result.affectedRows >= 1) return res.success(201, result, 'Tambah Data Berhasil');
});

export const patch = catchError(async (req, res) => {
  const id = req.params;
  const data = req.body;

  const result = await updateData('barang_keluar', data, id);
  if (result.affectedRows >= 1) return res.success(201, result, 'Ubah Data Berhasil');
});

export const del = catchError(async (req, res) => {
  const result = await deleteData('barang_keluar', req.params);

  if (result.affectedRows >= 1) return res.success(200, result, 'Hapus Data Berhasil');
});
