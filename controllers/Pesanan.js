import catchError from '../utils/error/catchError.js';
import {
  deleteData,
  insertData,
  selectData,
  updateData,
} from '../utils/queryBuilder.js';
import throwError from '../utils/error/throwError.js';
import { v7 as uuidv7 } from 'uuid';

export const getAll = catchError(async (req, res) => {
  const { sortBy, sortOrder, ...filters } = req.query;

  const result = await selectData('pesanan', filters, sortBy);

  if (result.length <= 0) throwError(404);

  // Konversi ke UTC+8
  const formattedData = result.map(item => ({
    ...item,
    tanggal: new Date(item.tanggal).toLocaleString('id-ID', {
      timeZone: 'Asia/Makassar',
    }),
  }));

  return res.success(200, formattedData);
});

export const get = catchError(async (req, res) => {
  const result = await selectData('pesanan', req.params, '', '=');
  if (result.length <= 0) throwError(404);

  const formattedData = result.map(item => ({
    ...item,
    tanggal: new Date(item.tanggal).toLocaleString('id-ID', {
      timeZone: 'Asia/Makassar',
    }),
  }));

  return res.success(200, formattedData);
});

export const post = catchError(async (req, res) => {
  const data = req.body;

  const uuid = uuidv7();
  data.id = uuid;
  data.barang = JSON.stringify(data.barang);

  const result = await insertData('pesanan', data);

  result.insertId = uuid;
  if (result.affectedRows >= 1)
    return res.success(201, result, 'Tambah Data Berhasil');
});

export const patch = catchError(async (req, res) => {
  const id = req.params;
  const data = req.body;

  data.barang = JSON.stringify(data.barang);

  const result = await updateData('pesanan', data, id);
  if (result.affectedRows >= 1)
    return res.success(201, result, 'Ubah Data Berhasil');
});

export const del = catchError(async (req, res) => {
  const result = await deleteData('pesanan', req.params);

  if (result.affectedRows >= 1)
    return res.success(200, result, 'Hapus Data Berhasil');
});

export const pay = catchError(async (req, res) => {
  const id = req.params;
  const data = {
    status: 'lunas',
  };

  const result = await updateData('pesanan', data, id);
  if (result.affectedRows >= 1)
    return res.success(201, result, 'Pembayaran Berhasil');
});
