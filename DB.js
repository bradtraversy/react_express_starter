const mongoose = require('mongoose');
const { seedTags, seedFondsBySlug, findSlugs, getFondsBySlug } = require('./seed');

require('dotenv').config();

// подключение к БД

const pass = process.env.DB_PASSWORD
const dbPath = `mongodb+srv://help-needed:${pass}@cluster0.ba4yt.mongodb.net/help-needed`;

mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Mongoose connected to %s database', dbPath);
  })
  .catch((err) => {
    console.log('Database connection error', err.message);
  });

