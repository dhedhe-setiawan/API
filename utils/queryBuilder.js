import pool from '../config/connect.js';

const query = async (sql, values) => {
  const [result] = await pool.query(sql, values ?? []);
  return result;
};

export default query;

export const selectData = async (table, filters = {}, cond = 'LIKE', join = 'AND') => {
  let queryStr = `SELECT * FROM \`${table}\``; // Pakai backtick untuk nama tabel agar aman
  const values = [];

  if (Object.keys(filters).length > 0) {
    const conditions = Object.keys(filters).map((key) => {
      let value = filters[key];
      let operator = cond.toUpperCase(); // Pastikan kondisi huruf besar semua (LIKE, =, >, <, dsb.)

      if (operator === 'LIKE') {
        value = `%${value}%`; // LIKE hanya cocok untuk pencarian teks
      }

      values.push(value);
      return `\`${key}\` ${operator} ?`; // Pakai backtick di nama kolom agar aman
    });

    queryStr += ` WHERE ${conditions.join(` ${join} `)}`;
  }

  return await query(queryStr, values);
};

export const insertData = async (table, data) => {
  const fields = Object.keys(data);
  const placeholders = fields.map(() => '?').join(', ');
  const values = Object.values(data);

  const queryStr = `INSERT INTO ${table} (${fields.join(', ')}) VALUES (${placeholders})`;

  return await query(queryStr, values);
};

export const updateData = async (table, data, id) => {
  let queryStr = `UPDATE \`${table}\` SET ?`;
  const values = [data];

  if (id && Object.keys(id).length === 1) {
    const key = Object.keys(id)[0]; // Ambil satu-satunya key dalam object id
    values.push(id[key]);
    queryStr += ` WHERE \`${key}\` = ?`;
  }

  return await query(queryStr, values);
};

export const deleteData = async (table, id) => {
  let queryStr = `DELETE FROM \`${table}\` `;
  const values = [];

  if (id && Object.keys(id).length === 1) {
    const key = Object.keys(id)[0]; // Ambil satu-satunya key dalam object id
    values.push(id[key]);
    queryStr += ` WHERE \`${key}\` = ?`;
  }

  return await query(queryStr, values);
};
