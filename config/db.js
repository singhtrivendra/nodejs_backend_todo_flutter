const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const mongoURL = process.env.MONGO_URL;

if (!mongoURL) {
  throw new Error("MONGO_URL environment variable is not defined");
}

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('open', () => {
  console.log('MongoDB Connected');
});

db.on('error', (err) => {
  console.error('MongoDB Connection Error:', err);
});

module.exports = db;
