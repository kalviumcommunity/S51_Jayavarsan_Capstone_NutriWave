const express = require('express');
const router = express.Router();
const Weight = require('../models/Weight');


router.get('/', async (req, res) => {
  try {
    const weight = await Weight.findOne();
    res.json(weight ? weight : { current: [], expected: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const { weight } = req.body;
  try {
    let weightData = await Weight.findOne();
    if (!weightData) {
      weightData = new Weight({ current: [weight], expected: [] });
    } else {
      weightData.current.push(weight);
    }
    await weightData.save();
    res.json({ message: "Weight data updated successfully", weightData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
