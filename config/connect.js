import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  timezone: '+08:00',
  waitForConnections: true, // Tunggu hingga ada koneksi yang tersedia
  connectionLimit: 5, // Batas maksimal koneksi yang dibuat dalam pool
  queueLimit: 0, // Tidak ada batas antrian
});

export default pool;
