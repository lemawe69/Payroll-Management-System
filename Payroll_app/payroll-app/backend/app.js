const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // to parse JSON request bodies

const payrollRoutes = require('./routes/payrollRoutes');
app.use('/api/payroll', payrollRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});