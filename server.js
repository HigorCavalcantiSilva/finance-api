const express = require('express');
const cors = require('cors');

const UserRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/users', UserRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
})