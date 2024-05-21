const mongoose = require('mongoose');

const CaloriesSchema = new mongoose.Schema({
  data: {
    type: [Number],
    required: true
  }
});

module.exports = mongoose.model('Calories', CaloriesSchema);
