const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
  name: String,
  slug: String,
  is_active: Number,
  sub_type: String,
});

module.exports = mongoose.model('Tag', TagSchema);
