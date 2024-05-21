const express = require('express');
const router = express.Router();
const Calories = require('../models/Calories');

router.get('/', async (req, res) => {
  try {
    const calories = await Calories.findOne();
    res.json(calories ? calories.data : []);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
