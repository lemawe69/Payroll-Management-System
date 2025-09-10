const express = require('express');
const router = express.Router();
const payrollController = require('../controllers/payrollController');

router.get('/employees', payrollController.getEmployees);
router.post('/employees', payrollController.addEmployee);

router.get('/records', payrollController.getPayrolls);
router.post('/records', payrollController.addPayroll);

module.exports = router;