const Employee = require('../models/employeeModel');
const Payroll = require('../models/payrollModel');

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.getAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addEmployee = async (req, res) => {
  try {
    const { name, position, salary } = req.body;
    const newEmployee = await Employee.create({ name, position, salary });
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPayrolls = async (req, res) => {
  try {
    const payrolls = await Payroll.getAll();
    res.json(payrolls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPayroll = async (req, res) => {
  try {
    const { employee_id, month, year, amount } = req.body;
    const newPayroll = await Payroll.create({ employee_id, month, year, amount });
    res.status(201).json(newPayroll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  getPayrolls,
  addPayroll,
};