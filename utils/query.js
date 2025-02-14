import pool from '../config/connect.js';

const query = async (sql, values) => {
  const [result] = await pool.query(sql, values ?? []);
  return result;
};

export default query;
