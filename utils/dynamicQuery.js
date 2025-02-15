const dynamicQuery = (table, filters) => {
  let queryStr = `SELECT * FROM ${table}`;
  const values = [];

  if (Object.keys(filters).length > 0) {
    const conditions = Object.keys(filters).map((key) => {
      values.push(`%${filters[key]}%`);
      return `${key} LIKE ?`;
    });

    queryStr += ` WHERE ${conditions.join(' AND ')}`;
  }

  return { queryStr, values };
};

export default dynamicQuery;
