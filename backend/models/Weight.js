const mongoose = require('mongoose');

const WeightSchema = new mongoose.Schema({
  current: {
    type: [Number],
    required: true
  },
  expected: {
    type: [Number],
    required: true
  }
});

module.exports = mongoose.model('Weight', WeightSchema);
