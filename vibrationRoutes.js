const express = require('express');
const VibrationData = require('./models/VibrationData');
const router = express.Router();


router.post('/', async (req, res) => {
  const { ts, machine_status, vibration } = req.body;
  const newData = new VibrationData({ ts, machine_status, vibration });
  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const data = await VibrationData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
