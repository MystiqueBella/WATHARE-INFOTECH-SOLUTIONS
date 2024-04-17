const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vibrationRoutes = require('./routes/vibrationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/machineDataDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/vibrations', vibrationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
