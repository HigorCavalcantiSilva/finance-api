const express = require('express');
const cors = require('cors');

const UserRoutes = require('./src/routes/userRoutes');
const SalaryRoutes = require('./src/routes/salaryRoutes');
const EarningRoutes = require('./src/routes/earningRoutes');
const ExpenceRoutes = require('./src/routes/expenceRoutes');
const SavingRoutes = require('./src/routes/savingRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/users', UserRoutes);
app.use('/salaries', SalaryRoutes);
app.use('/earnings', EarningRoutes);
app.use('/expences', ExpenceRoutes);
app.use('/savings', SavingRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
})