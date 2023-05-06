const mongoose = require('mongoose');

async function connectMongo() {
  return mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected');
  })
}

module.exports = connectMongo;
