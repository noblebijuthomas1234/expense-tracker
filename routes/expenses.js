const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

// Add expense route
router.post('/', async (req, res) => {
  const { userId, date, amount, category, description } = req.body;

  const newExpense = new Expense({
    userId,
    date,
    amount,
    category,
    description,
  });

  try {
    const savedExpense = await newExpense.save();
    res.status(200).json(savedExpense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add expense' });
  }
});

module.exports = router;
