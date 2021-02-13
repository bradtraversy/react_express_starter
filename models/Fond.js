const mongoose = require('mongoose');

const FondSchema = mongoose.Schema({
  city: String,
  foreign_agent: Number,
  has_potanin: Boolean,
  has_presgrant: Boolean,
  api_id: Number,
  is_verified: Boolean,
  logo: String,
  path: String,
  regions: String,
  short_name_visible: String,
  slug: String,
  sub_types: [],
});

module.exports = mongoose.model('Fond', FondSchema);
