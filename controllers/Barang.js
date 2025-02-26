import catchError from '../utils/error/catchError.js';
import { deleteData, insertData, selectData, updateData } from '../utils/queryBuilder.js';
import throwError from '../utils/error/throwError.js';

export const getAll = catchError(async (req, res) => {
  const { sortBy, sortOrder, ...filters } = req.query;

  const result = await selectData('barang', filters, sortBy);
  if (result.length <= 0) throwError(404);

  return res.success(200, result);
});

export const get = catchError(async (req, res) => {
  const result = await selectData('barang', req.params, '', '=');
  if (result.length <= 0) throwError(404);

  return res.success(200, result[0]);
});

export const post = catchError(async (req, res) => {
  const result = await insertData('barang', req.body);

  if (result.affectedRows >= 1) return res.success(201, result, 'Tambah Data Berhasil');
});

export const patch = catchError(async (req, res) => {
  const id = req.params;
  const data = req.body;

  const result = await updateData('barang', data, id);
  if (result.affectedRows >= 1) return res.success(201, result, 'Ubah Data Berhasil');
});

export const del = catchError(async (req, res) => {
  const result = await deleteData('barang', req.params);

  if (result.affectedRows >= 1) return res.success(200, result, 'Hapus Data Berhasil');
});
