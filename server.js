const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const expenseRoutes = require('./routes/expenses');
app.use('/api/expenses', expenseRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://localhost/your-database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const port = 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

