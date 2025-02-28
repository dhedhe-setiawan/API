import pool from '../config/connect.js';

const query = async (sql, values) => {
  const [result] = await pool.query(sql, values ?? []);
  return result;
};

export default query;

export const selectData = async (
  table,
  filters = {},
  sortBy = '',
  joinTable = '', // Tambahin nama tabel yang mau di-join
  joinOn = '', // Tambahin kondisi join, misal "barang_masuk.id_barang = barang.id_barang"
  cond = 'LIKE',
  join = 'AND',
  sortOrder = 'ASC'
) => {
  let queryStr = `SELECT * FROM \`${table}\``;
  const values = [];

  // Kalau ada joinTable, tambahin JOIN ke query
  if (joinTable && joinOn) {
    queryStr += ` JOIN \`${joinTable}\` ON ${joinOn}`;
  }

  if (Object.keys(filters).length > 0) {
    const conditions = Object.keys(filters).map((key) => {
      let value = filters[key];
      let operator = cond.toUpperCase();

      if (operator === 'LIKE') {
        value = `%${value}%`;
      }

      values.push(value);
      return `\`${key}\` ${operator} ?`;
    });

    queryStr += ` WHERE ${conditions.join(` ${join} `)}`;
  }

  // Tambahkan SORT BY jika ada
  if (sortBy) {
    const safeSortOrder = sortOrder.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    queryStr += ` ORDER BY \`${sortBy}\` ${safeSortOrder}`;
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
