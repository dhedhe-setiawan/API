import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { selectData } from '../utils/queryBuilder.js';

dotenv.config();

export const login = async (req, res) => {
  const { username, password } = req.body;

  // Cek apakah username ada di database
  const user = await selectData('pegawai', { username });

  if (user.length === 0) {
    return res.status(401).json({ message: 'Username tidak ditemukan' });
  }

  // Cek apakah password cocok
  const isMatch = await bcrypt.compare(password, user[0].password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Password salah' });
  }

  // Buat token JWT
  const token = jwt.sign(
    {
      id: user[0].id_pegawai,
      username: user[0].username,
      access: user[0].jabatan,
      nama: user[0].nama,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );

  return res.success(200, token, 'Login berhasil');
};
