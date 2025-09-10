const pool = require('./db');

const Employee = {
  async getAll() {
    const res = await pool.query('SELECT * FROM employees ORDER BY id');
    return res.rows;
  },
  async getById(id) {
    const res = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
    return res.rows[0];
  },
  async create({ name, position, salary }) {
    const res = await pool.query(
      'INSERT INTO employees (name, position, salary) VALUES ($1, $2, $3) RETURNING *',
      [name, position, salary]
    );
    return res.rows[0];
  },
};

module.exports = Employee;