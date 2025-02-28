import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: 'Token tidak ditemukan' });
  }

  const token = authHeader.split(' ')[1]; // Ambil token setelah "Bearer "
  if (!token) {
    return res.status(403).json({ message: 'Token tidak valid' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Simpan user info ke req.user
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token tidak valid' });
  }
};
