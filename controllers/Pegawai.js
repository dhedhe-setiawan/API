import asyncHandler from '../utils/asyncHandler.js';
import query from '../utils/query.js';

export const getAll = asyncHandler(async (req, res) => {
  const pegawai = await query('SELECT * FROM pegawai');

  return res.success('Tampilkan Semua Data Pegawai', pegawai);
});

export const get = async (req, res) => {
  const { id } = req.params;

  return res.success(`Tampilkan Data Pegawai Id : ${id}`);
};

export const post = async (req, res) => {
  return res.success('Tambah Data Pegawai');
};

export const patch = async (req, res) => {
  const { id } = req.params;

  return res.success(`Edit Data Pegawai id: ${id}`);
};

export const del = async (req, res) => {
  const { id } = req.params;

  return res.success(`Hapus Data Pegawai id: ${id} `);
};
