const pool = require('./db');

const Payroll = {
  async getAll() {
    const res = await pool.query('SELECT * FROM payroll ORDER BY id');
    return res.rows;
  },
  async create({ employee_id, month, year, amount }) {
    const res = await pool.query(
      'INSERT INTO payroll (employee_id, month, year, amount) VALUES ($1, $2, $3, $4) RETURNING *',
      [employee_id, month, year, amount]
    );
    return res.rows[0];
  },
};

module.exports = Payroll;