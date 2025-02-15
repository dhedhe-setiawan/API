import catchError from '../utils/catchError.js';
import dynamicQuery from '../utils/dynamicQuery.js';
import query from '../utils/query.js';
import throwError from '../utils/throwError.js';

export const getAll = catchError(async (req, res) => {
  const { queryStr, values } = dynamicQuery('pegawai', req.query);

  const pegawai = await query(queryStr, values);
  if (pegawai.length <= 0) throwError(404);

  return res.success(200, pegawai);
});

export const get = catchError(async (req, res) => {
  const { id } = req.params;

  const pegawai = await query('SELECT * FROM pegawai WHERE id_pegawai = ?', [id]);
  if (pegawai.length <= 0) throwError(404);

  return res.success(200, pegawai);
});

export const post = catchError(async (req, res) => {
  return res.success('Tambah Data Pegawai');
});

export const patch = catchError(async (req, res) => {
  const { id } = req.params;

  return res.success(`Edit Data Pegawai id: ${id}`);
});

export const del = catchError(async (req, res) => {
  const { id } = req.params;

  return res.success(`Hapus Data Pegawai id: ${id} `);
});
