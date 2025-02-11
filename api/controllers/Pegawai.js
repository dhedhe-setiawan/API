import response from '../response.js';

export const getAll = async (req, res) => {
  return response(res, 200, 'Tampilkan Semua Data Pegawai');
};

export const get = async (req, res) => {
  const { id } = req.params;

  return response(res, 200, `Tampilkan Data Pegawai Id : ${id}`);
};

export const post = async (req, res) => {
  return response(res, 200, 'Tambah Data Pegawai');
};

export const patch = async (req, res) => {
  const { id } = req.params;

  return response(res, 200, `Edit Data Pegawai id: ${id}`);
};

export const del = async (req, res) => {
  const { id } = req.params;

  return response(res, 200, `Hapus Data Pegawai id: ${id} `);
};
