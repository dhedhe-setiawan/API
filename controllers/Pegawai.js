import catchError from '../utils/error/catchError.js';
import hash from '../utils/hash.js';
import { deleteData, insertData, selectData, updateData } from '../utils/queryBuilder.js';
import throwError from '../utils/error/throwError.js';

export const getAll = catchError(async (req, res) => {
  const { sortBy, sortOrder, ...filters } = req.query;

  const result = await selectData('pegawai', filters, sortBy);
  if (result.length <= 0) throwError(404);

  return res.success(200, result);
});

export const get = catchError(async (req, res) => {
  const result = await selectData('pegawai', req.params, '', '=');
  if (result.length <= 0) throwError(404);

  return res.success(200, result[0]);
});

export const post = catchError(async (req, res) => {
  const data = req.body;

  if (!data.password) throwError(400, 'Password kosong');
  data.password = await hash(data.password);

  const result = await insertData('pegawai', data);

  if (result.affectedRows >= 1) return res.success(201, result, 'Tambah Data Berhasil');
});

export const patch = catchError(async (req, res) => {
  const id = req.params;
  const data = req.body;

  if (data.password) data.password = await hash(data.password);

  const result = await updateData('pegawai', data, id);
  if (result.affectedRows >= 1) return res.success(201, result, 'Ubah Data Berhasil');
});

export const del = catchError(async (req, res) => {
  const result = await deleteData('pegawai', req.params);

  if (result.affectedRows >= 1) return res.success(200, result, 'Hapus Data Berhasil');
});
