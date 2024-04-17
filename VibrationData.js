const mongoose = require('mongoose');

const VibrationDataSchema = new mongoose.Schema({
  ts: Date,
  machine_status: { type: Number, default: null },
  vibration: Number
});

module.exports = mongoose.model('VibrationData', VibrationDataSchema);
